import { useRef } from "react"
import style from "../styles/Sign.module.css"
import { useNavigate, Link } from "react-router-dom"

export default function Landing() {
    const navigate = useNavigate()
    const nome = useRef()
    const email = useRef()
    const password = useRef()

    const handleSignup = async (e) => {
        e.preventDefault()

        if (!nome.current.value || !email.current.value || !password.current.value) {
            alert("Preencha todos os campos!")
            return
        }

        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: Math.random() * 10000,
                nome: nome.current.value,
                email: email.current.value,
                password: password.current.value
            })
        })

        const data = await response.json()
        console.log(data)

        navigate("/login")
    }

    return (
        <div className={style.background}>
            <div className={style.signupBox}>
                <h1>CADASTRAR</h1>
                <form className={style.signForm}>
                    <input type="text" placeholder="Nome..." className={style.signInput} ref={nome} />
                    <input type="text" placeholder="E-mail..." className={style.signInput} ref={email} />
                    <input type="password" placeholder="Senha..." className={style.signInput} ref={password} />
                    <button type="submit" className={style.formBtn} onClick={handleSignup}>CADASTRAR</button>
                    <p>Já possui conta? <Link to="/login">Entrar</Link></p>
                </form>
            </div>
        </div>
    )
}