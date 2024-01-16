import { Link } from "react-router-dom"

function Forum() {

    let posts = JSON.parse(localStorage.getItem("posts")) ?? []

    return (
        <>
            <section className="post-list">
                <Link to={"/publish"}>Crear nuevo post</Link>
                {
                    posts.length > 0? (
                        posts.map((post) => (
                            <article key={post.id} className="post-list-post">
                                <Link to={`/post/${post.id}`}>{post.title}</Link>
                                <p>{`${new Date(post.id).getDate()}/${new Date(post.id).getMonth()+1}/${new Date(post.id).getFullYear()}`}</p>
                            </article>
                        ))
                    ): (<p className="noResults"></p>)
                }
            </section>
        </>
    )
}

export default Forum