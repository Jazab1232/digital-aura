import React from 'react'
import '../styles/detail.css'
import mainImg from '../assets/mainCard.jpg'
import ScrollToTop from './ScrollOnTop'
import { useLocation, useOutletContext } from 'react-router-dom';


export default function Detail() {

    const { blogData, setBlogData } = useOutletContext();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const id = queryParams.get('id');
    const currentBlog = blogData.filter((data) => {
        return data.id == id
    })


    if (currentBlog.length == 0) {
        return <div>
            <p>Loading...</p>
        </div>
    }
    return (
        <div className='detail'>
            <div className="detailBox">
                <div className="detailImg">
                    <img src={currentBlog[0].imageUrl} alt="" />
                </div>
                <div className="detailContent">
                    <div className="detailTitle">
                        <p>Running macOS and Windows 10 on the Same Computer</p>
                    </div>
                    <div className="detailCategory">
                        <p>Tech News</p>
                    </div>
                    <div className="detailText" >
                        <div dangerouslySetInnerHTML={{ __html: currentBlog.length > 0 ? currentBlog[0].content : '' }}></div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}
