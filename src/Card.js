import React from 'react'
import './App.css'

export default function Card() {
  return (
    <div className=" card" data-aos="fade-up" data-aos-delay="400"  data-aos-duration="1000">

                        <div className="card-top">
                            <img src="/images/dog.jpg" alt="picture of team member"/>
                        </div>
                        <div className="card-bottom">
                           <h3><b>V-R Assessments</b></h3>
                        </div>
                        <div className="card-text">
                        <h4><b>Improv yields and  </b>Improve . Make your business more profitable easily manageable and reach out to a wider Market</h4>  
                        <button>Learn more</button>
                        </div>
                    </div>
  )
}
