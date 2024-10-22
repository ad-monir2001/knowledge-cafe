import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header';

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }




  return (
    <>
      <Header></Header>
      <main className='flex container mx-auto py-5 px-4'>
        <Blogs handleAddBookmark= {handleAddBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
