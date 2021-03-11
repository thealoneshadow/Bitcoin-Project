import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./App.css";
import Nav from "./Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./search/Main";
import Graph from "./graph/Graph";
import { auth } from './firebase';
import {useDispatch, useSelector} from "react-redux";
import { login,logout, selectUser } from './features/userSlice';
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect (()=> {
    const unsubscribe= auth.onAuthStateChanged(userAuth => {
      if(userAuth)
      {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else{
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[dispatch]);
  
   return (
    <div className="app">
    <Router>
    {!user ? (
       <LoginScreen />
    ) : (
     <Switch>
     <Route exact path="/profile">
     <ProfileScreen />
     </Route>
     <Route path="/">
     <Nav />
    <Main />
    <NewsContextProvider>
     <News />
     </NewsContextProvider>
     
     </Route>

     </Switch>
    )

    }
   
    </Router>

    
    </div>

     
  );
}

export default App;