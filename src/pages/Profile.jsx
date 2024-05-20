import { Link, useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react"

function Profile() {

    const profileData = useLoaderData()

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        if (profileData.response.message) {
            setShowButton(true)
        }
    }, [])

    const sendFriendRequest = async(paramsData) => {
        const data = await fetch(`http://localhost:8000/api/friends/${paramsData}`, {
            method: "post",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            },
        })}

    return (
        <>
        <section className="post-info">
            <article className="post">
                <p>{profileData.response.message ? <>{profileData.response.message}</>: <>{profileData.response.name}</>}</p>
                {showButton ? <button className="friendRequest" onClick={() => sendFriendRequest(profileData.params)}>Enviar solicitud de amistad</button> : null}
                <Link to={`/sendmessage/${profileData.params}`}>Enviar mensaje</Link>
            </article>
        </section>
        </>
    )
}

export default Profile

export const loaderProfile = async({params}) => {
    const data = await fetch(`http://localhost:8000/api/profile/${params.userName}`, {
            method: "get",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            }
    })
    const response = await data.json()
    if (response.statusCode === 403) {
        return {response: response, params: params.userName}
    }
    else {
        return {response: response, params: params.userName}
    }
    
}