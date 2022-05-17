import { createSelector } from 'reselect';

const selectPopup = state => state.popup;

export const selectPopupText = createSelector(
    selectPopup,
    popup => popup.popupText
);
