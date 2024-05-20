import { UserContext } from "../layouts/LayoutPublic"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function User() {

    const [user, setUser] = useContext(UserContext)

    const [friends, setFriends] = useState("")

    const [profile, setProfile] = useState("")

    useEffect(() => {
        if (user) {
            setProfile({
                name: user.name,
                email: user.email,
            })
            getUserData()
        }
    }, [])

    const getUserData = async() => {
        const userData = await fetch("http://localhost:8000/api/user", {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }})
            const userResponse = await userData.json()
            setUser({
                id: userResponse.id,
                name: userResponse.name,
                email: userResponse.email
        })
        getFriendsData()
    }

    const getFriendsData = async() => {
        const friendsData = await fetch("http://localhost:8000/api/friends", {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }})
            const friendsResponse = await friendsData.json()
            console.log(friendsResponse)
            setFriends(friendsResponse)
    }

    const removeFriend = async(userName) => {
        const data = await fetch(`http://localhost:8000/api/friends/${userName}`, {
            method: "delete",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }
        })
        getFriendsData()
    }

    const acceptRequest = async(userName) => {
        const data = await fetch(`http://localhost:8000/api/friends/${userName}`, {
            method: "put",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }
        })
        getFriendsData()
    }

    return (
        <><section className="post-info">
            <article className="post">
                {user? <><h2>Nickname</h2><p>{user.name}</p><h2>Email</h2><p>{user.email}</p></>: null}
                <h2>Amigos</h2>
                <>{
                    friends.length > 0? (
                            friends.map((friend) => (
                                friend.accepted?
                                <article key={friend.parentName === user.name? friend.childName : friend.parentName}>
                                    <h3>{friend.parentName === user.name? friend.childName : friend.parentName}</h3>
                                    <Link to={`/profile/${friend.parentName === user.name? friend.childName : friend.parentName}`}>Ver perfil</Link>
                                    <button onClick={() => removeFriend(friend.parentName === user.name? friend.childName : friend.parentName)}>Eliminar amigo</button>
                                </article>
                            :null))
                        ): (<p className="noResultsProfile">No hay amistades</p>)
                }</>
            </article>
            <article className="post">
                <h2>Solicitudes de amistad</h2>
                <>{friends.length > 0? (
                            friends.map((friend) => (
                                !friend.accepted?
                                <article key={friend.parentName === user.name? friend.childName : friend.parentName}>
                                    <h3>{friend.parentName === user.name? friend.childName : friend.parentName}</h3>
                                    <Link to={`/profile/${friend.parentName === user.name? friend.childName : friend.parentName}`}>Ver perfil</Link>
                                    <button onClick={() => acceptRequest(friend.parentName === user.name? friend.childName : friend.parentName)}>Aceptar solicitud</button>
                                    <button onClick={() => removeFriend(friend.parentName === user.name? friend.childName : friend.parentName)}>Eliminar amigo</button>
                                </article>
                            :null))
                        ): (<p className="noResultsProfile">No hay solicitudes de amistad</p>)}
                </>
            </article>
            
        </section></>
            
    )
}

export default User