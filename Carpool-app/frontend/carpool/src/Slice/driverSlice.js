import { createSlice } from '@reduxjs/toolkit'


export const driverSlice = createSlice({
        name: 'driver',
        initialState: {
            driver: null,
        },
   reducers: {
        storeDriver: (state , action) => {
            const driverData = action.payload;
            return {
                ...state,
                driver: driverData,
              };
        },
        removeDriver: (state , action) => {
            state.driver = null;
        }
    },
    },
);

export const {storeDriver ,  removeDriver} = driverSlice.actions;

export default driverSlice.reducer;