import React from 'react'
import '../styles/blogCard.css'
import { Link } from 'react-router-dom'

export default function BlogCard({ data }) {
    const shortenText = (htmlContent, limit) => {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = htmlContent;
        const textContent = tempElement.textContent || tempElement.innerText || "";
        const shortened = textContent.split(" ").slice(0, limit).join(" ");
        return shortened + "...";
    };

    return (
        <Link to={`/detail?id=${data.id}`} className='blogCard'>
            <div className="blogImg">
                <img src={data.imageUrl} alt="" />
            </div>
            <div className="blogCartContent">
                <div className="cardCategory">
                    <p>{data.category}</p>
                </div>
                <div className="cardTitle">
                    <p>{data.title}</p>
                </div>
                <div className="cardText">
                    <p>{shortenText(data.content, 18)}</p>
                </div>
            </div>
        </Link>
    )
}
