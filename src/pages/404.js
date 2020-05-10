import React from 'react'
import styles from '../css/error.module.css'
// import {Link} from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Banner from '../components/Banner'
import Layout from '../components/Layout'
const Error = () => {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="oops il y a une erreur dans l'url">
                    <AniLink fade to="/" className="btn-white">
                        Retour à la page d'accueil
                    </AniLink>
                </Banner>
            </header>
        </Layout>
    )
}

export default Error
