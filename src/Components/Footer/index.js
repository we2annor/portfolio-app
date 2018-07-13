import React from 'react'
import Email from '../../Images/Icons/email.svg'
import Facebook from '../../Images/Icons/facebook.svg'
import LinkedIn from '../../Images/Icons/linkedin.svg'
import Twitter from '../../Images/Icons/twitter-logo.svg'
import './footer.css'

  const Footer = () => {
    return (
      <div className="Footer">
        <Icon iconName="email" imageRef="" imageSrc={Email} />
        <Icon iconName="facebook" imageRef="" imageSrc={Facebook} />
        <Icon iconName="Twitter" imageRef="" imageSrc={Twitter} />
        <Icon iconName="LinkedIn" imageRef="" imageSrc={LinkedIn} />
      </div>
    )
  }

  export default Footer

  export const Icon = (props) => {
    return (
      <div className="Icon">
        <li>
          <a href={props.imageRef}>
            <img src={props.imageSrc} alt={props.iconName}/>
          </a>
        </li>
      </div>
    )
  }
