import React from 'react'
import TextField from 'material-ui/TextField'

const Input = props => (
    <TextField
        onChange={props.onChange}
        label={props.label}
    />
)
export default Input