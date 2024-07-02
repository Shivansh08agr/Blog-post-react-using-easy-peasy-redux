import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route } from "react-router-dom";
import {useEffect} from 'react'
import useAxiosFetch from "../Hooks/useAxiosFetch";
import {useStoreActions} from 'easy-peasy';

function App() {

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');
  const setPosts = useStoreActions(actions=> actions.setPosts);

    useEffect(() => {
      setPosts(data);
    }, [data, setPosts])

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home fetchError = {fetchError} isLoading = {isLoading}/>} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="edit/:id" element={<EditPost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  );
}

export default App;
