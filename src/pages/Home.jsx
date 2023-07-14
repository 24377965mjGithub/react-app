import axios from 'axios';
import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home(props) {

    let [storage, storageState] = useState(JSON.parse(localStorage.getItem('SampleJSON')));
    let [postdata, postdataState] = useState(props.title);

    if (!storage) {
        storage =[];
    }

    function getBackend() {
        axios.get('./api/sample.php').then(res => {
            console.log(res.data);
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getBackend();
    })

  return (
    <div className="Home">
            {
                storage ?
                    storage.map(item => {
                        return (
                            <p key={item.id}>{item.name}</p>
                        )
                    }) : <p>Data Not Found</p>
            }

            {
                postdata ?
                    postdata.map(post => {
                        return (
                            <div key={post.id}>
                                <p>{post.slug}</p>
                                <Link to={`/post/${post.id}`}>
                                    <button>Go</button>
                                </Link>
                            </div>
                        )
                    }) : <p>Data Not Found</p>
            }

            <a href='/about'>
                <button>Go to about</button>
            </a>
        
    </div>
  );
}

export default Home;