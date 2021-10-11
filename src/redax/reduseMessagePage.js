const ADD_MESSAGE = 'ADD-MESSAGE';
const CARRENT_MESSAGE = 'CARRENT-MESSAGE';

const reduseMessagePage = (state, action) => {
         if ( action.type === ADD_MESSAGE) {
            let newMessage = {
            text : state.newDataMessageText,
            };
            state.dataMessageText.push(newMessage);
        } else if ( action.type === CARRENT_MESSAGE ) {
            state.newDataMessageText = action.carrentText;
      }

      return state;
};

export default reduseMessagePage;