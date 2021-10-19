import { connect } from "react-redux";
import { actionCreatorFollow, actionCreatorUnfollow, setUsers } from "../../../redax/reduseFriendsPage";
import FriendsContent from "./Friends";


let stateToProps = (state) => {
    return {
        friendsPage : state.friendsPage.users,
    }
};

let actionToProps = (dispatch) => {
    return {
        follow : (id) => {
            dispatch(actionCreatorFollow(id));
        },

        unfollow : (id) => {
            dispatch(actionCreatorUnfollow(id));
        },

        setUsers: (users) => {
            dispatch(setUsers(users));
        }
    }
};


const FriendsContainer = connect(stateToProps, actionToProps)(FriendsContent);

export default FriendsContainer;