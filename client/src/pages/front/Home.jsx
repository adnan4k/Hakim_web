import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import LatestPost from "../../components/LatestPost";
import PopularPost from "../../components/PopularPost";
import Advertisment from "../../components/Advertisment";
import Podcas from "../../components/Podcas";
import Subscription from "../../components/Subscription";
import Footer from "../../components/Footer";
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);  return (
    <div>
      <Navbar />
      <Hero data-aos="fade-down" />
      <section className="featured bg-center bg-bottom bg-no-repeat flex flex-col items-center ">
        <style jsx>{`
          .featured {
            background-image: url("/images/ef.png"), url("/images/ef2.png");
            background-position: center buttom;
          }
        `}</style>
        <div className="bg-[url('/images/ef2.png')] bg-no-repeat  bg-left-top mt-24" data-aos="fade-down">
          <div className="bg-[url('/images/ef2.png')] bg-no-repeat bg-right-bottom  ">
          <h2 className="text-center text-5xl font-extrabold">Feature post</h2>
          <p className="text-2xl text-center my-5">
            I want to talk about the hard stuff people wonder about but maybe
            are embarrassed...
          </p>
          <p className="text-2xl my-">
            I want to talk about the hard stuff are embarrassed...
          </p>
          </div>
        </div>
      </section>

      <div id="post">
        <LatestPost />
      </div>
      <div ><PopularPost /></div>
      <div id="ads">
        <Advertisment />
      </div>
      <div id="podcast">
        <Podcas />
      </div>
      <div id="#subs">
        <Subscription />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
