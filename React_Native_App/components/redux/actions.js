export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const GET_DISHES = 'GET_DISHES';
export const GET_CITIES = 'GET_CITIES';

const API_URL_DISHES = 'https://mocki.io/v1/605653ce-087a-4aa5-8162-56ccae2bd38a';
const API_URL_CITIES = 'https://mocki.io/v1/5edc965b-51c3-484b-ae82-3dae367c9689';

export const getDishes = () => {
    try {
         return async dispatch => {
                  const result = await fetch(API_URL_DISHES,{
                      method:'GET',
                      headers:{
                          'Content-Type':'application/json',
                      }
                  });
                  const json = await result.json();
                  if(json){

                    dispatch({
                        type:GET_DISHES,
                        payload:json,
                    });

                  }else{
                      console.log('Unable to fetch!');
                  }

         }
    } catch (error) {
          console.log(error);
    }
}

export const getCities = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL_CITIES, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {

                dispatch({
                    type: GET_CITIES,
                    payload: json,
                });

            } else {
                console.log('Unable to fetch!');
            }

        }
    } catch (error) {
        console.log(error);
    }
}

export const setEmail = email => dispatch => {
    dispatch({type:SET_USER_NAME,
              payload:email,
    });
};

export const setPassword = password => dispatch => {
    dispatch({
        type: SET_USER_PASSWORD,
        payload: password,
    });
};
