import { createContext, SetStateAction, useContext, useState } from "react"

const GlobalContext = createContext({});

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }

    return context;
};

export interface UserType {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

export interface AppType {
    user: UserType | null;
    isLoggedIn: boolean,
    isLoading: boolean
}

const initialState: UserType = {
    id: '',
    name: '',
    email: '',
    avatar: '',
}

 const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
     const [app, setApp] = useState<AppType>({
         user: initialState,
         isLoggedIn: false,
         isLoading: false,
     });
     

     const values = { 
         user: app.user,
         setIsLoggedIn: (value: UserType) => {
             setApp(prevState => {
                 return {
                     ...prevState,
                     user: value,
                     isLoggedIn: true
                }
            })
         },
         setIsLoading: (value: boolean) => setApp(prevState => ({...prevState, isLoading: value})),
     }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider;