import { IStorageHelper } from "./IStorageHelper";

export class LocalStorageHelper<T> implements IStorageHelper<T> {
    private _localStorage: Storage;

    constructor() {
        this._localStorage = window.localStorage;
    }

    async get(key: string): Promise<T | null> {
        const value = this._localStorage.getItem(key);

        if (!value) return null;

        return JSON.parse(value) as T;
    }

    async set(key: string, value: T): Promise<void> {
        this._localStorage.setItem(key, JSON.stringify(value));
    }

    async remove(key: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}