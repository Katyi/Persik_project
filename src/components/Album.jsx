import React from "react";
import MyButton from "./MyButton";
import { useNavigate } from 'react-router-dom';
import imagesList from "../imagesList"

const Album = () => {  
  let navigate = useNavigate();
  
  return (
    <div style={{ marginTop: 200, display: 'box', padding: 10 }}>
      <MyButton className="btn4" onClick={() => navigate('/container')}>
        Back to main page
      </MyButton>
      {imagesList.map((item) =>
        <div key={item.id} style={{marginTop: 15, display: 'inline-flex', padding: 10}}>
          <img  src={require("../images/" + item.title+ '.jpg')}  alt='Images' style={{ width: 550, padding: 20 }} />
        </div>
              )}  
    </div>
  );
};

export default Album;