// import AwesomeSlider from "react-awesome-slider";
// import AwesomeSliderStyles from "react-awesome-slider/src/styled/scale-out-animation";
// // import 'react-awesome-slider/src/styles'
// const Slider = ({ images }) =>
//   images ? (
//     <AwesomeSlider cssModule={AwesomeSliderStyles} className="my-10 ">
//       {images.map((img) => (
//         <div data-src={img} className="h-screen py-10" />
//       ))}
//     </AwesomeSlider>
//   ) : (
//     <></>
//   );
// export default Slider;

import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom } from "react-slideshow-image";
const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "1000px", 
};
const loadImage = (images)=>{
  if(!images)
    return <></>
  if(images.length === 1)
    images.push(images[0]);
  return images.map((fadeImage, index) => (
    <div key={index}>
      <img style={{ width: "100%" }} src={fadeImage} />
    </div>
  ));
}
function Slider({ images }) {
  return images ? (
    <div className="slide-container">
      <div className="slide-container">
        <div className="slide-container">
          <Fade>{loadImage(images)}</Fade>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Slider;
