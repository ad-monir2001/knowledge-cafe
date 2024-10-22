
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="h-1/3 bg-gray-200  mx-5 my-10 rounded-lg p-2 ">
            <h2 className='text-3xl'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark
                     key={bookmark.id}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.obj
}

export default Bookmarks;