import React from 'react'
import html5 from '../../img/html5.png'
import css3 from '../../img/css3.png'
import javascript from '../../img/javascript.png'
import reactpng from '../../img/react.png'
import reduxpng from '../../img/redux.png'
import reactrouter from '../../img/react-router.png'
import './Technologies.css'

const Technologies = props => (
    <div >
        <div className="Technologies">
            <img src={html5} alt='html5png' className="Technologies__img Technologies__AllImg" />
            <img src={css3} alt='css3png' className="Technologies__img Technologies__AllImg" />
            <img src={javascript} alt='javascriptpng' className="Technologies__img Technologies__AllImg" />
        </div>
        <div className="Technologies">
            <img src={reactpng} alt='reactpng' className="Technologies__ReduxReact Technologies__AllImg" />
            <img src={reactrouter} alt='reactrouter' className="Technologies__Router Technologies__AllImg" />
            <img src={reduxpng} alt='reduxpng' className="Technologies__ReduxReact Technologies__AllImg" />
        </div>

    </div>
)
export default Technologies