import React from 'react'
import '../styles/home.css'
import MainCard from './MainCard'
import TrendingCard from './TrendingCard'
import BlogCard from './BlogCard'
import ScrollToTop from './ScrollOnTop'
import { useOutletContext } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";

export default function Home() {
  const { blogData, setBlogData } = useOutletContext();

  const recentPost = blogData.slice(-3)
  const trendingPost = blogData.slice(1, 4)
  const mainPost = blogData.slice(1, 2)

  if (blogData.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <BeatLoader color="#214252" size={30} />
      </div>
    );
  }

  return (
    <div className='home'>
      <div className="mainSection">
        <div className="mainCard">
          {mainPost.map((data, i) => {

            return <MainCard data={data} key={i} />
          })}
        </div>
        <div className="TrendingBlog">
          <p className='trendingTitle'>Trending Blogs</p>
          {trendingPost.map((data, i) => {
            return <TrendingCard data={data} key={i} />
          })}
        </div>
      </div>
      <div className="recentBlogs">
        <h1>Recent Post</h1>
        <div className='recentBlogBox'>
          {recentPost.map((data, index) => {
            return <BlogCard key={index} data={data} />
          })}
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
