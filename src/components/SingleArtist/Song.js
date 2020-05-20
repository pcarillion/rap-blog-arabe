import React, {useState} from 'react'
import {FaAngleDown} from "react-icons/fa"
import styles from "../../css/day.module.css"


const Song = ({song, url}) => {

    const [showInfo, setInfo] = useState(false);

    const toggleInfo = () => {
        setInfo(showInfo => !showInfo)
    }

    return (
        <article className={styles.day}>
            <h4>
                {song}
                <button className={styles.btn} onClick={toggleInfo}>
                    <FaAngleDown />
                </button>
            </h4>
            {
                showInfo && <a href={`${url}`}><p>lien vers la vidéo</p></a>
            }
        </article>
    )
}

export default Song
