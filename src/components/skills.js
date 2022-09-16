import '../styles/skills.css';
import Pinksemi from '../assets/port-pinksemi.png';
import Pgraph from '../assets/graphp.png';
import Blacksemi from '../assets/port-blacksemi.png';
import Bgraph from '../assets/graphb.png';
import '../styles/navbar.css';

import Logo from '../assets/logomk.jpeg';

import{Link} from "react-router-dom";


function Skills(){
    
    
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
        <div className="sk"><b>Skills.</b></div>

        <div className="textpgra">DESIGNER</div>
        <div className="textbgra">&lt;CODER&gt;</div>
        <a href="#designer"><img  src={Pinksemi} alt="graph" class="centerp" style={{ marginTop:140, marginLeft:460,align:'center', height: 500, width:250}} /></a>
        <p class="textvertp">DESIGNER</p>
        <p class="basicp" style={{ marginTop:363, marginLeft:380}}>90%</p>
        <p class="basicp" style={{ marginTop:363, marginLeft:900}}>UI/UX Design</p>
        <p class="basicp" style={{ marginTop:453, marginLeft:380}}>90%</p>
        <p class="basicp" style={{ marginTop:453, marginLeft:900}}>UX Research</p>
        <p class="basicp" style={{ marginTop:543, marginLeft:380}}>60%</p>
        <p class="basicp" style={{ marginTop:543, marginLeft:900}}>Interaction Design</p>
        <p class="basicp" style={{ marginTop:633, marginLeft:380}}>90%</p>
        <p class="basicp" style={{ marginTop:633, marginLeft:900}}>Graphic Design</p>
        <p class="basicp" style={{ marginTop:723, marginLeft:380}}>70%</p>
        <p class="basicp" style={{ marginTop:723, marginLeft:900}}>Adobe Stack</p>
        
        <a href="#coder"><img  src={Blacksemi} alt="graph" class="centerb" style={{ marginTop:-520,marginRight:460,align:'center', height: 500, width:250}} /></a>
        <p class="textvertb">&lt;CODER&gt;</p>
        <p class="basicb" style={{ marginTop:1190, marginLeft:1010}}>60%</p>
        <p class="basicb" style={{ marginTop:1190, marginLeft:250}}>Full-stack development</p>
        <p class="basicb" style={{ marginTop:1280, marginLeft:1010}}>80%</p>
        <p class="basicb" style={{ marginTop:1280, marginLeft:397}}>HTML, CSS</p>
        <p class="basicb" style={{ marginTop:1370, marginLeft:1010}}>70%</p>
        <p class="basicb" style={{ marginTop:1370, marginLeft:300}}>Javascript, ReactJS</p>
        <p class="basicb" style={{ marginTop:1460, marginLeft:1010}}>80%</p>
        <p class="basicb" style={{ marginTop:1460, marginLeft:450}}>MySQL</p>
        <p class="basicb" style={{ marginTop:1550, marginLeft:1010}}>80%</p>
        <p class="basicb" style={{ marginTop:1550, marginLeft:380}}>Java, Python</p>
        
        <div id="designer"><img  src={Pgraph} alt="graph"  style={{ marginTop:300,marginLeft:200,align:'center', height: 520}} />
        </div>
        
        <div id="coder"><img  src={Bgraph} alt="graph" style={{ marginTop:300,marginLeft:570,align:'center', height: 520}} />
        </div>
        <div class="footer">
            <Link to="/"><button class="footbut">Home</button></Link>
            <Link to="/skills"><button class="footbut">Skills</button></Link>
            <Link to="/portfolio"><button class="footbut">Portfolio</button></Link>
            <button class="footbut">Contact</button>
        </div>
        </>
    )
}
export default Skills;