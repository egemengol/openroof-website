import React, { useState } from "react";
import "./AskComponent.css";
import { ArrowRight } from "./Ask/svg/srrow";

const AskComponents = () => {
  const [answer, setAnswer] = useState("one");
  const handleOne = () => {
    setAnswer("one");
  };
  const handleTwo = () => {
    setAnswer("two");
  };
  const handleThere = () => {
    setAnswer("three");
  };
  const handleFour = () => {
    setAnswer("four");
  };
  const handleFive = () => {
    setAnswer("five");
  };
  return (
    <div className="margin">
        <div className="ask-head">
          <p>Sıkça Sorulan Sorular</p>
        </div>
      <div className="askcomponent">
        <div className="ask">
          <div className="ask-all">
            <div className="ask-body">
              <div className="question-box" onClick={handleOne}>
                <div className="question">
                  <div className="question-init">
                    <div className="elipse" />
                    <button>
                      <p className="text-button">What is a Payment Gateway?</p>
                    </button>
                  </div>

                 <div className="arrow-right-img" >
                  <ArrowRight className="arrow-right-svg"></ArrowRight>
                  </div>
                </div>
              </div>
              <div className="question-box" onClick={handleTwo}>
                <div className="question">
                  <div className="question-init">
                    <div className="elipse" />

                    <button>
                      <p className="text-button">
                        Do I need to pay to Instapay even when there is no
                        transaction going on in my business?
                      </p>
                    </button>
                  </div>

                  <div className="arrow-right-img" >
                  <ArrowRight className="arrow-right-svg"></ArrowRight>
                  </div>
                </div>
              </div>
              <div className="question-box" onClick={handleThere}>
                <div className="question">
                  <div className="question-init">
                    <div className="elipse" />

                    <button>
                      <p className="text-button">
                        What platforms does ACME payment gateway support?
                      </p>
                    </button>
                  </div>

                                    <div className="arrow-right-img" >
                  <ArrowRight className="arrow-right-svg"></ArrowRight>
                  </div>
                </div>
              </div>
              <div className="question-box" onClick={handleFour}>
                <div className="question">
                  <div className="question-init">
                    <div className="elipse" />

                    <button>
                      <p className="text-button">
                        Does ACME provide international payments support?
                      </p>
                    </button>
                  </div>

                                    <div className="arrow-right-img" >
                  <ArrowRight className="arrow-right-svg"></ArrowRight>
                  </div>
                </div>
              </div>
              <div className="question-box" onClick={handleFive}>
                <div className="question">
                  <div className="question-init">
                    <div className="elipse" />

                    <button>
                      <p className="text-button">
                        Is there any setup fee or annual maintainance fee that I
                        need to pay regularly?
                      </p>
                    </button>
                  </div>
                                    <div className="arrow-right-img" >
                  <ArrowRight className="arrow-right-svg"></ArrowRight>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="answer">
            {answer === "one" ? (
              <div className="answer-box">
                <p className="answer-box-head">heading 1</p>
                <p className="answer-box-body">text 1</p>
              </div>
            ) : null}
            {answer === "two" ? (
              <div className="answer-box">
                <p className="answer-box-head">
                  Do I need to pay to Instapay even when there is no transaction
                  going on in my business?
                </p>
                <p className="answer-box-body">
                  No, you do not need to pay Instapay where there is no
                  transaction happening. With one of the lowest transaction
                  charges in the industry, pay only when you get paid!
                </p>
              </div>
            ) : null}
            {answer === "three" ? (
              <div className="answer-box">
                <p className="answer-box-head">heading 3</p>
                <p className="answer-box-body">text 3</p>
              </div>
            ) : null}
            {answer === "four" ? (
              <div className="answer-box">
                <p className="answer-box-head">headin 4</p>
                <p className="answer-box-body">text 4</p>
              </div>
            ) : null}
            {answer === "five" ? (
              <div className="answer-box">
                <p className="answer-box-head">heading 5</p>
                <p className="answer-box-body">text 5</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskComponents;
