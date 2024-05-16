import { UserContext } from "../layouts/LayoutPublic"
import { useContext, useState } from "react"
import { useEffect } from "react"

function User() {

    const [user, setUser] = useContext(UserContext)

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        if (user) {
            setProfile({
                name: user.name,
                email: user.email,
            })
        }
        else {
            getUserData()
        }
    }, [])

    const getUserData = async() => {
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
    }

    return (
        <>
            {user? <><p>{user.name}</p><p>{user.email}</p></>: null}
        </>
    )
}

export default User