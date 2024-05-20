import { Link, useLoaderData } from "react-router-dom"

function Post() {

    const post = useLoaderData()

    return (
        <>
            <section className="post-info">
                <article className="post">
                    <Link to={`/profile/${post.name}`} className="post-username"><h2>{post.name}</h2></Link>
                    <h3>{post.title}</h3>
                    <p>{post.text}</p>
                    <Link to={`/respond/${post.id}`}>Responder</Link>
                </article>
                {
                    post.comments.length > 0? (
                        post.comments.map((comment) => (
                            <article className="response" key={comment.id}>
                                <Link to={`/profile/${post.name}`}><h4>{comment.name}</h4></Link>
                                <p>{comment.text}</p>
                                </article>
                        ))
                    ): (<p className="noResults"></p>)
                }           
            </section>
        </>
    )
}

export default Post

export const loaderPost = async({params}) => {
    const postData = await fetch(`http://localhost:8000/api/posts/${params.id}`, {
          method: "get",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
    })
    const postResponse = await postData.json()
    const commentsData = await fetch(`http://localhost:8000/api/comments/${params.id}`, {
          method: "get",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
    })
    const commentsResponse = await commentsData.json()
    const data = {
        id: postResponse.id,
        name: postResponse.name,
        title: postResponse.title,
        text: postResponse.text,
        comments: commentsResponse
    }
    return data
}