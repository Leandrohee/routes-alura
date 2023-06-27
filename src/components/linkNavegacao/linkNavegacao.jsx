import './linkNavegacao.css'
import { Link, useLocation } from 'react-router-dom'


export default function LinkNavegacao({children,to}){

    let cN                                                  //Classe Name
    let location = useLocation()

    location.pathname == to ? cN = " link link-underline" : cN = "link"

    return(
        <Link className={cN} to={to}> {children} </Link>
    )
}