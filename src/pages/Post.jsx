import { Link, useLoaderData } from "react-router-dom"

function Post() {

    const post = useLoaderData()
    
    const responses = post.responses

    return (
        <>
            <section className="post-info">
                <article className="post">
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                    <Link to={`/respond/${post.id}`}>Responder</Link>
                </article>
                {
                    responses.length > 0? (
                        responses.map((response) => (
                            <article className="response">
                                <p>{response.text}</p>
                                </article>
                        ))
                    ): (<p className="noResults"></p>)
                }           
            </section>
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