import React from 'react'
import foto from '../../img/KrystianPietron.JPG'
import './ForMe.css'

const ForMe = props => (
    <div className="ForMe">
        <div>
            <img src={foto} alt='foto' className="ForMe__Foto" />

        </div>
        <div className="ForMe__Text">
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