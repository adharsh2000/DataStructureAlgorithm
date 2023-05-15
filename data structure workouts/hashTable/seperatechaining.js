class HashTable {
    constructor(size = 5) {
      this.keyMap = new Array(size)
    }
    _hash(key) {
      let total = 0
      const PRIME = 31
      for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total * PRIME + value) % this.keyMap.length
      }
      return total
    }
    set(key, value) {
      let index = this._hash(key)
      const bucket = this.keyMap[index]
      if (!bucket) {
        this.keyMap[index] = [[key, value]]
      } else {
        const existing = bucket.find((item) => item[0] === key)
        if (existing) {
          existing[1] = value
        } else {
          bucket.push([key, value])
        }
      }
    }
    get(key) {
      let index = this._hash(key)
      const bucket = this.keyMap[index]
      if (bucket) {
        const result = bucket.find((item) => item[0] === key)
        return result[1]
      }
      return undefined
    }
    keys() {
      let result = []
      for (let item of this.keyMap) {
        for (let element of item) {
          result.push(element[0])
        }
      }
      return result
    }
    values() {
      let result = []
      for (let item of this.keyMap) {
        for (let element of item) {
          if (!result.includes(element[1])) {
            result.push(element[1])
          }
        }
      }
      return result
    }
    remove(key) {
      let index = this._hash(key)
      const bucket = this.keyMap[index]
      const element = bucket.find((item) => item[0] === key)
      if (element) bucket.splice(bucket.indexOf(element), 1)
    }
  }
  
  const table = new HashTable()
  
  table.set("one", 1)
  table.set("two", 2)
  table.set("three", 3)
  table.set("three", 13)
  table.set("four", 4)
  table.set("five", 5)
  table.set("six", 6)
  table.set("seven", 7)
  table.set("eight", 8)
  table.set("nine", 8)
  
  console.log(table.get("three"))
  
  console.log(table.get("seven"))
  
  console.log(table.keys())
  
  console.log(table.values())
  

// class HashTable {

//     constructor(size = 53) {
//       this.keyMap = new Array(size);
//     }
  
//     _hash(key) {
//       let total = 0;
//       for (let i = 0; i < key.length; i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0)
//         total = (total * 51 + value) % this.keyMap.length;
//       }
//       return total;
//     }
  
//     set(key, value) {
//       let index = this._hash(key);
//       if (!this.keyMap[index]) {
//         this.keyMap[index] = [];
//       }
//       // Check if key already exists in list
//       for (let i = 0; i < this.keyMap[index].length; i++) {
//         if (this.keyMap[index][i][0] === key) {
//           // If key exists, replace its value
//           this.keyMap[index][i][1] = value;
//           return "value updated";
//         }
//       }
//       // If key doesn't exist, add it to list
//       this.keyMap[index].push([key, value]);
//       return "value setted in :" + index;
//     }
  
//     get(key) {
//       let index = this._hash(key);
//       if (this.keyMap[index]) {
//         // Check each key-value pair in list for matching key
//         for (let i = 0; i < this.keyMap[index].length; i++) {
//           if (this.keyMap[index][i][0] === key) {
//             return this.keyMap[index][i][1];
//           }
//         }
//       }
//       return undefined;
//     }
//   }

  
//   const hash = new HashTable()
//   console.log(hash.set("hi","hello"));
//   console.log("hi","welcome");
//   console.log("open","close");