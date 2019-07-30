setlocal
@if "%SCM_TRACE_LEVEL%" NEQ "4" @echo off

:: ----------------------
:: KUDU Deployment Script
:: Version: 1.0.15
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
SET DEPLOYMENT_TEMP=%ARTIFACTS%\wwwroot\cms-content\themes\Electronics\default

IF NOT DEFINED DEPLOYMENT_SOURCE (
    SET DEPLOYMENT_SOURCE=%~dp0.
)

IF NOT DEFINED DEPLOYMENT_TARGET (
    SET DEPLOYMENT_TARGET=%~dp0..\
)

@echo ARTIFACTS: %ARTIFACTS%
@echo DEPLOYMENT_SOURCE: %DEPLOYMENT_SOURCE%
@echo DEPLOYMENT_TARGET: %DEPLOYMENT_TARGET%
@echo DEPLOYMENT_TEMP: %DEPLOYMENT_TEMP%

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
goto Deployment

:: Utility Functions
:: -----------------

:SelectNodeVersion


  SET NPM_CMD=npm
  SET NODE_EXE=node


goto :EOF

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:: Deployment
:: ----------

:Deployment
echo Handling node.js deployment.

:: 1. Select node version
call :SelectNodeVersion

pushd "%DEPLOYMENT_SOURCE%"
cd %DEPLOYMENT_SOURCE%\ng-app\
:: 2. Install npm packages
IF EXIST "%DEPLOYMENT_SOURCE%\ng-app\package.json" (
  call :ExecuteCmd !NPM_CMD! install
  IF !ERRORLEVEL! NEQ 0 goto error
)

:: 3. Angular Prod Build //If you had generated this yourself then please add this step manually!!)
IF EXIST "%DEPLOYMENT_SOURCE%\ng-app\angular.json" (
echo Building App in %DEPLOYMENT_SOURCE%…
call :ExecuteCmd !NPM_CMD! run build
:: If the above command fails comment above and uncomment below one
:: call ./node_modules/.bin/ng build –prod
IF !ERRORLEVEL! NEQ 0 goto error
)
popd


xcopy "%DEPLOYMENT_SOURCE%\assets\*.*" "%DEPLOYMENT_TEMP%\assets" /S /R /Y /I
xcopy "%DEPLOYMENT_SOURCE%\layout\*.*" "%DEPLOYMENT_TEMP%\layout" /S /R /Y /I
xcopy "%DEPLOYMENT_SOURCE%\locales\*.*" "%DEPLOYMENT_TEMP%\locales" /S /R /Y /I
xcopy "%DEPLOYMENT_SOURCE%\settings\*.*" "%DEPLOYMENT_TEMP%\settings" /S /R /Y /I
xcopy "%DEPLOYMENT_SOURCE%\snippets\*.*" "%DEPLOYMENT_TEMP%\snippets" /S /R /Y /I
xcopy "%DEPLOYMENT_SOURCE%\templates\*.*" "%DEPLOYMENT_TEMP%\templates" /S /R /Y /I

IF !ERRORLEVEL! NEQ 0 goto error

:: 4. KuduSync
IF /I "%IN_PLACE_DEPLOYMENT%" NEQ "1" (
    call :ExecuteCmd "%KUDU_SYNC_CMD%" -v 50 -f "%ARTIFACTS%" -t "%DEPLOYMENT_TARGET%" -n "%NEXT_MANIFEST_PATH%" -p "%PREVIOUS_MANIFEST_PATH%" -i ".git;.hg;.deployment;deploy.cmd"
    IF !ERRORLEVEL! NEQ 0 goto error
)

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
goto end

:: Execute command routine that will echo out when error
:ExecuteCmd
set _CMD_=%*
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