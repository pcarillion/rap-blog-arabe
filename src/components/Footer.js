import React from 'react'
import styles from '../css/footer.module.css'
import {Link} from 'gatsby'
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
                        <Link key={i} to={item.path}>{item.text}</Link>
                    )
                })}
            </div>
            <div className={styles.icons}>
                {socialIcons.map((item, i) => {
                    return (
                        <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                        </a>
                    )
                })}
            </div>
            <div className={styles.copyright}>
                copyright &copy; Arabic rap blog 2020 All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer
