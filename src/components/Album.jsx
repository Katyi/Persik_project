import React from "react";
import MyButton from "./MyButton";
import { useNavigate } from 'react-router-dom';
import imagesList from "../imagesList"

const Album = () => {  
  let navigate = useNavigate();
  
  return (
    <div className="container2">
      <MyButton className="btn4" onClick={() => navigate('/container')}>
        Back to main page
      </MyButton>
      {imagesList.map((item) =>
        <div key={item.id} className="tn-atom7">
          <img  src={require("../images/" + item.title+ '.jpg')}  alt='Images' className="pictureForAlbum" />
        </div>
      )}
    </div>
  );
};

export default Album;