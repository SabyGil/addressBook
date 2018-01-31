let counter = 0;
export default function reducerContacts ( state = {
   contacts: [],
  }, action) {
  switch ( action.type ) {
    case 'ADD_CONTACT':
      return Object.assign({}, state, {
        contacts: state.contacts.concat({ contact: action.contact, id: counter })
      });

      case "DELETE_TODO":
       return Object.assign({}, state, {
         contacts: state.contacts.filter((contact) => contact.id !== action.id)
       });

      default:
        return state;
  }
};
