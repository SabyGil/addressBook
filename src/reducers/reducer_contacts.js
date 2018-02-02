let counter = 0;
export default function reducerContacts ( state = {
   contacts: [],
  }, action) {
  switch ( action.type ) {
    case 'ADD_CONTACT':
    counter++;
      return Object.assign({}, state, {
        contacts: state.contacts.concat({
          firstName: action.firstName,
          lastName: action.lastName,
          number: action.number,
          address: action.address,
          id: counter })
      });

      case "DELETE_CONTACT":
       return Object.assign({}, state, {
         contacts: state.contacts.filter((contact) => contact.id !== action.id)
       });

      default:
        return state;
  }
};
