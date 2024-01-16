import { useLoaderData } from "react-router-dom"
import ResponseForm from "../components/ResponseForm"

function Respond() {

    const postID = useLoaderData()

    return (
        <>
            <h2>Responder post</h2>
            <ResponseForm postID={postID}/>
        </>
    )
}

export default Respond

export const loaderResponse = ({params}) => {
    return params.id
}