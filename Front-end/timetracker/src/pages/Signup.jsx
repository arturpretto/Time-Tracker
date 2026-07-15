import style from "../styles/Sign.module.css"
import { useNavigate, Link } from "react-router-dom"

export default function Landing() {
    const navigate = useNavigate()

    return (
        <div className={style.background}>
            <div className={style.signupBox}>
                <h1>CADASTRAR</h1>
                <form className={style.signForm}>
                    <input type="text" placeholder="Nome..." className={style.signInput} />
                    <input type="text" placeholder="E-mail..." className={style.signInput} />
                    <input type="password" placeholder="Senha..." className={style.signInput} />
                    <button type="submit" className={style.formBtn} onClick={() => navigate("/home")}>CADASTRAR</button>
                    <p>Já possui conta? <Link to="/login">Entrar</Link></p>
                </form>
            </div>
        </div>
    )
}