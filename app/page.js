import Hero from "./components/Hero";
import Contact from "./components/Contact";
import AboutCmp from "./components/About";
import FAQs from "./components/FAQs";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="md:px-4">
        <div className="container m-auto px-4 md:px-0">
          <div className="headingh text-3xl font-bold mt-8 text-zinc-700 text-center">
            Who are we
          </div>
        </div>
      </div>

      <AboutCmp />

      <div className="md:px-4 mt-16">
        <div className="container m-auto px-4 md:px-0">
          <div className="headingh text-2xl font-bold mt-8 text-zinc-700 text-center">
            Frequently asked questions
          </div>
        </div>
      </div>

      <FAQs page={"home"} />

      <div className="md:px-4 mt-16">
        <div className="container m-auto px-4 md:px-0">
          <div className="headingh text-2xl font-bold mt-8 text-zinc-700 text-center">
            Want to Become Volenteer Contact Us!
          </div>
        </div>
      </div>

      <Contact requestMethod={"donate"} />
    </>
  );
}
