import ProjectStore from "./store";
import { useReducer } from "react";
import {reducer,initialState} from "./reducer"


const StoreProvider = ({children}) => {
  return <ProjectStore.Provider value={useReducer(reducer,initialState)} >
    {children}
  </ProjectStore.Provider>
}

export default StoreProvider