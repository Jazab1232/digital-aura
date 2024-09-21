import React from 'react'
import '../styles/trendingCard.css'
import mainImg from '../assets/mainCard.jpg'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollOnTop'

export default function TrendingCard({data}) {

    return (

        <Link to={`/detail?id=${data.id}`} className='mainCard'>
            <div className="mainCardImg">
                <img src={data.imageUrl} alt="" />
            </div>
            <div className="TrendCardContent">
                <div className="TrendCardTitle">
                    <p>{data.title}</p>
                </div>

            </div>
            <ScrollToTop />
        </Link>
    )
}
