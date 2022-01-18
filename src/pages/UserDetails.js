import React, {useEffect, useState} from "react";
import {Link, Outlet, useParams} from "react-router-dom";

import ApiService from "../Services/api.service";

const userApiService = new ApiService('users')

export default function UserDetails() {
    const {id} = useParams();

    const [user, setUser] = useState(null)
    useEffect(() => {
        userApiService.getSingleData(id).then(user => {
            setUser(user);
        })
    }, [id]);

    return <>
        <div>
            <h3>details about user</h3>
            {JSON.stringify(user)}
            <Link to="posts">
                <button>users posts</button>
            </Link>
        </div>
        <Outlet/>
    </>;
}