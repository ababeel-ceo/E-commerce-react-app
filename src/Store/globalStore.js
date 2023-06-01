import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Abdullah',
    mark: '1000=-'
  },
  reducers: {
    setValue: (state, action) => {
      state.name = action.payload;
    }
  }
});

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    activeTab: 'landingpage',
    activeSubTab:"order",
    tabs: [
      {
        id: '1',
        name: 'landingpage'
      },
      {
        id: '2',
        name: 'myorders'
      },
      {
        id: '3',
        name: 'profile'
      }
    ],
    subTabs:[
      {
        id : '1',
        name : 'order',
        displayName : 'Orders'
      },
      {
        id : '2',
        name : 'cancelledorder',
        displayName : 'Cancelled Orders'
      }
    ]
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setActiveSubTab : (state,action)=>{
      state.activeSubTab = action.payload;
    }
  },

});

const rootReducer = {
  user: userSlice.reducer,
  tabs: tabsSlice.reducer,  
};

const store = configureStore({
  reducer: rootReducer,
});

export const { setValue } = userSlice.actions;
export const { setActiveTab } = tabsSlice.actions;

// only export this (below) when the multiple Slices are create
 
export default store;
