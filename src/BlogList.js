import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const getFirst30Words = (text) => {
    return text.split(" ").slice(0, 60).join(" ");
  };

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
                <div className="blog-description">
                      <img className="blog-image-thumbnail" src={blog.img} alt={blog.title} />
                  <div className="right-cell">
                  <p>{getFirst30Words(blog.body)}...</p>
                  </div>
                </div>

            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
