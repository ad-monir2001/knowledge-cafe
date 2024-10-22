import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddBookmark, handleReadingTime}) => {

    const {title,cover,author_img,author,posted_date,hash_tag,reading_time} = blog
    return (
        <div className='space-y-4 my-10'>
            <img className='rounded-lg' src={cover} alt="cover_photo" />
            <div className='flex justify-between items-center'>

                {/* author details */}
                <div className='flex items-center gap-4'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className='font-bold text-xl'>{author}</h2>
                        <p className='font-semibold text-base text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                {/* reading time */}
                <div className='flex items-center gap-2'>
                    <h3 className='font-medium text-xl text-gray-500'>{reading_time} min read</h3>
                    <button onClick={()=>handleAddBookmark(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h1 className='font-bold text-3xl'>{title}</h1>    
            <p className='font-medium text-xl text-gray-500'>{hash_tag}</p>
            <button className='text-[#6047EC] font-semibold text-xl underline' onClick={()=>handleReadingTime(reading_time)}>Mark as Read</button>         
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}


export default Blog;