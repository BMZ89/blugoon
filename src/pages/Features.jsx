import { FaChartArea, FaCheckSquare, FaQuestionCircle } from "react-icons/fa";
import { MdSupport } from "react-icons/md";
import FeaturesCards from "../components/FeaturesCards";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-intro">
        <h2 className="text-white text-4xl font-bold mt-20 mb-10">
          Greatest Features
        </h2>
        <hr className="font-bold w-3/6 h-1" />
        <p className="mt-4 mb-4 text-white font-normal">
          Praesent posuere fringilla elit, non maximus tellus posuere nec. Nunc
          eu sapien nec est elementum sodales.
        </p>
      </div>
      <div className="features-cards-container flex flex-row gap-2 mb-2">
        <div className="basis-1/2">
          <FeaturesCards
            cardTitle="Top Performance"
            cardDescription="Donec sit amet tempor quam. Maecenas nec aliquam leo, sed tincidunt urna."
          >
            <div className="">
              <FaChartArea />
            </div>
          </FeaturesCards>
        </div>
        <div className="basis-1/2">
          <FeaturesCards
            cardTitle="Trusted Service"
            cardDescription="Etiam at porta nulla, et euismod enim. Nullam semper ipsum et duiscelerisque."
          >
            <FaCheckSquare />
          </FeaturesCards>
        </div>
      </div>
      <div className="features-cards-container flex flex-row gap-2">
        <div className="basis-1/2">
          <FeaturesCards
            cardTitle="Need Help?"
            cardDescription="Phasellus orci leo, elementum ac risus id, euismod porta lorem. Quisque feugiat."
          >
            <FaQuestionCircle />
          </FeaturesCards>
        </div>
        <div className="basis-1/2">
          <FeaturesCards
            cardTitle="Quick Support"
            cardDescription="Mauris eu est vitae erat condimentum pellentesque. Fusce vehicula nunc."
          >
            <MdSupport />
          </FeaturesCards>
        </div>
      </div>
    </div>
  );
};

export default Features;
