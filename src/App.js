import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';

function App() {
  const PostData = [
    {
        id: 1,
        slug: "post-slug",
        content: `Here HTML Content`,
    },

    {
      id: 2,
      slug: "post-slug2",
      content: `Here HTML Content`,
  },
  {
    id: 3,
    slug: "post-slug3",
    content: `Here HTML Content`,
}

]
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home title={PostData} />} ></Route>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/post/:id" element={<Post post={PostData} />} ></Route>
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
