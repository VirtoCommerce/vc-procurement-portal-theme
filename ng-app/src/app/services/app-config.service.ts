import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppConfig } from '@models/iapp-config';

export function initializeAppConfig(appConfig: AppConfig) {
  return () => appConfig.load();
}

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  static settings: IAppConfig;
  constructor(private http: HttpClient) {}
  async load() {
        // const jsonFile = environment.name ? `src/assets/config/config.${environment.name}.json` : 'src/assets/config/config.json' ;
        // //const jsonFile = environment.name ? `/settings1/config.${environment.name}.json` : '/settings1/config.json' ;

        // const settingsData = await import(jsonFile);
        // AppConfig.settings =  settingsData as IAppConfig;

        // // return new Promise<void>((resolve, reject) => {
        // //     this.http.get<IAppConfig>(jsonFile).toPromise().then((response: IAppConfig) => {
        // //        AppConfig.settings = response;
        // //        resolve();
        // //     }).catch((response: any) => {
        // //        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
        // //     });
        // // });
    }

}
