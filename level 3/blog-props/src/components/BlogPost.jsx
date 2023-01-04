import React from "react"

export default function BlogPost(props) {
    return (
    <div className="blog-preview">
        <a href="#">
            <h2 className="blog-title">{props.blog.title}</h2>
            <h3 className="blog-subtitle">{props.blog.subTitle}</h3>
        </a>
        <p className="blog-meta">
            posted by 
            <a href="#">{props.blog.author}</a>
            on {props.blog.date}.
        </p>
    </div>
    )
}