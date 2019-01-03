import beach from '../img/beach.jpeg'
import technologies from '../img/technologies.jpg'
import projects from '../img/projects.jpeg'

const DISPLAY1 = 'head/DISPLAY1'
const DISPLAY2 = 'head/DISPLAY2'
const DISPLAY3 = 'head/DISPLAY3'

const INITIAL_STATE = {
    display1: null,
    display2: null,
    display3: null,
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
                display1: {
                    background: `url(${beach})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    color: 'white',
                    fontSize: null,
                    transition: 'opacity 2s'
                },
                display2: {
                    display: 'none'
                },
                display3: {
                    display: 'none'
                },
                text: 'Krystian Pietroń jr. Front-End Developer'
            }
        case DISPLAY2:
            return {
                display1: {
                    display: 'none'
                },
                display2: {
                    background: `url(${technologies})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: null,
                    color: 'black',
                    fontSize: '60px',
                    transition: 'opacity 3s'
                },
                display3: {
                    display: 'none'
                },
                text: 'Technologie'
            }
        case DISPLAY3:
            return {
                display1: {
                    display: 'none'
                },
                display2: {
                    display: 'none'
                },
                display3: {
                    background: `url(${projects})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    color: 'white',
                    fontSize: '60px',
                    transition: 'opacity 3s'
                },
                text: 'Projekty'
            }
        default:
            return state
    }
}