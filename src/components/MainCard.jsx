import React from 'react'
import '../styles/mainCard.css'
import mainImg from '../assets/mainCard.jpg'
import { Link } from 'react-router-dom'

export default function MainCard({ data }) {
    return (
        <Link to={`/detail?id=${data.id}`} className='mainCard'>
            <div className="mainCardImg">
                <img src={data.imageUrl} alt="" />
            </div>
            <div className="mainCardContent">
                <div className="category">
                    <p>{data.category}</p>
                </div>
                <div className="title">
                    <p>{data.title}</p>
                </div>
                <div className="publishDetail">
                    <p> <i className="fa-solid fa-user"></i>Jazab</p>
                    <p><i className="fa-regular fa-calendar-days"></i>17 July</p>
                </div>
                <div className="mainCardText">
                    <p>Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque
                        nibh amet, massa egestas risus, gravida vel amet, imperdiet ...</p>
                </div>
            </div>
        </Link>
    )
}
