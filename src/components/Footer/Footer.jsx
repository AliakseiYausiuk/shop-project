import React from 'react'
import styles from '../../styles/Footer.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import LOGO from '../../images/logo.svg'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed
      </div>
      <div className={styles.socials}></div>
    </section>
  )
}

export default Footer