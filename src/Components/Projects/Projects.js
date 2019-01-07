import React from 'react'
import './Projects.css'

const Projects = props => (
    <div className="Links">
        <div className="Links_div">
            <a className="Links_div-link" href='http://stoper.surge.sh/'><div className="Links_div-element-stoper">Stoper</div></a>
            <a className="Links_div-link" href='http://timer-v1.surge.sh/'><div className="Links_div-element-timer">Timer</div></a>
        </div>
        <div className="Links_div">
            <p className="Links_div-link"><div className="Links_div-element">Clicker ( in building )</div></p>
            <p className="Links_div-link"><div className="Links_div-element">Faktura v1.0 ( in building )</div></p>
        </div>
    </div >
)

export default Projects