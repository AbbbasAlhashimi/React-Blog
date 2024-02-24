import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
  const [title,setTitle] = useState('');
  const [img,setImg] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('');
  const [isPending,setIsPending] = useState(false); //check the status of the adding process
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {title,img,body,author};
    setIsPending(true);
    //Perform API Fetch and convert strings to JSON Type
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=> {
      console.log('new blog added')
      setIsPending(false);

    //history.go(-1); Go back to the last page
    history.push('/');
    });
  }

    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog Title: </label>
            <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}>
            </input>

            <label>Blog Image URL: </label>
            <input
            type="text"
            required
            value={img}
            onChange={(e) => setImg(e.target.value)}>
            </input>

          <label>Blog Body: </label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}>
            </textarea>


            <label>Blog Author: </label>
            <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}>
            </input>


              {!isPending && <button>Add Blog</button>}
              {isPending && <button disabled>Adding ..</button>}

        </form>

        <p>{title}</p>
        <p>{img}</p>
        <p>{body}</p>
        <p>{author}</p>
      </div>
    );
  }

  export default Create;