function solution(array, commands) {
  let answer = []
  commands.forEach((el) => {
    const [i, j, k] = el
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1])
  })
  return answer
}