import '../styles/contact.css';

import '../styles/navbar.css';


import Logo from '../assets/logomk.jpeg';
import Hi from '../assets/hi.png';
import Insta from '../assets/insta.jpeg';
import Linkedin from '../assets/linkedin.jpeg';
import Mail from '../assets/mail.jpeg';
import email from '../assets/email.png';

import{Link} from "react-router-dom";


function Contact(){
    
    
    return(
        <>
        <div class="nav">
        <img  src={Logo} alt="Logo" style={{marginLeft: 50,marginTop:10,float:'left' ,height: 50 }} />
        <section id="navbar">
          
            <br></br>
          
            <Link to="/"><button class="navbut">ABOUT</button></Link>
            <Link to="/portfolio"><button class="navbut">PORTFOLIO</button></Link>
            <Link to="/skills"><button class="navbut">SKILLS</button></Link>
            <Link to="/contact"><button class="navbut">CONTACT</button></Link>
        
        </section></div>
        
        
        <div className="con"><b>Get in touch.</b></div>
        <a href='https://www.instagram.com/mrish_nair/'><img  src={Insta} alt="insta logo" class="icon" style={{position:'absolute',marginLeft: -1420,marginTop:330 ,height: 60 }} /></a>
        <a href='https://www.linkedin.com/in/mrishika-nair-422913225/'><img  src={Linkedin} alt="linkedin logo" class="icon" style={{position:'absolute',marginLeft: -1330,marginTop:330,height: 60 }} /></a>
        <a href="#Aemail"><img  src={Mail} alt="gmail logo" class="icon" style={{position:'absolute',marginLeft: -1240,marginTop:330 ,height: 60 }} /></a>
        
        <img  src={Hi} alt="Hi" style={{marginLeft: 350,marginTop:10,float:'left' ,height: 630 }} />
        <img src={email} style={{marginTop:700,marginLeft:-1500,float:'left' ,height: 850 ,  position:'absolute'}}></img>
        <div class="A" id="Aemail">
       
        <form action="mailto:mrishnair@gmail.com">
            <input id="name" className="box" type="email" placeholder='email' style={{fontSize:20,marginLeft:50,paddingLeft:20, height:40,position:'absolute', marginLeft:70, width:380}}autoComplete="on" required />
                
            <input id="name" className="box" type="message" placeholder='subject' style={{fontSize:20, marginLeft:50,marginTop: 170,height:40,paddingLeft:20, position:'absolute', marginLeft:70, width:380}}autoComplete="on" required />
               
                
            <input id="message" className="box" type="message" placeholder='Message' rows = "2" cols = "12" wrap="hard" style={{fontSize:20, marginTop: 250,paddingLeft:20,  height:160, width:380,position:'absolute', marginLeft:70}}autoComplete="on" required />
            

           
            <input className="sub-btn" type="submit" name="submit" value="Send" style={{marginTop:460, marginLeft:200}} />
            
            </form>
            
            </div>
            

        <div class="footer" >
            <Link to="/"><button class="footbut">Home</button></Link>
            <Link to="/skills"><button class="footbut">Skills</button></Link>
            <Link to="/portfolio"><button class="footbut">Portfolio</button></Link>
            <button class="footbut">Contact</button>
        </div>
        
        </>
    )
}
export default Contact;