import '../styles/footer.scss'

import React from "react"

import hacksc from '../assets/hacksc.svg';
import clickDown from '../assets/angle-down.svg';
import city from '../assets/city.png';

import { Link } from 'react-scroll';

import '../styles/hero.scss'
import WithGA from './WithGA';

export default (props) => (
  <header>
    <div className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-half details-column">
              <img src={hacksc} alt="HackSC 2019" className="hacksc"/>
              <hr/>
              <h2 className="title">April 12-14, 2019</h2>
              <h2 className="title city">Los Angeles, CA</h2>
              <p className="subtitle">Hackathon, but we do it better.<br/>Hosted by USC, baby.</p>
              <WithGA action="Clicked Apply">
                <button className="button is-primary is-medium apply-button" onClick={console.log}>Applications Open Feb 10</button>
              </WithGA>
            </div>

            <div className="column is-half graphic-col">
              <img src={city} alt="City HackSC graphic" className="city-graphic" />
            </div>
          </div>
        </div>
      </div>

      <Link
        to='main'
        smooth={true}
        duration={1000}
      >
        <img className="click-down" src={clickDown} alt="Click to Scroll" />
      </Link>
    </div>
  </header>
)
