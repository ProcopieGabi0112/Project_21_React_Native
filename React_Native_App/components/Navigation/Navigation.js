import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/Home'
import DetailsScreen from '../../screens/Details'
import ListingScreen from '../../screens/Listing'
import LoginScreen from '../../screens/Login'

import SignInScreen from '../../screens/SignInScreen/SignInScreen'
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen'
import ConfirmEmailScreen from '../../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../../screens/NewPasswordScreen';
import MainScreen from '../../screens/MainScreen';
import FirebaseLoginScreen from '../../screens/FirebaseLoginScreen';
import FirebaseHomeScreen from '../../screens/FirebaseHomeScreen';
import MapScreen from '../../screens/Map';
import { Provider} from 'react-redux';
import { Store } from '../redux/store';
import CameraScreen from '../../screens/CameraView';
import MenuScreen from '../../screens/Menu';
import CommentScreen from '../../screens/Comment';
import OrderScreen from '../../screens/Order';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Provider store = {Store}>
    <NavigationContainer>
      <Stack.Navigator 
            screenOptions={{ 
                  headerTitleAlign: 'center',
                  headerStyle:{ 
                    backgroundColor:'#0080ff'
                  },
                  headerTintColor:'#ffffff',
                  headerTitleSize:{ 
                      fontSize:25,
                      fontWeight:'bold'
                  } 
                  }} 
                >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home'}} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Map' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Dashboard' }}/>
        <Stack.Screen name="Listing" component={ListingScreen} options={{ title: 'List of next implementations' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{ title: 'Confirm email' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Forgot your password?' }} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{ title: 'New password?' }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="FirebaseLogin" component={FirebaseLoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="FirebaseHome"  component={FirebaseHomeScreen}  options={{ title: 'Dutch Delight' }} />
        <Stack.Screen name="CameraView" component={CameraScreen} options={{ title: 'Check the camera' }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Check the menu' }} />
        <Stack.Screen name="Comment" component={CommentScreen} options={{ title: 'Comments' }} />
        <Stack.Screen name="Order" component={OrderScreen} options={{ title: 'Order now...' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default MyStack