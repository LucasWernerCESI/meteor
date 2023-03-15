export interface IStorageHelper<T> {
    get(key: string): Promise<T |null>
    set(key: string, value: T): Promise<void>
    // add(key: string, value: T): Promise<void>
    remove(key: string, value: T): Promise<void>
}