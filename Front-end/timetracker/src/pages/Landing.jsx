import style from "../styles/Landing.module.css"
import { Link } from "react-router-dom"

export default function Landing() {
    return (
        <div className={style.background}>
            <nav className={style.nav}>
                <div className={style.title}>
                    <h1 className={style.titleText}>TIME TRACKER TELECAS</h1>
                </div>
                <div className={style.buttons}>
                    <Link to="/login"><button type="button" className={style.loginBtn}>ENTRAR</button></Link>
                    <Link to="/signup"><button type="button" className={style.signBtn}>CADASTRAR</button></Link>
                </div>
            </nav>
            <div className={style.logoContainer}>
                <img src="/telecon.png" alt="Telecon" className={style.logo} />
            </div>
        </div>
    );
}