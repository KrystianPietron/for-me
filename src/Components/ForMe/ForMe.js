import React from 'react'
import foto from '../../img/KrystianPietron.JPG'

const style = {
    divStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'

    },
    foto: {
        height: '350px',
        margin: '10px 0 10px 0'
    },
    divText: {
        margin: '0 0 0 30px',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
}

const ForMe = props => (
    <div id='forme'
        style={style.divStyle}
    >
        <div>
            <img src={foto} alt='foto' style={style.foto} />

        </div>
        <div
            style={style.divText}
        >
            <h3>Cześć!</h3>
            <p>  Mam na imie Krystian.
                Front-Endem zajmuję się od 3 miesięcy. Poszukuję pracy w Lublinie. <br />
                Ukończyłem Wyższą Szkołę Ekonommii i Innowacji w Lublinie na kierunku<br />
                Informatyka o specjalizacji Systemy i Sieci komputerowe. <br />
                W grudniu ur. ukończyłem kurs Junior Front-End Developer w infoShare academy w Lublinie.
            </p>
            <hr />
        </div>
    </div>
)
export default ForMe