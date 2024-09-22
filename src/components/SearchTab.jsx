import React from 'react'
import '../styles/searchTab.css'
import { Link } from 'react-router-dom'

export default function SearchTab({ search, setSearch, blogData }) {
    let searchQuery = search.trim()
    const searchData = blogData.filter((data) => {
        return data.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            data.title.toLowerCase().includes(searchQuery.toLowerCase())
    })
    console.log(searchData);
    function handleSearch() {
        setSearch('')
    }
    return (
        <div className='searchContainer' style={{ display: searchQuery == '' ? 'none' : 'flex' }}>
            <div className='searchTab'  style={{ paddingBottom: '10px' }}>
                {
                    searchData.map((data) => {
                        return (
                            <Link to={`/detail?id=${data.id}`} className='searchLink' key={data.id} onClick={handleSearch} >{data.title}</Link>
                        );
                    })

                }
            </div>
        </div>
    )
}
