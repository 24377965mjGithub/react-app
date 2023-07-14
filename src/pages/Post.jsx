import '../App.css';
import { useParams } from 'react-router-dom';

function Post(props) {

    const { id } = useParams();
    const currentPost = props.post.find((post) => post.id ==  id);

  return (
    <div className="About">
        <h1>{currentPost.slug}</h1>
        <a href='/'>
                <button>Go to home</button>
            </a>
    </div>
  );
}

export default Post;