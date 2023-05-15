class Node {
    constructor() {
        this.children = {}
        this.isWordEnd = false
    }
}

class Triew {
    constructor() {
        this.root = new Node()
    }
    insert(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++){
            let charToInsert = word[i];
            if (!(charToInsert in curr.children)) {
                curr.children[charToInsert] = new Node()
            }        
            curr = curr.children[charToInsert]
        }
        curr.isWordEnd = true        
    }

    contains(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++){
            let charToFind = word[i];
            if (!(charToFind in curr.children)) {
                return false  
            }
            curr = curr.children[charToFind]
        }
        return curr.isWordEnd
    }

    search(node, prefix, words) {
        if (node.isWordEnd) {
            words.push(prefix);
        }
        for (let char in node.children) {
            this.search(node.children[char], prefix + char, words);
        }
    }

    startWithPrefix(prefix) {
        let curr = this.root;
        for(let i = 0; i < prefix.length; i++){
            let charToFind = prefix[i];
            if (!(charToFind in curr.children)) {
                return []
            }
            curr = curr.children[charToFind]
        }
        let words = [];
        this.search(curr, prefix, words);
        return words;
    }
}

const tr = new Triew();
tr.insert("hello")
// tr.insert("welcome")
// tr.insert("hell")
// console.log(tr.contains("hello"));
console.log(tr.startWithPrefix("hello"));
console.log(tr.root);
