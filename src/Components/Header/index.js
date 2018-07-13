import React from 'react'
import './Header.css'


const Header = () => {

  return (
    <header className="Header">
      <MenuBar visible="true"/>
      <Logo/>
    </header>
  )
}

export default Header;

 const Logo = () => {
  return(
    <div className="logoContainer">
      <h1>Ernest Annor</h1>
    </div>
  )
}

 const MenuBar = () => {
   return(

     <div className="MenuIcon">
       <svg
          className="menu" x="0px" y="0px"
         width="35px" height="35px" viewBox="0 0 73.168 73.168">
         <g>
           <g id="Navigation">
             <g>
               <path d="M4.242,14.425h64.684c2.344,0,4.242-1.933,4.242-4.324c0-2.385-1.898-4.325-4.242-4.325H4.242
                 C1.898,5.776,0,7.716,0,10.101C0,12.493,1.898,14.425,4.242,14.425z M68.926,32.259H4.242C1.898,32.259,0,34.2,0,36.584
                 c0,2.393,1.898,4.325,4.242,4.325h64.684c2.344,0,4.242-1.933,4.242-4.325C73.168,34.2,71.27,32.259,68.926,32.259z
                 M68.926,58.742H4.242C1.898,58.742,0,60.683,0,63.067c0,2.393,1.898,4.325,4.242,4.325h64.684c2.344,0,4.242-1.935,4.242-4.325
                 C73.168,60.683,71.27,58.742,68.926,58.742z" fill="#ffffff"/>
             </g>
           </g>
         </g>
       </svg>
     </div>
   )
 }