import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="flex items-center justify-center my-4">
      <h2 className="font-semibold text-lg bg-white rounded-lg p-3">{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object
};

export default Bookmark;
