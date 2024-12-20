import React, { useEffect, useState } from 'react';
import './Projects.css';
import helmet from '/projects/helmet.webp'
import cityScapes from '/projects/cityscapes.webp'
import agroAI from '/projects/agroAI.webp'
import visualbert from '/projects/visualbert.webp'
import BackButton from '../backButton/backButton';
// import GooeyCursor from "../Gooey Cursor/gooeyCursor.jsx";
import Cursor from "../Cursor/cursor.jsx";
function projectpage() {
  const [blurLayerHeight, setblurLayerHeight] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setblurLayerHeight(document.getElementById("projectWrap").clientHeight)
    })
    window.addEventListener('load', () => {
      setblurLayerHeight(document.getElementById("projectWrap").clientHeight)
    })
    document.getElementById('projectWrap').addEventListener('mouseenter', () => {
      document.getElementById('projBox1').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'Open Github Repository'
      })
      document.getElementById('projBox1').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
      document.getElementById('projBox2').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'Open Github Repository'
      })
      document.getElementById('projBox2').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
      document.getElementById('projBox3').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'Open Github Repository'
      })
      document.getElementById('projBox3').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
      document.getElementById('projBox4').addEventListener('mouseenter', () => {
        document.getElementById('webCursor').style.width = 'auto'
        document.getElementById('webCursor').style.height = 'auto'
        document.getElementById('webCursor').style.padding = '8px'
        document.getElementById('webCursor').innerText = 'Open Github Repository'
      })
      document.getElementById('projBox4').addEventListener('mouseleave', () => {
        document.getElementById('webCursor').style.width = '20px'
        document.getElementById('webCursor').style.height = '20px'
        document.getElementById('webCursor').innerText = ''
      })
    })
    scrollTo({ top: 0, behavior: "smooth" })
    document.getElementById('blurLayer').style.backgroundImage = 'radial-gradient(circle, #383c3d7d 2px, transparent 1px)'
    document.getElementById('blurLayer').style.backgroundSize = '20px 20px'
  }, [])

  return (
    <>
      <Cursor></Cursor>
      {/* <GooeyCursor /> */}
      <BackButton textDisplay={true} filter="invert(1)" ></BackButton>
      <div id='projectWrap' className='Projectwholepage'>
        <div id='blurLayer' className="blurLayer" style={{ height: `${blurLayerHeight}px` }}></div>
        <h1 className='Projects'>Our Projects</h1>
        <br />
        <br />
        <br />

        <div className="container">
          <div id='projBox1' onClick={() => { window.location.href = "https://github.com/aiclubvitbhopal" }} className="box1">
            <img class='projectBanner' src={cityScapes} alt="Description of the image" />
          </div>
          <span className="text1">Cityscapes (3D City Planning) : Users selects geographical topology for Generative Model.
            This generates 2D Citymaps and 3D Meshwork as JSON.
            The JSON Can be used to generate 3D city maps  for Artists in any Blender using bpy</span>
          <div id='projBox2' onClick={() => { window.location.href = "https://github.com/aiclubvitbhopal" }} className="box2">
            <img class='projectBanner' src={helmet} alt="Description of the image" />
          </div>
          <span className="text2">
            Real Time Helmet Detection. Non Helmet subjects on Bike are retrieved by capturing Vehicle No. to Govt. Database
          </span>
          <div id='projBox3' onClick={() => { window.location.href = 'https://github.com/aiclubvitbhopal/Fertilizer_Recommender' }} className="box3">
            <img class='projectBanner' src={agroAI} alt="Description of the image" />
          </div>
          <span className="text3">AgroAI predicts Plants diseases and Fertilizer Option for plants.</span>
          <div id='projBox4' onClick={() => { window.location.href = 'https://github.com/aiclubvitbhopal/VQA_RAD_Short_Term_Project-' }} className="box4">
            <img class='projectBanner' src={visualbert} alt="Description of the image" />
          </div>
          <span className="text4">VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice, visual reasoning and region-to-phrase correspondence tasks.</span>
        </div>
      </div>
    </>
  );
}

export default projectpage
