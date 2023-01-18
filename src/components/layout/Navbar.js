import { Link } from 'react-router-dom';
import styles from './navbar.module.css'
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {

    return (
        <>
            <nav className={styles.navbar}>
                <Link to='/' className={styles.logo}>Match</Link>
                <input type='checkbox' id={styles.toggler} />
                <label className={styles.toggler} for='toggler'><FiMenu /></label>
                <div className={styles.menu}>
                    <ul className={styles.list}>
                        <li><Link to='/'>Jungando</Link></li>
                        <li><Link to='/terminados'>Terminados</Link></li>
                        <li><Link to='/proximos'>Proximos</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;