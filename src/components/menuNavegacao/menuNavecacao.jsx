import './menuNavegacao.css'
import LinkNavegacao from '../linkNavegacao/linkNavegacao'

export default function MenuNavegacao(){
    return(
        <header>
            <nav className="navegacao">
                <LinkNavegacao to="/">Inicio</LinkNavegacao>
                <LinkNavegacao to="/sobremim" > SobreMim</LinkNavegacao>
            </nav>
        </header>
    )
}