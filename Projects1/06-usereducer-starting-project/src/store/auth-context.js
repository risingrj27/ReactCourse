import React,{useState} from 'react'

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout: () => {},
    onLogin: (email, password) => {}
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState()

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);
    

    const loginHandler= () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logouthandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    };
    return (
        <div>
            {props.children}
        </div>
    )
}


export default AuthContext;