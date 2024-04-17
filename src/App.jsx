import Nav from "./components/Nav";
import Hero from "./section/Hero";
import About from "./section/About";

function App() {
  return (
    <>
      <main className="relative">
        <section className="w-full ">
          <Nav />
        </section>
        <section className="w-full  ">
          <Hero />
        </section>
        <section className="w-full  ">
          <About />
        </section>
      </main>
    </>
  );
}

export default App;
