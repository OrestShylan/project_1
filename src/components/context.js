import { createContext } from "react";

export const CustomContext = createContext()


const Context = (props) => {
    return <CustomContext.Provider value={1} >
        {props.children}
        
     </CustomContext.Provider>
}


export default Context