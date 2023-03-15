import { IStorageHelper } from "./IStorageHelper";

export class NativeStorageHelper<T> implements IStorageHelper<T> {

    async get(key: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

    async set(key: string, value: T): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async remove(key: string, value: T): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}