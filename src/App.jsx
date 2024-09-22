import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from './components/config/config';
import SideNav from './components/SideNav';
import SearchTab from './components/SearchTab';

function App() {

  const [blogData, setBlogData] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [search, setSearch] = useState('');
  console.log(search);


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

  return (
    <>
      <Header showNav={showNav} setShowNav={setShowNav} search={search} setSearch={setSearch} />

      <SideNav showNav={showNav} setShowNav={setShowNav} />
      <SearchTab search={search} setSearch={setSearch} blogData={blogData} />
      <Outlet context={{ blogData, setBlogData, search, setSearch }} />
      <Footer />

    </>
  )
}

export default App
