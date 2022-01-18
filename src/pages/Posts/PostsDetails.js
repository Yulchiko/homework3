import React, {useEffect, useState} from "react";
import {Link, Outlet, useParams} from "react-router-dom";

import ApiService from "../../Services/api.service";

const userApiService = new ApiService('posts')

export default function PostsDetails() {
    const {id} = useParams();

    const [post, setPost] = useState(null)
    useEffect(() => {
        userApiService.getSingleData(id).then(post => {
            setPost(post);
        })
    }, [id]);

    return <>
        <div>
            <h3>details about post</h3>
            {JSON.stringify(post)}
            <Link to="comments">
                <button>users comments</button>
            </Link>
        </div>
        <Outlet/>
    </>;
}