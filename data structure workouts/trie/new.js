class Node {
  constructor() {
    this.keys = new Map()
    this.end = false
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word) {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i]
      if (!current.keys.has(charToInsert)) {
        current.keys.set(charToInsert, new Node())
      }
      current = current.keys.get(charToInsert)
    }
    current.end = true
  }

  contains(word) {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      if (!current.keys.has(char)) {
        return false
      }
      current = current.keys.get(char)
    }
    return current.end
  }

  prefix(word) {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      if (!current.keys.has(char)) {
        return false
      }
      current = current.keys.get(char)
    }
    return true
  }

  prefixCount(word) {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      if (!current.keys.has(char)) {
        return 0
      }
      // if (i === word.length - 1) break
      current = current.keys.get(char)
    }
    if (current.end) {
      return current.keys.size + 1
    }
    return this.countWords(current)
  }

  countWords(node) {
    let count = 0
    if (node.end) {
      count++
    }
    for (let char of node.keys.keys()) {
      // console.log(char)
      count += this.countWords(node.keys.get(char))
    }
    return count
  }

  remove(word) {
    this.removeHelper(this.root, word, 0)
  }

  removeHelper(current, str, index) {
    if (index === str.length) {
      current.end = false
      return current.keys.size === 0
    }
    let char = str[index]
    const nextNode = current.keys.get(char)
    if (!nextNode) return false
    let shouldDeleteChar = this.removeHelper(nextNode, str, ++index)
    if (shouldDeleteChar) {
      current.keys.delete(char)
      return current.keys.size === 0
    }
    return false
  }

  longestCommonPrefix() {
    let current = this.root
    let arr = []
    while (current.keys.size === 1 && !current.end) {
      let char = Array.from(current.keys.keys())[0]
      arr.push(char)
      current = current.keys.get(char)
    }
    if (arr.length === 0) {
      return ""
    } else {
      return arr.join("")
    }
  }

}

const trie = new Trie()

trie.insert("hello")

trie.insert("help")
trie.insert("helo")
trie.insert("low")
trie.insert("high")
trie.insert("air")


// console.log(trie.contains("help"))
// trie.remove("help")
// console.log(trie.contains("help"))

// console.log(trie.prefix("hel"))

// console.log(trie.prefixCount("h")) 

console.log(trie.longestCommonPrefix())