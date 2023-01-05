import '../styles/about.css';
import Hex from '../assets/hexagons.png';


import '../styles/navbar.css';

import Logo from '../assets/logomk.jpeg';

function About() {
    return (
      <>
      <div class="nav">
      <img  src={Logo} alt="Logo" style={{marginLeft: 50,marginTop:10,float:'left' ,height: 50 }} />
        <section id="navbar">
          
      
            {/*<Link to="/alogin"><Button>About</Button></Link>*/}
            <br></br>
          
            <button class="navbut">ABOUT</button>
            <button class="navbut">PORTFOLIO</button>
            <button class="navbut">SKILLS</button>
            <button class="navbut">CONTACT</button>

        
        </section></div>
        
      <div class="cont">
     
        <div className="ab"><b>About.</b></div>
        <p className="text">I am Mrishika, a sophomore at Indraprastha Institute of Information Technology pursuing Computer Science
                            and Design. I have always tried to dabble my skills
                            starting from sports to music, so I am a Jack of all
                            trades and wish to be a master of one.</p>
                           
    </div>
    
        <div className="mb"><b>My beliefs.</b></div>
        <img  src={Hex} alt="hexagons" class="center" style={{ marginTop:200,align:'center',width: 900, height: 400}} />
        <p className="one">1</p>
        <div class="hide">A good composition 
serves both an artistic 
and utilitarian purpose.</div>
        <p className="two">2</p>
        <div class="hide">while(!(succeed ==try));</div>
        <p className="three">3</p>
        <div class="hide">Strong preference for 
easy to use, intuitive UX/UI.</div>
        <p className="four">4</p>
        <div class="hide">Design isn’t a solitary 
pursuit, appretiate 
different viewpoints</div>
        <p className="five">5</p>
        <div class="hide">Develop experiences to
make people’s life simple</div>
        
    
      </>
    )
}
export default About;
