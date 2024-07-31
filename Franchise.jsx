import React from 'react'
import"./Knightbite.css"
import img from './img/apply-grid.png'
import { franchise_data } from './Franchise_data'
import FranchiseItem from './FranchiseItem'
const Franchise = () => {
  return (
    <div>
      <video autoPlay controls loop muted id="video"src="https://knight-bite.com/res/franchise/franchise_playback.mp4"></video>
      <div id="french">
        <h1 id="fra">Franchise with knight bite</h1>
        <h3 id="get">get started with the modern way of doing business</h3>
        <button id="ab">Apply Now</button>
        <p id="wat">Watch Video</p>
      </div>
      <div id="mi">
        <h3>Mission and Vision</h3>
        <p id="p1">Our Mission is to deliver the best food with the ultimate customer service.</p>
        <p id="p2">Our Vision is to be the most favourite food chain brand in the country and world.</p>
      </div>
      <hr id="hr"/>
      <div id="fre2">
        <h2 id="key">Key Benefits Of Knight Bite Franchise</h2>
        {franchise_data.map(({img,h6,p})=>{
            return<FranchiseItem img={img} h6={h6} p={p} key={img}/>
        })}
      </div>
      <hr />
      <div>
        <h1 id="ap">Apply Here</h1>
        <p id="req">Request for initial meeting</p>
        <img src={img} alt="" id="ben" />
        <button id="ab">Apply Now</button>
      </div>
      <hr />
      <h1 id="f">Franchise Queries</h1>
      <div id="ap">
      <img src="	https://knight-bite.com/res/franchise/footer-1.svg" alt="" id="adobe"/>
      <span>Franchise Brochure</span>
      <img src="https://knight-bite.com/res/franchise/footer-3.svg" alt="" id="c" />
      <span style={{marginLeft:"-130px"}}>08047192034</span>
      <img src="https://knight-bite.com/res/franchise/footer-2.svg" alt="" id="in" />
      <span>info@knight-bite.com</span>
      </div>
      <h6 id="pink">Ⓒ Copyright 2023. Knight Bite Foods Pvt. Ltd. All Rights Reserved</h6>
    </div>


  )
}

export default Franchise
