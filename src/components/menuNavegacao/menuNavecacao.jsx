import { Link } from 'react-router-dom'
import styles from './menuNavegacao.css'

export default function MenuNavegacao(){
    return(
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to="/"> Inicio</Link>
                <Link className={styles.link} to="/sobremim"> SobreMim</Link>
            </nav>
        </header>
    )
}