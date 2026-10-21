
import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({});


export const UserProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({})

    // function para logar e  armazenar o token do usuario 
    const putUserData = (userInfo) => {
        setUserInfo(userInfo);

        localStorage.setItem('devburger:userData', JSON.stringify(userInfo))
    };


    //function para fzer logout e  limpar o token do usuario 
    const logout = () => {
        setUserInfo( { } );
        localStorage.removeItem('devburger:userData')
    }

    useEffect( () =>{
        const userInfoLocalStorage = localStorage.getItem('devburger:userData')
        
        if(userInfoLocalStorage){
            setUserInfo(JSON.parse(userInfoLocalStorage))
        }
    },[] )


    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!UserContext) {
        throw new Error('useUser must be a valid context')
    }

    return context;
}