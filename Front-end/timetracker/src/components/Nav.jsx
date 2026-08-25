import { useNavigate } from "react-router-dom"
import style from "../styles/Nav.module.css"
import { House } from "lucide-react"

export default function Nav() {
    const navigate = useNavigate()

    return (
        <header className={style.header}>
            <div className={style.homeContainer}>
                <House />
                <h3>Início</h3>
            </div>
            <div className={style.pointsContainer}>
                <h3>Pontos</h3>
            </div>
        </header>
    )
}