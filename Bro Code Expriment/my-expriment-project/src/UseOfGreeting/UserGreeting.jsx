

function UserGreeting(props){
   /*  if(props.isLoggedIn){
        return (<p>Welcome to the club {props.userName}</p>)
        
    }
    else{
        return (<p>Please Login !</p>)
    } */

        /* Ternary operation */
    
        const welcomeMessage = <h2 className="welcome-message">Welcome to the club {props.userName} </h2>
        const loginPrompt = <h2 className="login-prompt"> Please Log In !!</h2>

        return(props.isLoggedIn ?  welcomeMessage : loginPrompt);
    /* return (
        <div className="logpage">
            <div className="logTitle">
                <p>Welcome To login</p>
                <div className="userName">
                    <label htmlFor="#">use: </label>
                    <input type="text"  placeholder="Username"/>
                </div>
                <div className="userpass">
                    <label htmlFor="#">Password: </label>
                    <input type="password" name="userpass" id="userpass" placeholder="Password"/>
                </div>
                
            </div>
        </div>
    ); */
}

export default UserGreeting