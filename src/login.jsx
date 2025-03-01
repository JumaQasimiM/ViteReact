import React from "react";

import './login.css';
// class component 
// class Test extends React.Component{
// //  have to a rendner method 
// render(){
//     return <h1>Hello form class component</h1>
// }
// // }



// function component
function Test() {
    return (
        <>
        <h1 className="btn btn-sm">Hello from functional component</h1>
        <ul>
            <li className="btn btn-primary">one</li>
        </ul>
        </>
    );
}

export default Test;