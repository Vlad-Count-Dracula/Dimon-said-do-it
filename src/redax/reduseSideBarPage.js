
let initialState = {
  sideBarLinks: [
    { link: '/profile', title: 'Profile', id: '1', },
    { link: '/messages', title: 'Messages', id: '2', },
    { link: '/friends', title: 'Friends', id: '3', },
    { link: '/news', title: 'News', id: '4', },
    { link: '/music', title: 'Music', id: '5', },
    { link: '/settings', title: 'Settings', id: '6', },
  ],
  dataFriends: [
    { name: 'Andry', id: '1', },
    { name: 'Andry', id: '2', },
    { name: 'Andry', id: '3', },
  ],
};


const reduseSideBarPage = (state = initialState, action) => {
  return state;
};

export default reduseSideBarPage;