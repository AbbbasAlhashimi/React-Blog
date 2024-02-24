import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }


  const handleEditClick = (id) => {
    const url = `/blogs/${id}`;
    history.push(`/edit-blog?url=${encodeURIComponent(url)}`);
  };

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <img className="blog-image" src={blog.img} alt={blog.title} />
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>

          <button onClick={handleDelete} style={{
          color: 'white',
          paddingRight: '10px',
          borderRadius: '8px'
        }}>Delete Blog</button>

          <button onClick={handleEditClick}>Edit Blog</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;