import { Link } from 'react-router-dom';
import styles from './navbar.module.css'
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {

    const menu = () => {
        const main_menu = document.getElementById('main_menu')
        main_menu.classList.toggle(styles.main_menu_show)
    }

    return (
        <>
            <nav className={styles.main_nav}>
                <Link to='/'>

                    <p className={styles.logo}>Match</p>
                </Link>
                <div id='toggle_menu' className={styles.toggle_menu} onClick={() => menu()}>
                    <FiMenu className={styles.toggle_menu_icon} />
                </div>
                <ul id='main_menu' className={styles.main_menu}>
                    <li className={styles.main_menu_item}>
                        <Link to='/' className={styles.main_menu_link}>Jugando</Link>
                    </li>
                    <li className={styles.main_menu_item}>
                        <Link to='terminados' className={styles.main_menu_link}>Terminados</Link>
                    </li>
                    <li className={styles.main_menu_item}>
                        <Link to='proximos' className={styles.main_menu_link}>Proximos</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;