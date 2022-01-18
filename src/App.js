import {Route, Routes} from "react-router-dom";

import Layout from "./pages/Layout"
import Users from "./pages/Users"
import UserPosts from "./pages/UserPosts"
import Comments from "./pages/Comments"
import UserDetails from "./pages/UserDetails";
import Posts from "./pages/Posts/Posts"
import PostsDetails from "./pages/Posts/PostsDetails";

import './App.css';

function App() {
    return (

        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="users" element={<Users/>}>
                    <Route path=":id" element={<UserDetails/>}>
                        <Route path="posts" element={<UserPosts/>}/>
                    </Route>
                </Route>
                <Route path="posts" element={<Posts/>}>
                    <Route path=":id" element={<PostsDetails/>}>
                        <Route path="comments" element={<Comments/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
