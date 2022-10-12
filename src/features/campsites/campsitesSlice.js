import { createSlice } from '@reduxjs/toolkit';
import {CAMPSITES} from '../../app/shared/CAMPSITES';

//The initial state is the array of campsites from the local campsites file.
const initialState = {
    campsitesArray: CAMPSITES
};

// the value is a function with 2 properties 'name' with the key of 'campsites' and initialState.
//This will return an object as a value.
const campsiteSlice = createSlice({
    name: 'campsites',
    initialState
});

//export it as a function 
export const campsitesReducer = campsiteSlice.reducer;

//the global application STATE will now be passed as a parameter in this function.
//accessing the array through the propperty and getting data like before
export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

//this will get the state and ID parameter for its parent scope
export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};