import { useRef } from "react"
import style from "../styles/Sign.module.css"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!email.current.value || !password.current.value) {
            alert("Preencha todos os campos!")
            return
        }

        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email.current.value,
                password: password.current.value
            })
        })

        const data = await response.json()
        localStorage.setItem("userId", data.id)

        navigate("/home")
    }

    return (
        <div className={style.background}>
            <div className={style.loginBox}>
                <h1>ENTRAR</h1>
                <form className={style.signForm}>
                    <input type="text" placeholder="E-mail..." className={style.signInput} ref={email} />
                    <input type="password" placeholder="Senha..." className={style.signInput} ref={password} />
                    <button type="submit" className={style.formBtn} onClick={handleLogin}>ENTRAR</button>
                    <p>Não possui conta? <Link to="/signup">Cadastre-se</Link></p>
                </form>
            </div>
        </div>
    )
}