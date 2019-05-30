// eslint-disable-next-line no-unused-vars
export default function shipsReducer(state = [1], action) {
  switch (action.type) {
    case 'LOAD_SHIPS':
      return action.ships;
    default: return state;
  }
}
