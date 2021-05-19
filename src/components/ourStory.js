import React from 'react';
// import styled from 'styled-components';
import './ourStory.css';

// const StyledSection = styled.div`
//   margin: 50px;
//   display: grid;
//   justify-content: center;
//   align-items: center;

//   .title {
//     display: grid;
//     align-items: center;
//     justify-content: center;
//     line-height: 0.5;
//     text-align: center;
//   }

//   .title h1 {
//     font-size: 65px;
//     font-weight: normal;
//   }

//   .story {
//     margin-top: 200px;
//     display: grid;
//     grid-template-columns: 1fr 200px 1fr;
//     grid-template-areas:
//       'content1 vl   img1'
//       'img2  vl  content2'
//       'content3  vl img3';
//   }

//   .story img {
//     height: 450px;
//     border-radius: 50%;
//   }
//   .vl {
//     border-left: 5px solid #e2e2e2;
//     height: 100%;
//     position: absolute;
//     left: 50%;
//     margin-left: -3px;
//     grid-area: vl;
//   }

//   .content1 {
//     grid-area: content1;
//   }

//   .photo1 {
//     grid-area: img1;
//   }

//   .content2 {
//     grid-area: content2;
//   }

//   .photo2 {
//     grid-area: img2;
//   }

//   .content3 {
//     grid-area: content3;
//   }

//   .photo3 {
//     grid-area: img3;
//   }
//   .content {
//     width: 500px;
//   }
// `;

export default function OurStory() {
  return (
    <div className="ourStory">
      <div className="title">
        <span>OUR STORY</span>
        <h1>With love</h1>
      </div>
      {/* <img src="images/nobackground.png" alt="" /> */}

      <div className="story">
        <div className="vl" />
        <div className="content content1">
          <span className="date">2009</span>
          <h1>How we met </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit consectetur
            adipisicing elit. .
          </p>
        </div>

        <div className="photo1">
          <img src="images/croppedImage1.png" alt="" />
        </div>

        <div className=" content content2">
          <span className="date">2019</span>
          <h1>Proposal </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            quisquam cumque officiis illum. repellendus et nulla, distinctio
            corporis placeat neque aperiam at id eveniet amet doloremque nihil.
          </p>
        </div>
        <div className="photo2">
          <img src="images/cropped-image2.jpg" alt="" />
        </div>

        <div className=" content content3">
          <span className="date">2020</span>
          <h1>Our Wedding </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            quisquam cumque officiis illum
          </p>
        </div>
        <div className="photo3">
          <img src="images/cropped-image3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
