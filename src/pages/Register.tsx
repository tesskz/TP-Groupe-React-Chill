import { useState, type FormEvent } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = (event: FormEvent) => {
        event.preventDefault();

        console.log({
            username,
            password,
            email,
        });
    };

    return (
        <main>
            <h1>Inscription</h1>

            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username">
                        Nom d'utilisateur
                    </label>

                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Mot de passe
                    </label>

                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>

                <button type="submit">
                    S'inscrire
                </button>
            </form>
        </main>
    );
}

export default Register;