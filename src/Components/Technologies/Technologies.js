import React from 'react'
import html5 from '../../img/html5.png'
import css3 from '../../img/css3.png'
import javascript from '../../img/javascript.png'
import reactpng from '../../img/react.png'
import reduxpng from '../../img/redux.png'
import reactrouter from '../../img/react-router.png'

const style = {
    divImg: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    img: {
        height: '300px',
        margin: '10px 0px 10px 0px'
    },
    imgRe: {
        height: '250px',
        width: '300px',
        margin: '10px 0px 10px 0px'
    },
    imgRouter: {
        height: '200px',
        width: '300px',
        margin: '30px 0px 10px 0px'
    }
}

const Technologies = props => (
    <div
        style={style.divImg}
    >
        <img src={html5} alt='html5png' style={style.img} />
        <img src={css3} alt='css3png' style={style.img} />
        <img src={javascript} alt='javascriptpng' style={style.img} />
        <img src={reactpng} alt='reactpng' style={style.imgRe} />
        <img src={reactrouter} alt='reactrouter' style={style.imgRouter} />
        <img src={reduxpng} alt='reduxpng' style={style.imgRe} />
    </div>
)
export default Technologies