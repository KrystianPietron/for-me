import React from 'react'
import './Foother.css'

const Foother = props => (
    <div className="Foother">
        <div className="Foother_div">
            <div className="Foother_div-download-kontakt">
                <p>Kontak</p>
                <p>Tel:  722 366 109</p>
                <p>Mail: <a className="textDecoration" href="mailto:krystianpietr@gmail.com">krystianpietr@gmail.com</a></p>
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