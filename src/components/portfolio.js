import '../styles/portfolio.css';

import sow from '../assets/soweasy.jpeg';
import sow_logo from '../assets/Soweasylogo.png';
import port_back from '../assets/portback.jpeg';

import toggle from '../assets/toggle.png';
import toggle_logo from '../assets/Togglelogo.png';


import logos from '../assets/logos.jpeg';
import illu from '../assets/illustrations.jpeg';
import journal from '../assets/Journal.jpeg';

import Logo from '../assets/logomk.jpeg';


import '../styles/navbar.css';

import{Link} from "react-router-dom";

function Portfolio(){
    
    
    return(
        <>
        <div class="nav">
        <img  src={Logo} alt="Logo" style={{marginLeft: 50,marginTop:10,float:'left' ,height: 50 }} />
        <section id="navbar">
          
      
            {/*<Link to="/alogin"><Button>About</Button></Link>*/}
            <br></br>
          
            <Link to="/"><button class="navbut">ABOUT</button></Link>
            <Link to="/portfolio"><button class="navbut">PORTFOLIO</button></Link>
            <Link to="/skills"><button class="navbut">SKILLS</button></Link>
            <Link to="/contact"><button class="navbut">CONTACT</button></Link>

        
        </section></div>
        <div className="illust">
        <div className="pf"><b>Portfolio.</b></div>
            <img src={port_back} style={{position:'absolute', marginLeft:610,marginTop:-230,height:600}}></img>
        </div>
        <section className="works">

        
        <a href="https://xd.adobe.com/view/e3e291b4-c8da-4d87-a53f-b83ffeda03e0-b6b1/" ><div className="card">
        <img  src={sow} alt="sow" className="imagee" style={{marginLeft: 90,marginTop:80, position: 'absolute',float:'left' ,height: 390 }} />
        <p class="big" style={{position:'absolute', marginLeft: 610,marginTop:280, }}>DESIGN</p>
        <div className="details">
            <img src={sow_logo} alt="logo" style={{marginLeft: 20,marginTop:50, position: 'absolute' ,height: 60}}/>
            <div className="centerp">
            UI design for a gardening companion app that would guide the user throughout 
            the gardening process and help them maintain the garden without any worries or hassles.
        </div></div>
        </div></a>

        <a href="https://xd.adobe.com/view/7ea69af6-c4be-4f68-bc3f-1ed449a041ba-2bf5/"><div className="card2">
        
        <img  src={toggle} alt="toggle24" className="image" style={{marginLeft: 660,marginTop:80, position: 'absolute',float:'left' ,height: 390 }} />
        <p class="big" style={{position:'absolute', marginLeft: 400,marginTop:120, }}>UI</p>
    
        <div className="details2">    
        <img src={toggle_logo} alt="logo" style={{marginLeft: 20,marginTop:50, position: 'absolute' ,height: 90}}/>
        <div className="centerp2">
            UI design for a gardening companion app that would guide the user throughout 
            the gardening process and help them maintain the garden without any worries or hassles.
        </div></div>
        </div></a>

        <a href="https://www.canva.com/design/DAFIEhl9X3I/VRW8cAWnfLhCspiLfGkfFw/view?utm_content=DAFIEhl9X3I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img  src={logos} alt="logos" className="image" style={{marginLeft: 90,marginTop:680, position: 'absolute',float:'left' ,height: 380, width:350  }} /></a>
        <a href="https://www.canva.com/design/DAFIEls1OkI/6tr4WZ-cqfJjpliyhocICw/view?utm_content=DAFIEls1OkI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img  src={illu} alt="illustrations" className="image" style={{marginLeft: 440,marginTop:680, position: 'absolute',float:'left' ,height: 380 , width:350}} /></a>
        <p class="big2" style={{position:'absolute', marginLeft: 180,marginTop:550}}>VISUAL</p>
        <p class="big2" style={{position:'absolute', marginLeft: 780,marginTop:800}}>DESIGN</p>
        
        
        <a href="https://www.canva.com/design/DAEtb9JhePI/rPsJJFTrhY3Kq6Mct0F_Zw/view?utm_content=DAEtb9JhePI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><div className="card3">
        <img  src={journal} alt="Journal" className="image" style={{marginLeft: 750,marginTop:930, position: 'absolute',float:'left' ,height: 390, width:550 }} />
        <p class="big3" style={{position:'absolute', marginLeft: 60,marginTop:1000}}>PROCESS BOOK</p>
        <div className="details3"> 
        <div className="centerp3">
            A chronicle of my work flow, learnings and projects during the course of one semester.
        </div>
        </div></div></a>
        
        </section>
        <div class="footer" style={{marginTop:1600, position:'relative'}}>
            <Link to="/"><button className="footbut">Home</button></Link>
            <Link to="/skills"><button className="footbut">Skills</button></Link>
            <Link to="/portfolio"><button className="footbut">Portfolio</button></Link>
            <Link to="/contact"><button class="footbut">Contact</button></Link>
        </div>
        
        </>
    )
}
export default Portfolio;