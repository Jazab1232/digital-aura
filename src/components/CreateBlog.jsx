import React, { useEffect, useState } from 'react';
import '../styles/createBlog.css';
import { Editor } from '@tinymce/tinymce-react';
import ScrollToTop from './ScrollOnTop';
import { firestore, storage } from './config/config';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useNavigate, useOutletContext } from 'react-router-dom';

export default function App() {
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null); // Ensure it's initialized as an array
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const { blogData, setBlogData } = useOutletContext();

    const navigate = useNavigate();

    useEffect(() => {
        setProgress(0);
    }, [image]);

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(firestore, "blogData", "blogData");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const fetchedData = docSnap.data().blogData || [];
                setBlogData(fetchedData); 
            } else {
                console.log("No such document!");
            }
        };

        fetchData();
    }, []);

    const handleSave = async () => {
        if (!image) return;

        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.error("Upload error:", error);
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setUrl(downloadURL);
                console.log("File available at:", downloadURL);

                const newBlog = {
                    content,
                    category,
                    title,
                    id: crypto.randomUUID(),
                    imageUrl: downloadURL,
                };

                const updatedBlogData = [...blogData, newBlog]; // Create a new array with the new blog
                setBlogData(updatedBlogData); // Update the blogData state

                try {
                    await setDoc(doc(firestore, "blogData", 'blogData'), { blogData: updatedBlogData });
                    alert('Editor content saved');
                } catch (error) {
                    console.error('Error saving blog data:', error);
                    alert('Failed to save blog data');
                }
            }
        );
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSelectChange = (e) => {
        setCategory(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const goBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className='createBlog'>
            <div style={{ marginTop: "20px" }}>
                <i className="fa-solid fa-arrow-left" onClick={goBack}></i>
                <h1 style={{ textAlign: 'center' }}>Create Your Blog</h1>
            </div>

            {image && (
                <div style={{ textAlign: 'center' }}>
                    <h3>Selected Image Preview:</h3>
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Selected"
                        style={{ width: '60%', height: 'auto', marginTop: '10px' }}
                    />
                </div>
            )}

            <div style={{
                width: `${progress}%`,
                height: '20px',
                backgroundColor: progress === 100 ? 'green' : 'blue',
                transition: 'width 0.3s ease',
            }}>
                {progress > 0 && <p style={{ textAlign: 'center' }}>{progress}%</p>}
            </div>

            <div className='blogInputs' style={{ textAlign: 'center' }}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <input type="text" value={title} onChange={handleTitleChange} placeholder='Enter blog title' />
                <select name="category" id="category" value={category} onChange={handleSelectChange}>
                    <option value="">--Select a category--</option>
                    <option value="programming">Programming</option>
                    <option value="gadgets">Gadgets</option>
                    <option value="trends">Trends</option>
                    <option value="techNews">Tech News</option>
                </select>
            </div>

            <Editor
                apiKey='24oaivpa1zr4ml2v1eibef6iliv16fww5kojtx5njped0hya'
                init={{
                    plugins: [
                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                        'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'mentions', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
                    ],
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                }}
                onEditorChange={(newContent) => setContent(newContent)}
            />

            <button onClick={handleSave} className='saveBtn'>
                Save Content
            </button>

            <div style={{ marginTop: '20px' }}>
                <h3>Preview:</h3>
                <div style={{ marginBottom: '100px' }} dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <ScrollToTop />
        </div>
    );
}
