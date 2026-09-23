import {useLocation} from "react-router-dom";
import "./Profile.css";
import NotFound from "./NotFound.tsx";

function Profile() {
    const location = useLocation();
    let hidePassword = "";
    const user = location.state

    if (user) {
        for (let i = 0; i < user.password.length; i++) {
            hidePassword += "*";
        }
    }

    if (!user) {

        return (<NotFound />);

    } else {

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
                        <p>
                            <strong>ID :</strong> {user.id}
                        </p>

                        <p>
                            <strong>Prénom :</strong> {user.firstName}
                        </p>

                        <p>
                            <strong>Nom :</strong> {user.lastName}
                        </p>

                        <p>
                            <strong>Username :</strong> {user.username}
                        </p>

                        <p>
                            <strong>Email :</strong> {user.email}
                        </p>

                        <p>
                            <strong>Password :</strong> {hidePassword}
                        </p>

                        <p>
                            <strong>Téléphone :</strong> {user.phone}
                        </p>

                        <p>
                            <strong>Âge :</strong> {user.age} ans
                        </p>

                        <p>
                            <strong>Genre :</strong> {user.gender}
                        </p>

                        <p>
                            <strong>Date de naissance :</strong> {user.birthDate}
                        </p>

                        <p>
                            <strong>Rôle :</strong> {user.role}
                        </p>

                        <h2>Adresse</h2>

                        <p>
                            <strong>Adresse :</strong> {user.address.address}
                        </p>

                        <p>
                            <strong>Ville :</strong> {user.address.city}
                        </p>

                        <p>
                            <strong>Code postal :</strong> {user.address.postalCode}
                        </p>

                        <p>
                            <strong>Pays :</strong> {user.address.country}
                        </p>

                        <h2>Entreprise</h2>

                        <p>
                            <strong>Nom :</strong> {user.company.name}
                        </p>

                        <p>
                            <strong>Département :</strong> {user.company.department}
                        </p>

                        <p>
                            <strong>Poste :</strong> {user.company.title}
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Profile;
