import { useNavigate } from "react-router-dom"
import { UserContext } from "../layouts/LayoutPublic"
import { useContext, useState } from "react"

function Login() {

    const navigate = useNavigate()

    const [user, setUser] = useContext(UserContext)

    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
    })

    const login = async(e) => {
        e.preventDefault()
        const data = await fetch('http://localhost:8000/api/login', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: newUser.email,
                password: newUser.password,
            })
        })
        const response = await data.json()
        if (response.statusCode === 200) {
            sessionStorage.setItem("token", response.token)
            const data = await fetch("http://localhost:8000/api/user", {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }})
            const responseA = await data.json()
            console.log(responseA)
            setUser({
                id: responseA.id,
                name: responseA.name,
                email: responseA.email
            })
            navigate("/user")
        }
    }

    const handleChange = e => {
        const {name, type, value} = e.target
        setNewUser({
            ...newUser,
            [name]:type === "text" , [name]:type === "password"? value:value
        })
    }

    return (
        <>
            <>
            <h2>Iniciar sesion</h2>
            <form onSubmit={login} className="form">
                <fieldset>
                    <input 
                        name="email"
                        placeholder="Introduce email"
                        value={newUser.email}
                        type="text"
                        onChange={handleChange}
                    ></input>
                </fieldset>
                <fieldset>
                    <input 
                        name="password"
                        placeholder="Introduce contraseña"
                        value={newUser.password}
                        type="password"
                        onChange={handleChange}
                    ></input>
                </fieldset>
                <fieldset>
                    <button
                        type="submit"
                    >Log in</button>
                </fieldset>              
            </form>
        </>
        </>
    )
}

export default Login