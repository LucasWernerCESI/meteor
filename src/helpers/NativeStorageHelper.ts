import { IStorageHelper } from "./IStorageHelper";
import { NativeStorage } from "@awesome-cordova-plugins/native-storage" 

export class NativeStorageHelper<T> implements IStorageHelper<T> {

    async get(key: string): Promise<T> {
        return NativeStorage.getItem(key);
    }

    async set(key: string, value: T): Promise<void> {
        NativeStorage.setItem(key, value);
    }

    async remove(key: string, value: T): Promise<void> {
        throw new Error("Method not implemented."); 
    }

}