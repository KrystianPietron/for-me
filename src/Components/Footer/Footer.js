import React from 'react'
import './Footer.css'
import linkedin from '../../img/linkedin.svg'
import facebook from '../../img/facebook.svg'
import github from '../../img/github.svg'

const Footer = props => (
    <footer className="Footer">
        <article className="Footer_div">
            <div className="Footer_div-download-kontakt">
                <p>Social Media</p>
                <a href="https://www.linkedin.com/in/krystian-pietron/"><img src={linkedin} alt="linkedin icon" className="Footer__div-links"></img></a>
                <a href="https://www.facebook.com/krystian.pietron"><img src={facebook} alt="facebook icon" className="Footer__div-links"></img></a>
                <a href="https://github.com/KrystianPietron"><img src={github} alt="github icon" className="Footer__div-links"></img></a>
            </div>
            <div className="Footer_div-download-kontakt">
                <p>Kontak</p>
                <p>+48 722 366 109</p>
                <p><a className="textDecoration" href="mailto:krystianpietr@gmail.com">krystianpietr@gmail.com</a></p>
            </div>
            <div className="Footer_div-download-kontakt">
                <p>Download</p>
                <p><a className="textDecoration" href='https://krystianpietron.github.io/CV/'>CV</a></p>
            </div>

        </article>
        <article>
            <div className="Footer_div-copyright">
                ©Copyright by Krystian Pietroń Junior Front-End Developer
            </div>
        </article>
    </footer>
)

export default Footer