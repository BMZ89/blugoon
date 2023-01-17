import img1 from "../assets/images/aerobic-girls.jpg";
import img2 from "../assets/images/mountain-reflection.jpg";
import img3 from "../assets/images/girl-nature.jpg";

import Section from "../components/Section";
const Home = () => {
  return (
    <div className="">
      <img className="mx-auto" src={img1} alt="Aerobic" />
      <header className="mb-4">
        <div>
          <h2 className="text-white text-4xl font-bold mt-4 mb-4">
            Introducing Blugoon
          </h2>
          <hr className="font-bold w-3/6 h-1 " />
          <div>
            <p className="mt-4 text-white">
              Blugoon is free HTML template for everyone. This is a Bootstrap
              v4.3.1 layout which you can fully customize for your websites.
              Please tell your friends about Tooplate. Thank you.
            </p>
          </div>
        </div>
      </header>
      {/* second */}

      {/* <Section button="Read More" img={img2} title="Modern Web Design">
          <p>
            You are allowed to use this template for commercial or personal
            websites. You are NOT allowed to redistribute this on template
            collection website. You can feature this template on your blog post.
          </p>
          <p>
            All photos in this template are from Pexels website. Blugoon HTML
            Template is provided by Tooplate. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra.
          </p>
        </Section> */}

      <div className="right-image-post">
        <div className="flex flex-row">
          <div className="basis-3/4">
            <div className="left-text">
              <h4 className="text-white text-4xl font-semibold mt-4 mb-4">
                Modern Web Design
              </h4>
              <div className="flex flex-row">
                <div className="basis-3/4">
                  <p className="text-white my-2  py-2">
                    You are allowed to use this template for commercial or
                    personal websites. xtrablog You are NOT allowed to
                    redistribute this on template collection website. You can
                    feature this template on your blog post.
                  </p>
                  <p className="text-white my-2 py-2">
                    All photos in this template are from Pexels website. Blugoon
                    HTML Template is provided by Tooplate. page Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra.
                  </p>
                  <button className="font-semibold uppercase flex mx-0 text-cyan-600	hover:delay-150 bg-white border-0 py-2 px-4 focus:outline-none hover:bg-sky-600 hover:text-white text-lg">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <img src={img2} alt="rock pictute" />
          </div>
        </div>
      </div>
      <hr className="bg-gray my-2" />

      <div className="right-image-post">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <img src={img3} alt="rock pictute" />
          </div>
          <div className="basis-3/4 ml-8">
            <div className="left-text">
              <h4 className="text-white text-4xl font-semibold mt-4 mb-4">
                Best Template for you!
              </h4>
              <div className="flex flex-row">
                <div className="basis-4/4 ">
                  <p className="text-white my-2  py-2">
                    You are allowed to use this template for commercial or
                    personal websites. xtrablog You are NOT allowed to
                    redistribute this on template collection website. You can
                    feature this template on your blog post.
                  </p>
                  <p className="text-white my-2 py-2">
                    All photos in this template are from Pexels website. Blugoon
                    HTML Template is provided by Tooplate. page Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra.
                  </p>
                  <button className="font-semibold uppercase flex mx-0 text-cyan-600	hover:delay-150 bg-white border-0 py-2 px-4 focus:outline-none hover:bg-sky-600 hover:text-white text-lg">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
