import style from "../styles/Sign.module.css"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    return (
        <div className={style.background}>
            <div className={style.loginBox}>
                <h1>ENTRAR</h1>
                <form className={style.signForm}>
                    <input type="text" placeholder="E-mail..." className={style.signInput} />
                    <input type="password" placeholder="Senha..." className={style.signInput} />
                    <button type="submit" className={style.formBtn} onClick={() => navigate("/home")}>ENTRAR</button>
                    <p>Não possui conta? <Link to="/signup">Cadastre-se</Link></p>
                </form>
            </div>
        </div>
    )
}