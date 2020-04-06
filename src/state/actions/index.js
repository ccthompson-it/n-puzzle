const CHANGE_POSITION = 'CHANGE_POSITION'
const SCRAMBLE = 'SCRAMBLE'

export function changePosition(x, y) {
  return {
    type: CHANGE_POSITION,
    x,
    y
  }
}

export function scramble(boardSize) {
  return {
    type: SCRAMBLE,
    boardSize
  }
}