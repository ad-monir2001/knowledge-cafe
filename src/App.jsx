import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleReadingTime = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)

  };

  return (
    <>
      <Header></Header>
      <main className="flex container mx-auto py-5 px-4">
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleReadingTime={handleReadingTime}

        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
