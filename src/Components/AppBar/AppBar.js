import React from 'react'
import { Link } from 'react-router'
import Button from '../../elements/Button'
import logo from '../../img/logo.png'
const style = {
    divStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: '60px',
        justifyContent: 'space-between',
        background: 'gray',
        position: 'fixed',
        width: '100%'
    },
    divText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0 0 0 20px'
    },
    divButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '0 20px 0 '
    },
    buttonStyle: {
        height: '100%',
        width: '10vw'
    },
    logo: {
        height: '55px',
        width: '55px'
    }
}

const AppBar = props => (
    <div
        style={style.divStyle}>
        <div
            style={style.divText}
        >
            <img src={logo} alt='logo' style={style.logo} />
        </div>
        <div
            style={style.divButton}
        >
            <Button
                style={style.buttonStyle}
                label='HOME'
            />
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
        </div>
    </div>
)
export default AppBar