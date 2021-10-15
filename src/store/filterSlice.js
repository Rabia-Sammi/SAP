
import { createSlice} from '@reduxjs/toolkit'


const initialState = {
    filter: [],
    haveFilter:false,
    removedFilter:""

}
const filterSlice = createSlice({
    name: 'addFilter',
    initialState: initialState,
    reducers: {
        addFilter(state, name) {
            state.filter.push(name.payload);
            state.haveFilter=true;
        },
        removeFilter(state,name) {
            state.removedFilter=name.payload;
            state.filter.splice(state.filter.indexOf(name.payload), 1);
            if(state.filter.length===0){state.haveFilter=false;}
        },
        clearAll(state){
            state.filter=[];
            state.haveFilter=false;
        }
    }
});


export const filterActions= filterSlice.actions;
export default filterSlice;
