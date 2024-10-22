import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="h-1/3 bg-gray-200  mx-5 my-10 rounded-lg p-2 ">
      <h1>Reading Time: {readingTime}</h1>
      <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.obj,
  readingTime: PropTypes.number,
};

export default Bookmarks;
