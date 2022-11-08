import { SET_USER_NAME,SET_USER_PASSWORD,GET_DISHES,GET_CITIES} from "./actions";

const initialState = {
    email: 'admin',
    password: '123456',
    dishes:[],
    cities:[],
}

function userReducer(state = initialState,action){
      switch(action.type){
            case SET_USER_NAME:
                  return {...state,email: action.payload};
            case SET_USER_PASSWORD:
                  return {...state,age:action.payload};
            case GET_DISHES:
                  return {...state,dishes: action.payload};    
            case GET_CITIES:
                  return { ...state,cities: action.payload };                
            default:
                  return state;
      }
}

export default userReducer;