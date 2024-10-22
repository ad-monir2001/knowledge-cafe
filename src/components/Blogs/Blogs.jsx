import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark, handleReadingTime}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      
      {
        blogs.map(blog => <Blog 
            key={blog.id} 
            blog={blog}
            handleAddBookmark={handleAddBookmark}
            handleReadingTime = {handleReadingTime}
            ></Blog>)
      }
    </div>
  );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func,
    handleReadingTime : PropTypes.func
}


export default Blogs;
