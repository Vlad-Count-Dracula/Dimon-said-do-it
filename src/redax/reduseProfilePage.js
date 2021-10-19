const ADD_POST = 'ADD-POST';
const CARRENT_VALUE = 'CARRENT-VALUE';

let initialState = {
  postDataMessage: [
    { message: 'I think your falls one time will make you possible to fly so far, I belive in you my friend !', likeCount: '23', id: '1', },
    { message: 'This project your first step for greatnes future ! One time you`ll become Hokage !', likeCount: '8', id: '2', },
  ],

  newPostText: '...'
};


const reduseProfilePage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newElement = {
        message: state.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        postDataMessage: [...state.postDataMessage, newElement],
      };
    };
    case CARRENT_VALUE:
      return {
        ...state,
        newPostText: action.carrentMessage
      };
    default:
      return state;
  };
};

export const actionCreatorAddPost = () => {
  return {
    type: ADD_POST,
  }
};

export const actionCreatorCarrentMessage = (text) => {
  return {
    type: CARRENT_VALUE,
    carrentMessage: text,
  }
};


export default reduseProfilePage;