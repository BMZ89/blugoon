import img1 from "../assets/images/woman-beach.jpg";
import img2 from "../assets/images/escalator-blue.jpg";
import img3 from "../assets/images/woman-chair-sunshine.jpg";
import img4 from "../assets/images/woman-bikini.jpg";
import img5 from "../assets/images/woman-feeling.jpg";
import img6 from "../assets/images/woman-pretty.jpg";
import { BsSearch } from "react-icons/bs";

const Gallery = () => {
  return (
    <div className="text-white">
      <h2 className="text-white text-4xl font-bold mt-20 mb-10">Gallery</h2>
      <hr className="font-bold w-3/6 h-1" />

      <p className="mt-20 mb-4 text-white font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam,
        architecto deserunt consectetur quo itaque repudiandae? Nostrum,
        pariatur voluptate? Saepe rem suscipit dignissimos quo accusamus
        repellat beatae nihil deserunt laborum!
      </p>
      <div>
        {/* add filters here */}
        <div className="grid grid-cols-3 gap-3">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="row-span-2">
              <img src={img1} alt="" />
            </div>
            <div class="group-hover:from-black/70 group-hover:via-black/60 group-hover:to-white "></div>
            <div class="absolute  inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Girl one
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                woman at the beach.
              </p>
              <div class="rounded-full py-2 px-3.5 font-com text-sm capitalize bg-blue-800 text-white shadow shadow-black/60">
                <BsSearch />
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="">
              <img src={img3} alt="" srcset="" />
            </div>
            <div class="group-hover:from-black/70 group-hover:via-black/60 group-hover:to-white ">
              <div class="absolute  inset-0 flex translate-y-[60%] flex-col items-center justify-start text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Sexy lady
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  there you go sexy girl
                </p>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="row-span-2">
              <img src={img6} alt="" srcset="" />
            </div>
            <div class="group-hover:from-black/70 group-hover:via-black/60 group-hover:to-white "></div>
            <div class="absolute  inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Pretty girl
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                red flowers white girl
              </p>
              <div class="rounded-full py-2 px-3.5 font-com text-sm capitalize bg-blue-800 text-white shadow shadow-black/60">
                <BsSearch />
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="">
              <img src={img5} alt="" srcset="" />
            </div>
            <div class="group-hover:from-black/70 group-hover:via-black/60 group-hover:to-white "></div>
            <div class="absolute  inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Pretty girl
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                red flowers white girl
              </p>
              <div class="rounded-full py-2 px-3.5 font-com text-sm capitalize bg-blue-800 text-white shadow shadow-black/60">
                <BsSearch />
              </div>
            </div>
          </div>

          <div className="row-span-2 ">
            <img src={img2} alt="" srcset="" />
          </div>

          <div className="">
            <img src={img4} alt="" srcset="" />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Gallery;
