import { Link } from "react-router-dom"

function Forum() {

    let posts = JSON.parse(localStorage.getItem("posts")) ?? []

    return (
        <>
            <Link to={"/publish"}>Crear nuevo post</Link>
            {
                posts.length > 0? (
                    posts.map((post) => (
                        <article key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                        </article>
                    ))
                ): (<p className="noResults"></p>)
            }
        </>
    )
}

export default Forum