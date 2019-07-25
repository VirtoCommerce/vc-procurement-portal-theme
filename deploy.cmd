@if "%SCM_TRACE_LEVEL%" NEQ "4" @echo off

:: ----------------------
:: KUDU Deployment Script
:: Version: 1.0.6
:: ----------------------

:: Prerequisites
:: -------------

:: Verify node.js installed
where node 2>nul >nul
IF %ERRORLEVEL% NEQ 0 (
    echo Missing node.js executable, please install node.js, if already installed make sure it can be reached from current environment.
    goto error
)

:: Setup
:: -----

setlocal enabledelayedexpansion

SET ARTIFACTS=%~dp0artifacts

IF NOT DEFINED DEPLOYMENT_SOURCE (
    SET DEPLOYMENT_SOURCE=%~dp0.
)

IF NOT DEFINED DEPLOYMENT_TARGET (
    SET DEPLOYMENT_TARGET=%ARTIFACTS%\wwwroot
)

IF NOT DEFINED NEXT_MANIFEST_PATH (
    SET NEXT_MANIFEST_PATH=%ARTIFACTS%\manifest

    IF NOT DEFINED PREVIOUS_MANIFEST_PATH (
        SET PREVIOUS_MANIFEST_PATH=%ARTIFACTS%\manifest
    )
)

IF NOT DEFINED KUDU_SYNC_CMD (
    :: Install kudu sync
    echo Installing Kudu Sync
    call npm install kudusync -g --silent
    IF !ERRORLEVEL! NEQ 0 goto error

    :: Locally just running "kuduSync" would also work
    SET KUDU_SYNC_CMD=%appdata%\npm\kuduSync.cmd
)

IF NOT DEFINED DEPLOYMENT_TEMP (
    SET DEPLOYMENT_TEMP=%temp%\___deployTemp%random%
)

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: Deployment
:: ----------

:: Build to the temporary path
set pages_target=%DEPLOYMENT_TEMP%\wwwroot\App_Data\cms-content\pages\vccom
set theme_target=%DEPLOYMENT_TEMP%\wwwroot\App_Data\cms-content\themes\vccom\default

:: Copy IISUrlRewrite to the site root IISUrlRewrite.xml -> \
xcopy "%DEPLOYMENT_SOURCE%\IISUrlRewrite.xml" "%DEPLOYMENT_TEMP%" /S /R /Y /I
IF !ERRORLEVEL! NEQ 0 goto error

:: Copy all files form  wwwroot\*.* -> wwwroot\wwwroot\*.* site folder
xcopy "%DEPLOYMENT_SOURCE%\wwwroot\*.*" "%DEPLOYMENT_TEMP%\wwwroot" /S /R /Y /I
IF !ERRORLEVEL! NEQ 0 goto error

:: Copy all files form  pages\*.* -> wwwroot\cms-content\pages\vccom 
xcopy "%DEPLOYMENT_SOURCE%\pages\*.*" "%pages_target%" /S /R /Y /I
IF !ERRORLEVEL! NEQ 0 goto error

:: Copy all files form  pages\*.* -> wwwroot\cms-content\themes\vccom\default 
xcopy "%DEPLOYMENT_SOURCE%\theme\*.*" "%theme_target%" /S /R /Y /I
IF !ERRORLEVEL! NEQ 0 goto error

:: KuduSync
call :ExecuteCmd "%KUDU_SYNC_CMD%" -v 0 -f "%DEPLOYMENT_TEMP%" -t "%DEPLOYMENT_TARGET%" -n "%NEXT_MANIFEST_PATH%" -p "%PREVIOUS_MANIFEST_PATH%" -i ".git;.hg;.deployment;deploy.cmd"
IF !ERRORLEVEL! NEQ 0 goto error

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

:: Post deployment stub
IF DEFINED POST_DEPLOYMENT_ACTION call "%POST_DEPLOYMENT_ACTION%"
IF !ERRORLEVEL! NEQ 0 goto error

goto end

:: Execute command routine that will echo out when error
:ExecuteCmd
setlocal
set _CMD_=%*
echo command=%_CMD_%
call %_CMD_%
if "%ERRORLEVEL%" NEQ "0" echo Failed exitCode=%ERRORLEVEL%, command=%_CMD_%
exit /b %ERRORLEVEL%

:error
endlocal
echo An error has occurred during web site deployment.
call :exitSetErrorLevel
call :exitFromFunction 2>nul

:exitSetErrorLevel
exit /b 1

:exitFromFunction
()

:end
endlocal
echo Finished successfully.
