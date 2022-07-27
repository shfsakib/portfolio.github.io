import { UserActionTypes } from "./user.type";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
})
export const setLinkData = user => ({
    type: UserActionTypes.GET_LINK_DATA,
    payload: user,
})
