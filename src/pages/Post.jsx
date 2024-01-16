import { Link, useLoaderData } from "react-router-dom"

function Post() {

    const post = useLoaderData()
    
    const responses = post.responses


    return (
        <>
            <p>{post.title}</p>
            <p>{post.text}</p>
            {
                responses.length > 0? (
                    responses.map((response) => (
                        <article key={response.id}>
                            <p>{response.text}</p>
                        </article>
                    ))
                ): (<p className="noResults"></p>)
            }
            <Link to={`/respond/${post.id}`}>Responder</Link>
        </>
    )
}

export default Post

export const loaderPost = ({params}) => {
    const posts = JSON.parse(localStorage.getItem("posts")) ?? []
    let foundPost = ""
    posts.forEach((post) => {
        if (post.id === parseInt(params.id)) {
            foundPost = post
        }
    })
    return foundPost
}