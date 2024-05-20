import { Link, useLoaderData } from "react-router-dom"

function Forum() {

    //let posts = JSON.parse(localStorage.getItem("posts")) ?? []
    
    const posts = useLoaderData()

    return (
        <>
            <section className="post-list">
                <Link to={"/publish"}>Crear nuevo post</Link>
                {
                    posts.length > 0? (
                        posts.map((post) => (
                            <article key={post.id} className="post-list-post">
                                <Link to={`/post/${post.id}`}><h3>{post.name}</h3></Link> 
                               <p>{post.title}</p>  
                            </article>
                        ))
                    ): (<p className="noPosts">Sin posts</p>)
                }
            </section>
        </>
    )
}

export const loaderForum = async() => {
    const data = await fetch(`http://localhost:8000/api/posts`, {
          method: "get",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          },
    })
    const response = await data.json()
    console.log(response)
    return response
}

export default Forum