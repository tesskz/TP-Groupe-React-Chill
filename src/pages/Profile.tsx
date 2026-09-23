import { useSelector } from "react-redux";
import "./Profile.css";
import type { RootState } from "../store/store";

function Profile() {
    const user = useSelector((state: RootState) => state.auth.loggedUser);

    if (!user) {
        return <p>Utilisateur non connecté.</p>;
    }

    let hidePassword = "";

    if (user.password) {
        for (let i = 0; i < user.password.length; i++) {
            hidePassword += "*";
        }
    }

    return (
        <main className="profile">
            <div className="profile-info">
                <img
                    src={user.image}
                    alt={user.username}
                    className="profile-image"
                />
                <section>
                    <h2>Informations personnelles</h2>
                    <p><strong>ID :</strong> {user.id}</p>
                    <p><strong>Prénom :</strong> {user.firstName}</p>
                    <p><strong>Nom :</strong> {user.lastName}</p>
                    <p><strong>Pseudo :</strong> {user.username}</p>
                    <p><strong>Email :</strong> {user.email}</p>
                    <p><strong>Téléphone :</strong> {user.phone}</p>
                    <p><strong>Âge :</strong> {user.age} ans</p>
                    <p><strong>Genre :</strong> {user.gender}</p>
                    <p><strong>Date de naissance :</strong> {user.birthDate}</p>
                    <p><strong>Rôle :</strong> {user.role}</p>
                    <p><strong>Mot de passe :</strong> {hidePassword}</p>
                </section>

                <section>
                    <h2>Adresse</h2>
                    <p><strong>Adresse :</strong> {user.address?.address}</p>
                    <p><strong>Ville :</strong> {user.address?.city}</p>
                    <p><strong>Pays :</strong> {user.address?.country}</p>
                    <p><strong>Code postal :</strong> {user.address?.postalCode}</p>
                </section>

                <section>
                    <h2>Entreprise</h2>
                    <p><strong>Nom :</strong> {user.company?.name}</p>
                    <p><strong>Département :</strong> {user.company?.department}</p>
                    <p><strong>Poste :</strong> {user.company?.title}</p>
                </section>

                <section>
                    <h2>Informations supplémentaires</h2>
                    <p><strong>Groupe sanguin :</strong> {user.bloodGroup}</p>
                    <p><strong>Taille :</strong> {user.height} cm</p>
                    <p><strong>Poids :</strong> {user.weight} kg</p>
                    <p><strong>Couleur des yeux :</strong> {user.eyeColor}</p>
                    <p><strong>Cheveux :</strong> {user.hair?.color}, {user.hair?.type}</p>
                    <p><strong>Adresse IP :</strong> {user.ip}</p>
                    <p><strong>Université :</strong> {user.university}</p>
                    <p><strong>Adresse MAC :</strong> {user.macAddress}</p>
                    <p><strong>EIN :</strong> {user.ein}</p>
                    <p><strong>SSN :</strong> {user.ssn}</p>
                    <p><strong>Navigateur :</strong> {user.userAgent}</p>
                </section>

                <section>
                    <h2>Banque</h2>
                    <p><strong>Expiration :</strong> {user.bank?.cardExpire}</p>
                    <p><strong>Type de carte :</strong> {user.bank?.cardType}</p>
                    <p><strong>Devise :</strong> {user.bank?.currency}</p>
                    <p><strong>IBAN :</strong> {user.bank?.iban}</p>
                </section>

                <section>
                    <h2>Crypto-monnaie</h2>
                    <p><strong>Monnaie :</strong> {user.crypto?.coin}</p>
                    <p><strong>Portefeuille :</strong> {user.crypto?.wallet}</p>
                    <p><strong>Réseau :</strong> {user.crypto?.network}</p>
                </section>
            </div>
        </main >
    );
}

export default Profile;