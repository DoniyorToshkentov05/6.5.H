import { createContext, useContext } from "react";

const Appcontext = createContext();


const AppProvider = () => {
    return (
        <Appcontext.Provider>
                
        </Appcontext.Provider>
        
    )
}

export const useClobalContext = () => {
    return useContext(Appcontext)
};
export {Appcontext, AppProvider};