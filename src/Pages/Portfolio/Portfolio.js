import React from 'react';
import Reveal from 'react-reveal/Reveal'
import GridComponent from '../../components/Portfolio/grid'; 
import './portfolio.css';
import buddy from '../../components/Images/Projects/Buddy.png';
import legitapp from '../../components/Images/Projects/legitapp.png'
import SocialApp from '../../components/Images/Projects/SocialApp.png'
import brows from '../../components/Images/Projects/browsjungle.png'
import SCP from '../../components/Images/Projects/SCP.png'
import budget from '../../components/Images/Projects/budget-app.png'


const Portfolio = () => ( 

    <div className="container">
            <div className="row">
      
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeInLeft" duration={2000}>
                <a href="https://github.com/Juzva8/enoughrandom" target="_blank" className="btn text-black mt-n4 repo" rel="noopener noreferrer" ><span className="fab fa-github"></span> Github Repository</a>
                    <GridComponent>
                    <a href="https://main.d31lf0dcwu8jdq.amplifyapp.com" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={brows} width="350" height="350" alt="Buddy" />
                    </a>
                    </GridComponent>
                    </Reveal>
                </div>
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeIn" duration={3000}>
                <a href="https://github.com/Juzva8/legitapp" target="_blank" className="btn text-black mt-n4 repo"rel="noopener noreferrer" ><span className="fab fa-github"></span> Github Repository</a>
                    <GridComponent>
                    <a href="https://legitenough-e1470.web.app" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={legitapp} width="350" height="350" alt="Brows Jungle" rel="noopener noreferrer" />
                    </a>
                    </GridComponent>
                    </Reveal>
                </div>
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeInRight" duration={2500}>
                <a href="https://github.com/Juzva8/budget-app" target="_blank" className="btn text-black mt-n4 repo" rel="noopener noreferrer"><span className="fab fa-github"></span> Github Repository</a>
                    <GridComponent>
                    <a href="https://dry-lowlands-94703.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={budget} width="350" height="350" alt="Quiz app" />
                    </a>
                    </GridComponent>
                    </Reveal>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeIn" duration={5500}>
                <a href="https://github.com/Juzva8/socialapp" target="_blank" className="btn text-black mt-n4 repo" rel="noopener noreferrer"><span className="fab fa-github"></span> Github Repository</a>
                    <GridComponent>
                    <a href="https://socialapp-a6247.web.app/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={SocialApp}  width="350" height="350" alt="Code Mania" />
                    </a>
                    </GridComponent>
                 </Reveal>
                </div>
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeInUp" duration={2750}>
                <a href="https://github.com/ShanniSnax/self-care-pirates" target="_blank" className="btn text-black mt-n4 repo" rel="noopener noreferrer"><span className="fab fa-github"></span> Github Repository</a>
                        <GridComponent>
                    <a href="https://aqueous-refuge-56122.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={SCP}  width="350" height="350" alt="Self-care Pirates" />
                    </a>
                    </GridComponent>
                   </Reveal>
                </div>
                <div className="col-sm-12 col-lg-4">
                <Reveal effect="fadeInLeft" duration={3000} >
                <a href="https://github.com/Juzva8/BUDDY" target="_blank" className="btn text-black mt-n4 repo" rel="noopener noreferrer"><span className="fab fa-github"></span> Github Repository</a>
                        <GridComponent>
                    <a href="https://juzva8.github.io/BUDDY/" target="_blank" rel="noopener noreferrer">
                    <img className="rounded float-left img-fluid" src={buddy} width="350" height="350" alt="Next Project" />               
                    </a>
                    </GridComponent>
                     </Reveal>
                </div>
            </div>
        </div>
    
      );

    
    export default Portfolio;
    