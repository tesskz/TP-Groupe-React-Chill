import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import NotFound from "./NotFound.tsx";
import "./UserDetail.css";

function UserDetail() {
    const { id } = useParams();
    const users = useSelector((state: RootState) => state.user.users);
    const user = users.find(
        (user) => user.id === Number(id)
    );git add -A && git commit -m "Members:profil-annuaire-et-fiche-membre-depuis-le-store" && git push -u origin feature/members

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

