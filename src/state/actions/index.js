const CHANGE_POSITION = 'CHANGE_POSITION'
const SCRAMBLE = 'SCRAMBLE'

export function changePosition(id, num, emptyId) {
  return {
    type: CHANGE_POSITION,
    id,
    num,
    emptyId
  }
}

export function scramble(boardSize) {
  return {
    type: SCRAMBLE,
    boardSize
  }
}