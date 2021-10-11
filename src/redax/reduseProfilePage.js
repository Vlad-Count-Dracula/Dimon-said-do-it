const ADD_POST = 'ADD-POST';
const  CARRENT_VALUE = 'CARRENT-VALUE';


const reduseProfilePage = (state, action) => {
    if ( action.type === ADD_POST ) {
        let newElement = {
          message : state.newPostText,
          likeCount : 0,
        };
        state.postDataMessage.push(newElement);
      } else if ( action.type === CARRENT_VALUE) {
        state.newPostText = action.carrentMessage;
      } 

      return state;
    };


export default reduseProfilePage;