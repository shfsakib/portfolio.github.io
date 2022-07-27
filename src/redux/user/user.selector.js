import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser,
) 
export const selectLinkData = createSelector(
    [selectUser],
    user => user.linkData,
) 