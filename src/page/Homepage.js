import React from 'react'
import "./homepage.css"
import Header from "../components/header/Header"
import Footer from '../components/Footer/Footer'

function Homepage() {
  return (
    <div className="homepage">
        <div className="homeheader">
          <Header/>
        </div>
        <div className="homemain">
        <section class=" alpha w-75 mx-auto box-shadow">
        <div class="p-4 w-50">
          <h2 class="my-3">About V-lab</h2>
          <p class="">
            Virtual Lab is a tool for distance learning and performing
            experiments using simulations that allow students to understand the
            concepts in a better way. This tool is very useful when students are
            unable to perform the experiments physically due to various reasons
            like lockdown or high cost of the experimental setup.
          </p>
        </div>
        <img
          class="p-2 w-75"
          src="https://vakilsearch.com/blog/wp-content/uploads/2023/02/aaple-sarkar-1.png"
          alt="ll"
        />
      </section>
          
        </div>
        <div className="homefooter">
          <Footer/>
        </div>

      
    </div>
  )
}

export default Homepage
