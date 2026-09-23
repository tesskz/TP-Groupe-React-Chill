import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import "./Citation.css"

function Citation() {
  const quote = useSelector((state: RootState) => state.quote.quote);

  return (
    <main className="citation-page">
      <section className="citation-card">
        <h1>La citation du jour</h1>

        {quote ? (
          <>
            <blockquote>« {quote.quote} »</blockquote>
            <p>— {quote.author}</p>
          </>
        ) : (
          <p>Chargement de la citation...</p>
        )}
      </section>
    </main>
  );
}

export default Citation;