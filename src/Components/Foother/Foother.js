import React from 'react'
import './Foother.css'
import linkedin from '../../img/linkedin.svg'
import facebook from '../../img/facebook.svg'
import github from '../../img/github.svg'

const Foother = props => (
    <div className="Foother">
        <div className="Foother_div">
            <div className="Foother_div-download-kontakt">
                <p>Linki</p>
                <a href="https://www.linkedin.com/in/krystian-pietron/"><img src={linkedin} className="Foother__div-links"></img></a>
                <a href="https://www.facebook.com/krystian.pietron"><img src={facebook} className="Foother__div-links"></img></a>
                <a href="https://github.com/KrystianPietron"><img src={github} className="Foother__div-links"></img></a>
            </div>
            <div className="Foother_div-download-kontakt">
                <p>Kontak</p>
                <p>+48 722 366 109</p>
                <p><a className="textDecoration" href="mailto:krystianpietr@gmail.com">krystianpietr@gmail.com</a></p>
            </div>
            <div className="Foother_div-download-kontakt">
                <p>Download</p>
                <p><a className="textDecoration" href=''>CV</a></p>
            </div>

        </div>
        <div>
            <div className="Foother_div-copyright">
                ©Copyright by Krystian Pietroń Junior Front-End Developer
            </div>
        </div>
    </div>
)

export default Foother