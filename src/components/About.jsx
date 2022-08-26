import React from "react";
import MyButton from "./MyButton";
import { useNavigate } from 'react-router-dom';

const About = () => {
  let navigate = useNavigate();
  return (
    <div className="aboutPage">
      This application is made about my lovely cat Persik.<br />
      My contacts: egorova.aleksandra@gmail.com
      <MyButton className="btn3" onClick={() => navigate('/container')}>
        Back to main page
      </MyButton>


    </div>
  );
};

export default About;