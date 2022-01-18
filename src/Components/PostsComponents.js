import {Link} from "react-router-dom";

import "./PostsComp.css"

export default function PostsComponent({post}) {
    const {id, title} = post;

    return (
        <div className="Post_id">
            {id} - {title}
            <Link to={id.toString()} state={post}> details</Link>
        </div>
    )
}