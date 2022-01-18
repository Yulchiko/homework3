import {Link} from "react-router-dom";

import "./UserComponent.css"

export default function UserComponent({user}) {
    const {id, name} = user;

    return (
        <div className="User">
            {id} - {name}
            <Link to={id.toString()} state={user}> details</Link>
        </div>
    )
}