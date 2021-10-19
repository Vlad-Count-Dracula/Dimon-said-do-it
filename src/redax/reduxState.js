import { combineReducers, createStore } from "redux";
import reduseFriendsPage from "./reduseFriendsPage";
import reduseMessagePage from "./reduseMessagePage";
import reduseProfilePage from "./reduseProfilePage";
import reduseSideBarPage from "./reduseSideBarPage";


let redusers = combineReducers({
    sideBarPage : reduseSideBarPage,
    profilePage : reduseProfilePage,
    messagePage : reduseMessagePage,
    friendsPage : reduseFriendsPage,
});

let store = createStore(redusers); 



export default store ;