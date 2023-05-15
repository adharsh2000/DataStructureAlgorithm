function heapify(arr, n, i) {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right
    }

    if (largest !== i) {
        ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, n, largest)
    }
}

function heapSort(arr) {
    const n = arr.length

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]]

        // call max heapify on the reduced heap
        heapify(arr, i, 0)
    }

    return arr
}

const arr = [12, 11, 13, 5, 6, 7]
console.log(heapSort(arr)) // Output: [5, 6, 7, 11, 12, 13]
