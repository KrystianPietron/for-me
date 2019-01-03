import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Button = props => (
    <RaisedButton
        label={props.label}
        onClick={props.onClick}
        primary={props.primary}
        style={props.style}
        href={props.href}
    />
)

export default Button 