const DISPLAY1 = 'head/DISPLAY1'
const DISPLAY2 = 'head/DISPLAY2'
const DISPLAY3 = 'head/DISPLAY3'

const INITIAL_STATE = {
    display: null,
    text: null
}

export const changeDisplay = () => (dispatch, getState) => {
    let i = 2
    dispatch(display1())
    setInterval(() => {
        if (i === 1)
            dispatch(display1())
        if (i === 2)
            dispatch(display2())
        if (i === 3) {
            dispatch(display3())
            i = 0
        }
        i++
    }, 5000)
}

const display1 = () => ({
    type: DISPLAY1
})

const display2 = () => ({
    type: DISPLAY2
})

const display3 = () => ({
    type: DISPLAY3
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DISPLAY1:
            return {
                display: "Display1",
                text: 'Krystian Pietroń jr. Front-End Developer'
            }
        case DISPLAY2:
            return {
                display: "Display2",
                text: 'Technologie'
            }
        case DISPLAY3:
            return {
                display: "Display3",
                text: 'Projekty'
            }
        default:
            return state
    }
}