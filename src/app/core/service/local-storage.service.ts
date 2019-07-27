import { Injectable } from '@angular/core';

const service = localStorage;

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    public get<T>(key: string): any {
        return JSON.parse(service.getItem(key)) as T;
    }

    public getList<T>(key: string) {
        const before = service.getItem(key);
        return before ? (JSON.parse(before) as T[]) : [];
    }

    public set(key: string, value: any): void {
        if (!value && value === undefined) { return; }
        const arr = JSON.stringify(value);
        service.setItem(key, arr);
    }
}
