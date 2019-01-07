import React from 'react'
import Button from '../../elements/Button'
import logo from '../../img/logo.png'
import './AppBar.css'
import { Link } from 'react-router'

const style = {
    buttonStyle: {
        height: '100%',
        width: '10vw'
    },
}

const AppBar = props => (
    <div className="AppBar">
        <img src={logo} alt='logo' className="AppBar__Logo" />
        {/* <div className="AppBar__Links"    >
            <a href="/Projects">
                <Button
                    style={style.buttonStyle}
                    label='HOME'
                />
            </a>
            <Button
                style={style.buttonStyle}
                label='O mnie'
            />
            <Button
                style={style.buttonStyle}
                label='technologie'
            />
            <Button
                style={style.buttonStyle}
                label='Projekty'
            />
        </div> */}
    </div>
)
export default AppBar