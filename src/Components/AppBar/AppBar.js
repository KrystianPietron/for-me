import React from 'react'
import Button from '../../elements/Button'
const style = {
    divStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: '80px',
        justifyContent: 'space-between'
    },
    divText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    divButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
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
        </div>
    </div>
)
export default AppBar