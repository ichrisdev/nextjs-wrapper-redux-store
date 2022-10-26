import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const RepositorySlice = createSlice({
    name: "repository",
    initialState: {
        repositories: [],
    },
    reducers: {
        setRepositoriesData: (state, action) => {
            state.repositories = action.payload;
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', action.payload)

            if (!action.payload.repository.repositories) {
                return state;
            }

            state.repositories = action.payload.repository.repositories;

        },
    }

})

export const { setRepositoriesData } = RepositorySlice.actions;


export default RepositorySlice.reducer;
