

  let state = {
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
            {text: 'For now your situation really complucated :)'},
            {text: 'And only you have power to change everything !'},
            {text: 'Use your power more then 100% !'},
          ],
        },

    profilePage : {
        postDataMessage : [
            {message: 'I think your falls one time will make you possible to fly so far, I belive in you my friend !', likeCount: '23'},
            {message: 'This project your first step for greatnes future ! One time you`ll become Hokage !', likeCount: '8' },
        ],
    },

    sideBar : {
      sideBarLinks : [
        {link : '/profile' , title : 'Profile'},
        {link : '/messages' , title : 'Messages'},
        {link : '/news' , title : 'News'},
        {link : '/music' , title : 'Music'},
        {link : '/settings' , title : 'Settings'},
      ],
    },
  };

  export default state ;