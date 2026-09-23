function NotFound() {
    return (
        <main className="error">
            <h1>404</h1>

            <h2>Page introuvable</h2>

            <p>
                Désolée, la page que vous recherchez n'existe pas.
            </p>

            <a href="/">
                Retour à l'accueil
            </a>
        </main>
    )
}

export default NotFound