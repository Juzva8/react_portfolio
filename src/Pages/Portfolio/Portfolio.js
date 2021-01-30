import React from 'react';
import './portfolio.css';
import buddy from '../../components/Images/Projects/Buddy.png';
import BrowsJungle from '../../components/Images/Projects/BrowsJungle.png'
import Code_Mania from '../../components/Images/Projects/Code Mania.png'
import Quiz_img from '../../components/Images/Projects/Quiz_img.png'
import SCP from '../../components/Images/Projects/SCP.png'
import future from '../../components/Images/Projects/future.jpg'


const Portfolio = () => ( 

    <div className="container">
            <div className="row">
      
                <div className="col-sm-12 col-lg-4">
                    <h4>
                        <a href="https://github.com/Juzva8/BUDDY" className="btn btn-primary" data-toggle="tooltip" title="This will take you to my github!" target="_blank" rel="noopener noreferrer"> 
                            Buddy app
                        </a>
                    </h4>
                    <a href="https://juzva8.github.io/BUDDY/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={buddy} width="350" height="350" alt="Buddy" />
                    </a>
                </div>
               
                <div className="col-sm-12 col-lg-4">
                    <h4>
                        <a href="https://github.com/Juzva8" className="btn btn-primary" data-toggle="tooltip" title="This will take you to my github!" target="_blank" rel="noopener noreferrer"> 
                            Brows Jungle 
                        </a>
                    </h4>
                    <a href="https://browsjungle.com" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={BrowsJungle} width="350" height="350" alt="Brows Jungle" rel="noopener noreferrer" />
                    </a>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <h4>
                        <a href="https://github.com/Juzva8/Quiz-App" className="btn btn-primary" data-toggle="tooltip" title="This will take you to my github!" target="_blank" rel="noopener noreferrer"> 
                     Quiz app
                    </a>
                    </h4>
                    <a href=" https://juzva8.github.io/Quiz-App/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={Quiz_img} width="350" height="350" alt="Quiz app" />
                    </a>
                </div>
            </div>
            <div className="row">
      
                <div className="col-sm-12 col-lg-4">
                    <h4>
                        <a href="https://github.com/wlawsonkelly/project-2" className="btn btn-primary" data-toggle="tooltip" title="This will take you to my github!" target="_blank" rel="noopener noreferrer"> 
                            Code Mania
                        </a>
                    </h4>
                    <a href="https://ancient-bayou-98985.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={Code_Mania}  width="350" height="350" alt="Code Mania" />
                    </a>
                </div>
            
                <div className="col-sm-12 col-lg-4">
                    <h4>
                        <a href="https://github.com/ShanniSnax/self-care-pirates" className="btn btn-primary" data-toggle="tooltip" title="This will take you to my github!" target="_blank" rel="noopener noreferrer"> 
                        Self-care Pirates
                        </a>
                    </h4>
                    <a href="https://aqueous-refuge-56122.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img className="rounded float-left img-fluid" src={SCP}  width="350" height="350" alt="Self-care Pirates" />
                    </a>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <h4>
                        <a href="https://github.com/Juzva8" className="btn btn-primary" data-toggle="tooltip" title="This will take you to my github!" target="_blank" rel="noopener noreferrer"> 
                            Next Project
                        </a>
                    </h4>
                    <a href="https://github.com/Juzva8" target="_blank" rel="noopener noreferrer">
                    <img className="rounded float-left img-fluid" src={future} width="350" height="350" alt="Next Project" />               
                    </a>
                </div>
            </div>
        </div>
    
      );

    
    export default Portfolio;
    