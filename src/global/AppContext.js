import { createContext, useState } from "react";

const AppContext = createContext()

const AppProvider =({children}) => {
    const [listCart, setListCart] = useState([]);
    const [curUser, setCurUser] = useState([])
    return (
        <AppContext.Provider 
            value={{
                listCart, setListCart,
                curUser, setCurUser
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {
    AppProvider, AppContext
};