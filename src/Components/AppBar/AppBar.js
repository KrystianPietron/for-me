import React from 'react'
import Button from '../../elements/Button'
const style = {
    divStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: '60px',
        justifyContent: 'space-between',
        background: 'red'
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

    }
}

const AppBar = props => (
    <div
        style={style.divStyle}>
        <div
            style={style.divText}
        >
            <h2>Krystian Pietroń jr. Front-End Developer</h2>
        </div>
        <div
            style={style.divButton}
        >
            <Button
                label='HOME'
            />
            <Button
                label='For ME'
            />
            <Button
                label='technologies'
            />
            <Button
                label='Projects'
            />
        </div>
    </div>
)
export default AppBar