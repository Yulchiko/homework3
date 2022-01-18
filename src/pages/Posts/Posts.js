import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import ApiService from "../../Services/api.service";
import PostsComponents from "../../Components/PostsComponents";
import  "./Posts.css"

export default function Posts() {
    let apiService = new ApiService('posts')
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        apiService.getAllData()
            .then(value => setPosts(value));
    }, []);

    return (
        <div className="PostCom">
            <div className="Posts"> <Outlet/></div>
            <div className="Post"> {
                posts.map(post => <PostsComponents key={post.id} post={post}/>)
            }</div>
        </div>
    );
}