import React from 'react';
import styles from "./NavBar.module.css";
import { FaGithub, FaLinkedin,FaLink } from 'react-icons/fa';

export const NavBar = () => {
  
    return (
        <div className={styles.navbar}>

            <ul className={styles.links_list}>
                <li className={styles.links}>
                    <a href="https://www.linkedin.com/in/miguel-guedes1/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>
                </li>
                <li className={styles.links}>
                    <a href="https://github.com/MiguelGuedes1" target="_blank" rel="noopener noreferrer">
                        <FaGithub/>
                    </a>
                </li>
                <li className={styles.links}>
                    <a href="https://github.com/MiguelGuedes1/Crypto_price_app" target="_blank" rel="noopener noreferrer">
                        <FaLink/>
                    </a>
                </li>
            </ul>
            
        </div>
    );
}

export default NavBar

