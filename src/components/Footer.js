import React from 'react'
import styles from '../css/footer.module.css'
// import {Link} from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import links from '../constants/links'
import socicalIcons from '../constants/social-icons'
import socialIcons from '../constants/social-icons'


// import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map((item, i) => {
                    return (
                        <AniLink fade key={i} to={item.path}>{item.text}</AniLink>
                    )
                })}
            </div>
            {/* <div className={styles.icons}>
                {socialIcons.map((item, i) => {
                    return (
                        <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                        </a>
                    )
                })}
            </div> */}
            <div className={styles.copyright}>
                copyright &copy; <a href="https://paul-carillion.net" target="_blank">Paul Carillion</a> - 2020 - Tous droits réservés
            </div>
        </footer>
    )
}

export default Footer
