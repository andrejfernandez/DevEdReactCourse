import styled from "styled-components";
import { About } from "../Styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How did you start out?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              facilis adipisci sed tenetur aperiam velit!
            </p>
          </div>
        </Toggle>
        <Toggle title="What us your daily schedule?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              facilis adipisci sed tenetur aperiam velit!
            </p>
          </div>
        </Toggle>
        <Toggle title="What are acceptable payment methods?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              facilis adipisci sed tenetur aperiam velit!
            </p>
          </div>
        </Toggle>
        <Toggle title="What gear do you use?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              facilis adipisci sed tenetur aperiam velit!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #23d997;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
