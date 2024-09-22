import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import '../styles/dashboard.css'
import { doc, setDoc } from 'firebase/firestore';
import { auth, firestore } from './config/config';
import { useAuth } from './auth/AuthContext';
import { signOut } from 'firebase/auth';

function Dashboard() {
    const { blogData, setBlogData } = useOutletContext();
    const { setIsAuthenticated, isAuthenticated } = useAuth();

    function handleLogout() {
        signOut(auth)
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                console.error('Error during logout:', error);
            });
    }
    async function handleDelete(id) {
        const filterData = blogData.filter((data) => {
            return data.id != id
        })
        try {
            await setDoc(doc(firestore, "blogData", 'blogData'), { blogData: filterData });
            setBlogData(filterData)
            alert('Blog deleted Succesfully');

        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('Failed to delete blog data');
        }

    }
    return (
        <div className="dashboardContainer">
            <div className="dashboardHeader">
                <div className="profileSection">
                    <img
                        className="profileImage"
                        src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'}
                        alt="profile"
                    />
                </div>
                <div className="profileDetails">
                    <h1 className="profileName">Jazab Ahmad</h1>
                    <h2 className="profileRole">Software Developer</h2>
                    <h2 className="profileBlogsCount">
                        <span>Total Blog: </span> {blogData.length}
                    </h2>
                    <div className="actionButtons">

                        <div className="buttonContainer">
                            {isAuthenticated ?
                                <Link to={'/createblog'} className="button createBlogButton">
                                    Create Blog
                                </Link>
                                :
                                <Link to={'/login'} className="button createBlogButton">
                                    Login
                                </Link>
                            }
                        </div>

                        <div className="buttonContainer">
                            {isAuthenticated
                                ? <button className="button logoutButton" onClick={handleLogout}>
                                    Logout
                                </button>
                                : ''
                            }
                        </div>
                    </div>
                </div>
            </div>

            <hr className="separatorLine" />

            <div className="blogTableContainer">
                <div className="tableWrapper">
                    {isAuthenticated && (
                        <table className="blogTable">
                            <thead className="tableHeader">
                                <tr>
                                    <th className="tableHeading">S.No</th>
                                    <th className="tableHeading">Thumbnail</th>
                                    <th className="tableHeading">Title</th>
                                    <th className="tableHeading">Category</th>
                                    <th className="tableHeading">Date</th>
                                    <th className="tableHeading">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogData.map((data, i) => {
                                    return <tr className="tableRow" key={i}>
                                        <td className="tableData">{i + 1}.</td>
                                        <td className="tableData">
                                            <img
                                                className="thumbnailImage"
                                                src={data.imageUrl}
                                                alt="thumbnail"
                                            />
                                        </td>
                                        <td className="tableData">{data.title}</td>
                                        <td className="tableData">{data.category}</td>
                                        <td className="tableData">sep 20, 2024</td>
                                        <td className="tableData">
                                            <button className="deleteButton" onClick={() => { handleDelete(data.id) }}>Delete</button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
