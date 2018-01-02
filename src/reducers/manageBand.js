let counter = 0;

export default function manageBand (state = {
  bands: []
}, action){
  switch(action.type){
    case 'ADD_BAND':
      counter++;
      action.band['id'] = counter;
      return { bands: state.bands.concat(action.band) };

      case 'DELETE_BAND':
        const bands = state.bands.filter(band => band.id !== action.id)
        return { bands }
    default:

      return state
  }
}
