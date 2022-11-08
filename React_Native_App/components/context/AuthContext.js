import React,{useState,createContext} from 'react';
import axios from 'axios';
//import {BASE_URL} from '../config';
import { LogBox } from 'react-native';
import { AsyncStorage } from 'react-native'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => 
{
      const [userInfo,setUserInfo] = useState({}); 
      const [isLoading,setIsLoading]  =useState(false);
      const register = (username,email,password) => {
      setIsLoading(true);
      axios.post(`${BASE_URL}/register`, {  username,email,password
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
            setIsLoading(false);
            console.log(userInfo);
        }).catch(e =>{
               console.log(`register error ${e}`);
               setIsLoading(false);
        });
        };

       return ( <AuthContext.Provider value="Test value">{children}</AuthContext.Provider> );
   
};