export class LocalStorage {
    set(key, value) {
        if (typeof value !== 'string') {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}