import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const appName: string = 'ShowUrs Blog';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    constructor() { }

    getAppName(): string {
        return appName;
    }

    getApiUrl(): string {
        return environment.apiUrl;
    }
}
