import "./App.css";
import Reviews from "./Component/Reviews";

function App() {
  return (
    <>
      <section>
        <header className="header">
          <h1 className="title">reviews</h1>
          <div className="underline"></div>
        </header>
      </section>
      <main className="card">
        <Reviews />
      </main>
    </>
  );
}

export default App;
