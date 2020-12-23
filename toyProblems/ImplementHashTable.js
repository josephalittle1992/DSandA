class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    get(key) {
        let address = this._hash(key);
        for (let i = 0; i < this.data[address].length; i++) {
            if (this.data[address][i][0] == key) {
                return this.data[address][i][1];
            }
        }
        return 'Does not exist';

    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);

    }

    keys() {
        if (!this.data.length) {
            return undefined
        }
        let result = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length) {
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0])
                    }
                } else {
                    result.push(this.data[i][0])
                }
            }
        }
        return result;
    }
}




var map = new HashTable(5);
map.set(5, 'hello');
map.set(4, 'bye');
map.set(1, 'wave');
console.log(map.keys());