import React,{useState} from 'react'
import SignInScreen from "./SignInScreen";
import "./LoginScreen.css";
function LoginScreen() {
    const [signIn, setSignIn]= useState(false);
    return (
        <div className="loginScreen">
        <div className="loginScreen__background">
        <h1 className="htag">Crypto</h1>
        <button onClick={() => setSignIn(true)} className="loginScreen__button">Sign In</button>
        <div className="loginScreen__gradient"/>
        </div>

        <div className="loginScreen__body">
        {signIn ? (
            <SignInScreen />)
            :(
                <>
        
        <div className="loginScreen__input">
        <form>
        <input type="email" placeholder="Email address" />
        <button onClick={() => setSignIn(true)}className="loginScreen__getStarted">Get Started 
        </button>
        </form>
        </div>
        </>
            
        )}
        
        </div>
        </div>
    )
}

export default LoginScreen
