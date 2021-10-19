import reduseMessagePage from "./reduseMessagePage";
import reduseProfilePage from "./reduseProfilePage";
import reduseSideBarPage from "./reduseSideBarPage";



const ADD_POST = 'ADD-POST';
const  CARRENT_VALUE = 'CARRENT-VALUE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CARRENT_MESSAGE = 'CARRENT-MESSAGE';


let store = {
  reRenderSide() {
    console.log('State changed');
  },
  
  _state : {
    messagePage : {
        dataMessageUser : [
            {name:'Honey', id:'1'},
            {name:'Mom', id:'2'},
            {name:'Sister', id:'3'},
            {name:'Andry', id:'4'},
            {name:'Dimon', id:'5'},
            {name:'My soul', id:'6'},
        ],

        dataMessageText : [
            {text: 'For now your situation really complicated :)'},
            {text: 'And only you have power to change everything !'},
            {text: 'Use your power more then 100% !'},
          ],

        newDataMessageText : '...'
        },

    profilePage : {
        postDataMessage : [
            {message: 'I think your falls one time will make you possible to fly so far, I belive in you my friend !', likeCount: '23'},
            {message: 'This project your first step for greatnes future ! One time you`ll become Hokage !', likeCount: '8' },
        ],

        newPostText : '...' 
    },

    sideBar : {
      sideBarLinks : [
        {link : '/profile' , title : 'Profile'},
        {link : '/messages' , title : 'Messages'},
        {link : '/news' , title : 'News'},
        {link : '/music' , title : 'Music'},
        {link : '/settings' , title : 'Settings'},
      ],
      dataFriends : [
        {name : 'Andry'},
        {name : 'Andry'},
        {name : 'Andry'},
      ],
    },
  },

  getState() {
    return this._state;
  },

  dispatch(action) {

    this._state.profilePage = reduseProfilePage(this._state.profilePage, action);
    this._state.messagePage = reduseMessagePage(this._state.messagePage, action);
    this._state.messagePage = reduseSideBarPage(this._state.messagePage, action);

    this._reRenderSide(this._state);

  },
  
  reRender(observe) {
   this._reRenderSide = observe;
 },

};


export const actionCreatorAddMessage = () => {
  return {
    type : ADD_MESSAGE,
  }
};

export const actionCreatorCarrentText = (text) => {
  return {
    type : CARRENT_MESSAGE,
    carrentText : text,
  }
};


export const actionCreatorAddPost = () => {
  return {
    type : ADD_POST,
  }
};

export const actionCreatorCarrentMessage = (text) => {
  return {
    type : CARRENT_VALUE, 
    carrentMessage : text ,
  }
};


export default store ;



// let reRenderSide = () => {
//   console.log('State changed');
// };


  // let state = {
  //   messagePage : {
  //       dataMessageUser : [
  //           {name:'Honey', id:'1'},
  //           {name:'Mom', id:'2'},
  //           {name:'Sister', id:'3'},
  //           {name:'Andry', id:'4'},
  //           {name:'Dimon', id:'5'},
  //           {name:'My soul', id:'6'},
  //       ],

  //       dataMessageText : [
  //           {text: 'For now your situation really complucated :)'},
  //           {text: 'And only you have power to change everything !'},
  //           {text: 'Use your power more then 100% !'},
  //         ],
  //       },

  //   profilePage : {
  //       postDataMessage : [
  //           {message: 'I think your falls one time will make you possible to fly so far, I belive in you my friend !', likeCount: '23'},
  //           {message: 'This project your first step for greatnes future ! One time you`ll become Hokage !', likeCount: '8' },
  //       ],

  //       newPostText : '...' 
  //   },

  //   sideBar : {
  //     sideBarLinks : [
  //       {link : '/profile' , title : 'Profile'},
  //       {link : '/messages' , title : 'Messages'},
  //       {link : '/news' , title : 'News'},
  //       {link : '/music' , title : 'Music'},
  //       {link : '/settings' , title : 'Settings'},
  //     ],
  //     dataFriends : [
  //       {name : 'Andry'},
  //       {name : 'Andry'},
  //       {name : 'Andry'},
  //     ],
  //   },
  // };


  // export const addPost = () => {
  //   let newElement = {
  //     message : state.profilePage.newPostText,
  //     likeCount : 0,
  //   };
  //   state.profilePage.postDataMessage.push(newElement);
  //   reRenderSide();
  // };

  // export const carrentValue = (carrentMessage) => {
  //   state.profilePage.newPostText = carrentMessage;
  //   reRenderSide();
  // };

  // export const reRender = (observe) => {
  //    reRenderSide = observe;
  // };

//=========== The old code from store ===========


// addPost() {
  //   let newElement = {
  //     message : this._state.profilePage.newPostText,
  //     likeCount : 0,
  //   };
  //   this._state.profilePage.postDataMessage.push(newElement);
  //   this._reRenderSide(this._state);
  // },

  // carrentValue(carrentMessage) {
  //   this._state.profilePage.newPostText = carrentMessage;
  //   this._reRenderSide(this._state);
  // },



// =========== Old dispatch ================

      // if ( action.type === ADD_POST ) {
    //   let newElement = {
    //     message : this._state.profilePage.newPostText,
    //     likeCount : 0,
    //   };
    //   this._state.profilePage.postDataMessage.push(newElement);
    //   this._reRenderSide(this._state);
    // } else if ( action.type === CARRENT_VALUE) {
    //   this._state.profilePage.newPostText = action.carrentMessage;
    //   this._reRenderSide(this._state);
    // } else if ( action.type === ADD_MESSAGE) {
    //   let newMessage = {
    //     text : this._state.messagePage.newDataMessageText,
    //   };
    //   this._state.messagePage.dataMessageText.push(newMessage);
    //   this._reRenderSide(this._state)
    // } else if ( action.type === CARRENT_MESSAGE ) {
    //     this._state.messagePage.newDataMessageText = action.carrentText;
    //     this._reRenderSide(this._state);
    // }
 