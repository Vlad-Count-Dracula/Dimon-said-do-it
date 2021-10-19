const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  // postDataFriends: [
  //   {
  //     name: 'Andry',
  //     country: 'Ukraine',
  //     city: 'Ochakiv',
  //     id: '1',
  //     avatarSrc: '../',
  //     status: 'I`m just SlenderMan',
  //     followed: true,
  //   },
  //   {
  //     name: 'Andry',
  //     country: 'Ukraine',
  //     city: 'Ochakiv',
  //     id: '2',
  //     avatarSrc: '',
  //     status: 'I`m just SlenderMan',
  //     followed: false,
  //   },
  // ],
  users: [],
  // {
  //   name: 'Andry',
  //   country: 'Ukraine',
  //   city: 'Ochakiv',
  //   id: '1',
  //   avatarSrc: '../',
  //   status: 'I`m just SlenderMan',
  //   followed: true,
  // },
  // {
  //   name: 'Andry',
  //   country: 'Ukraine',
  //   city: 'Ochakiv',
  //   id: '2',
  //   avatarSrc: '',
  //   status: 'I`m just SlenderMan',
  //   followed: false,
  // },

};


const reduseFriendsPage = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users[0].map(u => {
          if (u.id === action.id) {
            return { ...u, followed: true }
          } else {
            return u;
          }
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: false }
          };
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state, users: [...state.users, action.users]
      }
    default:
      return state;
  };
};

export const actionCreatorFollow = (id) => {
  return {
    type: FOLLOW,
    id: id,
  }
};

export const actionCreatorUnfollow = (id) => {
  return {
    type: UNFOLLOW,
    id: id,
  }
};

export const setUsers = (users) => ({ type: SET_USERS, users });

export default reduseFriendsPage;