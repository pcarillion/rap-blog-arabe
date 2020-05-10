import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'


const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="contactez" subtitle="nous" />
            <div className={styles.center}>
                <form className={styles.form} action="https://formspree.io/pcarillion@yahoo.fr" method="POST">
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" className={styles.formControl} placeholder="nom"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className={styles.formControl} placeholder="email"/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" className={styles.formControl} placeholder="message" riws="10"/>
                    </div>
                    <div>
                        <input type="submit" value="Envoyer" className={styles.submit}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
