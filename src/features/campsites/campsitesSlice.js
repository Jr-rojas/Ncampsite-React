import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import {CAMPSITES} from '../../app/shared/CAMPSITES';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        if (!response.ok) {
            return Promise.reject('Unable to fetch , status: ' + response.status)
        }
        const data = await response.json();
        return data;
    }
)
//The initial state is the array of campsites from the local campsites file.
/* const initialState = {
    campsitesArray: CAMPSITES
}; */
const initialState = {
    campsitesArray: [],
    isLoading: true,
    errMsg: ''
};

// the value is a function with 2 properties 'name' with the key of 'campsites' and initialState.
//This will return an object as a value.
const campsiteSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.campsitesArray = mapImageURL(action.payload)
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg=action.error ? action.error.message : 'Fetch failed';
        }
    }
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
    return {
        featuredItem: state.campsites.campsitesArray.find(
            (campsite) => campsite.featured
        ),
        isLoading: state.campsites.isLoading,
        errMsg: state.campsites.errMsg
    };
};