import React from 'react';

function Header(props){
  console.log(props);
    return(
        <div>
    <h1>Hello {props.name}-{props.last}</h1>
    {props.children}
    </div>
    )
}
export default Header;