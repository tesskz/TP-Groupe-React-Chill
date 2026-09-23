import { useParams } from "react-router-dom";
import data from "../users.json";
import NotFound from "./NotFound.tsx";
import "./UserDetail.css";

function UserDetail() {
    const { id } = useParams();
    const user = data.users.find(
        (user) => user.id === Number(id)
    );

    if (!user) {
        return(<NotFound />);
    } else {

        return (
            <main className="user-profile">
                <div className="user-profile-card">
                    <img
                        src={user.image}
                        alt={user.username}
                        className="user-profile-image"
                    />

                    <h1>{user.username}</h1>
                </div>
            </main>
        );
    }
}

export default UserDetail;

