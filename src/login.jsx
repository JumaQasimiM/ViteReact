import React from "react";

import './login.css';

// Login is a React compnent
// class Login extends React.Component{
//     render(){
//         return(
//             <h1>Login Page</h1>
//         );
//     }
// }
// export default Login;

import nader from "./assets/nader.jpg" 
function Profile(){
    return (
        <div>
            <img src={nader} alt="nader" width={120}/>
        </div>
    );
}


export default function Galary(){
    return(
        <section>
            <h1>Gallary Section</h1>
            
           <div className="profile">
           <Profile />
            <Profile />
            <Profile />
           </div>
        </section>
    );
}

