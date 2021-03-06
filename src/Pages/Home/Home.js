import React from 'react';
import Logo from '../../components/Images/Landing-logo.png';
import Reveal from 'react-reveal/Reveal'
import GridComponent from '../../components/Portfolio/grid'; 
import "./Home.css";
import Lawrence from '../../components/LJ/Lawrence'


const Home = () => (
    <div className="Home"> 
  <Reveal effect="fadeIn" duration={3000}>
       <GridComponent>
      <img src={Logo} alt="Logo" className='logo' />
        </GridComponent>
        <Lawrence />
  </Reveal>
     <h3>I am a former CEO and founder of a transport company with almost one hundred employees. 
       I was born in central Europe where studied Psychology for two years and later I decided to get a Bachelor's degree in Business Administration. 
       I am fluent in three languages. I can speak in one of the oldest Proto-Indo-European languages as well as Russian. I can write and read in Cyrillic script and I am fluent in English. 
       I moved to the United States in 2017. Since then I got into tech and coding which is why in June of 2020 I decided to sell my company and started UCLA extension for full-stack web developer boot camp which I graduated in February of 2021. I spent a lot of time learning front and back end web development but that's not it. 
       My all free time I spent on the coding academy and other online courses learning other coding languages. 
       I know that you see Junior developer but with my commitment and responsibility you will get the best employee you have ever seen!</h3>
    </div>
  );


export default Home;
