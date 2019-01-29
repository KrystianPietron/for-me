import React from 'react'
import './Projects.css'

const Projects = props => (
    <section className="Links">
        <ul className="Links_div">
            <a className="Links_div-link" href='http://stoper.surge.sh/'><li className="Links_div-element-stoper">Stoper</li></a>
            <a className="Links_div-link" href='http://timer-v1.surge.sh/'><li className="Links_div-element-timer">Timer</li></a>
        </ul>
        <ul className="Links_div">
            <p className="Links_div-link"><li className="Links_div-element">Clicker ( in building )</li></p>
            <p className="Links_div-link"><li className="Links_div-element">Faktura v1.0 ( in building )</li></p>
        </ul>
    </section >
)

export default Projects