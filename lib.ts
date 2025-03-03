export default class Dictionnaire {
    private map = new Map();
    private set = new Set();

    public addValue(key: string | number,value: string | number) {
        this.map.set(key,value);
        this.set.add(value)
    }

    public hasValue(value: string | number): boolean {
        return (this.set.has(value))? true : false;
    }

    public hasKey(key: string | number): boolean {
        return (this.map.has(key))? true : false;
    }

    public getValue(key: string | number): string | number {
        return this.map.get(key);
    }
}