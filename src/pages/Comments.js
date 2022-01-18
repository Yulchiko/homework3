import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import ApiService from "../Services/api.service";
import CommentsComponent from "../Components/CommentsComponent";


export default function UserPosts() {
    let apiService = new ApiService('comments');
    const {id: postId} = useParams();
    let [comments, setComments] = useState([]);

    useEffect(() => {
        apiService.getUserComments(postId).then(comments => setComments(comments));
    }, [postId]);

    return (
        <div>
            <h4>Comments</h4>
            {
                comments.map(comments => <CommentsComponent key={comments.id} comments={comments}/>)
            }
        </div>
    );
}