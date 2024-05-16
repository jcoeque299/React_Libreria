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
    }, [])

    

    return (
        <>
            {user? <><p>{user.name}</p><p>{user.email}</p></>: null}
        </>
    )
}

export default User