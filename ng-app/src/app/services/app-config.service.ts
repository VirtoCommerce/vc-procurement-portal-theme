import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppConfig } from '../models/iapp-config';
import { environment } from 'src/environments/environment';

export function initializeAppConfig(appConfig: AppConfig) {
  return () => appConfig.load();
}

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  static settings: IAppConfig;
  constructor(private http: HttpClient) {}
  load() {
        const jsonFile = environment.name ? `/assets/config/config.${environment.name}.json` : '/assets/config/config.json' ;
        return new Promise<void>((resolve, reject) => {
            this.http.get<IAppConfig>(jsonFile).toPromise().then((response: IAppConfig) => {
               AppConfig.settings = response;
               resolve();
            }).catch((response: any) => {
               reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }

}
