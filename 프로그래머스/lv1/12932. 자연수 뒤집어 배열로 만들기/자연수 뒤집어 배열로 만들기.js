function solution(n) {
    const str = String(n)
    const arr = Array.from(str)
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(Number(arr[i]))
    }
    return newArr
}