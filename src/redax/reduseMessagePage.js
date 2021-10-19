const ADD_MESSAGE = 'ADD-MESSAGE';
const CARRENT_MESSAGE = 'CARRENT-MESSAGE';


let initialState = {
  dataMessageUser: [
    { name: 'Honey', id: '1' },
    { name: 'Mom', id: '2' },
    { name: 'Sister', id: '3' },
    { name: 'Andry', id: '4' },
    { name: 'Dimon', id: '5' },
    { name: 'My soul', id: '6' },
  ],

  dataMessageText: [
    { text: 'For now your situation really complicated :)', id: '1' },
    { text: 'And only you have power to change everything !', id: '2' },
    { text: 'Use your power more then 100% !', id: '3' },
  ],

  newDataMessageText: '...'
};


const reduseMessagePage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        text: state.newDataMessageText,
      };
      return {
        ...state,
        dataMessageText: [...state.dataMessageText, newMessage]
      };
    };
    case CARRENT_MESSAGE:
      return {
        ...state,
        newDataMessageText: action.carrentText,
      }
    default:
      return state;
  };
};


export const actionCreatorAddMessage = () => {
  return {
    type: ADD_MESSAGE,
  }
};

export const actionCreatorCarrentText = (text) => {
  return {
    type: CARRENT_MESSAGE,
    carrentText: text,
  }
};

export default reduseMessagePage;