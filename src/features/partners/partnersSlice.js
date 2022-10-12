import { createSlice } from '@reduxjs/toolkit';
import { PARTNERS } from '../../app/shared/PARTNERS';

//First create the initial state
const initialState = {
    partnersArray: PARTNERS
};

//create the SLICE
const partnersSlice = createSlice({
    name: 'partners',
    initialState
});

//export the function reducer
export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
    return state.partners.partnersArray;
};

export const selectFeaturedPartners = (state) => {
    return state.partners.partnersArray.find(
        (partner) => partner.featured)
};