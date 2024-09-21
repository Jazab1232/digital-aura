import React from 'react';
import '../styles/categoryPage.css';
import BlogCard from './BlogCard';
import { useLocation, useOutletContext } from 'react-router-dom';

export default function CategoryPage() {
    const { blogData, setBlogData } = useOutletContext();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const category = queryParams.get('category');

    const categoryData = blogData.filter((data) => {
        return data.category == category
    })
    console.log(categoryData);


    if (blogData.length === 0) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className='categoryPage'>
            <h1>Tech News</h1>
            <div className="cardContainer">
                {categoryData.map((data, index) => {
                    return <BlogCard key={index} data={data} />
                })}
            </div>
        </div>
    );
}
