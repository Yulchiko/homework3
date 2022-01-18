import {Link, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className="App">
            <div className="Menu">
                <ul className="Ul">
                    <ol>
                        <Link to="/users">USERS</Link> &nbsp;
                        <Link to="/posts">POSTS</Link>
                    </ol>
                </ul>
            </div>
            <Outlet/>
        </div>
    )
}

