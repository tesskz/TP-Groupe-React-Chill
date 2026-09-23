import { useSelector } from "react-redux";
import "./Profile.css";
import type { RootState } from "../store/store";

function Profile() {
    const user = useSelector((state: RootState) => state.auth.loggedUser);

    if (!user) {
        return <p>Utilisateur non connecté.</p>;
    }

    return (
        <main className="profile">
            <div className="profile-card">
                <img
                    src={user.image}
                    alt={user.username}
                    className="profile-image"
                />

                <h1>{user.firstName} {user.lastName}</h1>

                <div className="profile-info">
                    <p><strong>ID :</strong> {user.id}</p>
                    <p><strong>Prénom :</strong> {user.firstName}</p>
                    <p><strong>Nom :</strong> {user.lastName}</p>
                    <p><strong>Username :</strong> {user.username}</p>
                    <p><strong>Email :</strong> {user.email}</p>
                    <p><strong>Téléphone :</strong> {user.phone}</p>
                    <p><strong>Âge :</strong> {user.age} ans</p>
                    <p><strong>Genre :</strong> {user.gender}</p>
                    <p><strong>Date de naissance :</strong> {user.birthDate}</p>
                    <p><strong>Rôle :</strong> {user.role}</p>

                    <h2>Adresse</h2>

                    <p><strong>Adresse :</strong> {user.address?.address}</p>
                    <p><strong>Ville :</strong> {user.address?.city}</p>
                    <p><strong>Code postal :</strong> {user.address?.postalCode}</p>
                    <p><strong>Pays :</strong> {user.address?.country}</p>

                    <h2>Entreprise</h2>

                    <p><strong>Nom :</strong> {user.company?.name}</p>
                    <p><strong>Département :</strong> {user.company?.department}</p>
                    <p><strong>Poste :</strong> {user.company?.title}</p>
                </div>
            </div>
        </main>
    );
}

export default Profile;