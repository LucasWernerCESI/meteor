import { IStorageHelper } from "./IStorageHelper";
import { GetResult, Preferences } from '@capacitor/preferences';

export class NativeStorageHelper<T> implements IStorageHelper<T> {

    async get(key: string): Promise<T | null> {
        const result: GetResult = await Preferences.get({key: key});

        if (!result.value) return null;

        return JSON.parse(result.value) as T;
    }

    async set(key: string, value: T): Promise<void> {
        Preferences.set({
            key: key,
            value: JSON.stringify(value)
        });
    }

    async remove(key: string, value: T): Promise<void> {
        throw new Error("Method not implemented."); 
    }

}