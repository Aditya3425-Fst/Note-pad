import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Navbar.module.css'
import fc from '../assets/fc.png';
import twitter from '../assets/twitter.jpg'
import what from '../assets/what.png'
import email from '../assets/email.png'
export default function Navbar() {
  return (
    <>
      <div className={Styles.navbar}>
        <ul className={Styles.list}>
            <li className={Styles.li}><Link to='/' style={{color:"White"}}>Home</Link></li>
            <li className={Styles.li}><Link to='/tools' style={{ color: "White" }} >Tools</Link></li>
            <li className={Styles.li}><Link to='/notepad' style={{ color: "White" }}>Notepad</Link></li>
            <a id="sharefb" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.rapidtables.com%2Ftools%2Fnotepad.html%3Ftxt%3D&amp;title=My%20notes" title="Share text on Facebook" target="_blank"><img  src={fc}   alt="hello" style={{height: '5vh', marginLeft: '2vw'}}/></a>

            <a id="sharetw" href="https://twitter.com/intent/tweet?text=&amp;url=https%3A%2F%2Fwww.rapidtables.com%2Ftools%2Fnotepad.html%3Ftxt%3D" title="Share text on Twitter" target="_blank"><img alt="Twitter" src={twitter} style={{ height: '5vh', marginLeft: '2vw', borderRadius:'10px' }} /></a>  

            <a id="sharewa" href="https://api.whatsapp.com/send?text=Notepad%20%7C%20Write%20your%20notes%20online https%3A%2F%2Fwww.rapidtables.com%2Ftools%2Fnotepad.html" title="Share text on WhatsApp" target="_blank"><img alt="WhatsApp" src={what} style={{ height: '5vh', marginLeft: '2vw', borderRadius:'10px'}} /></a>   

            <a id="shareml" href="mailto:?to=&amp;subject=Notepad%20%7C%20Write%20your%20notes%20online&amp;body=https%3A%2F%2Fwww.rapidtables.com%2Ftools%2Fnotepad.html" title="Email text"><img alt="Mail" src={email} style={{ height: '5vh', marginLeft: '2vw' , borderRadius:'10px' }} /></a>
        </ul>
      </div>
    </>
  )
}
