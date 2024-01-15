import { useLoaderData } from "react-router-dom"

const posts = JSON.parse(localStorage.getItem("posts")) ?? []

function Post() {
    const post = useLoaderData()
    console.log(post)

    return (
        <>
            <p>{post.title}</p>
            <p>{post.text}</p>
        </>
    )
}

export default Post

export const loaderPost = ({params}) => {
    let foundPost = ""
    posts.forEach((post) => {
        if (post.id === parseInt(params.id)) {
            foundPost = post
        }
    })
    return foundPost
}