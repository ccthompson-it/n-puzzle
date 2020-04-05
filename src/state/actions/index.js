const CHANGE_POSITION = 'CHANGE_POSITION'

export function changePosition(x, y) {
  return {
    type: CHANGE_POSITION,
    x,
    y
  }
}