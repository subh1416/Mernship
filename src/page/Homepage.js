import React, { useEffect, useState } from "react";
import "./homepage.css";
import Header from "../components/header/Header";
import Cards from "../components/cards/Cards";
import Footer from "../components/Footer/Footer";

function Homepage() {
  const [wordIndex, setWordIndex] = useState(0);

  // Define the list of words and their colors
  const wordList = [
    { word: "Hemanshu", color: "#341f97" },
    { word: "Uchit", color: "#00d2d3" },
    { word: "Jatin", color: "#ee5253" },
    { word: "Dhruv", color: "#8395a7" },
    { word: "Kartikey", color: "#ff9f43" },
    { word: "Chirayu", color: "#10ac84" },
    { word: "Subh", color: "#be2edd" },
    // Add more words and colors as desired
  ];

  useEffect(() => {
    // Function to select the next word index
    function selectNextWord() {
      setWordIndex((prevIndex) => (prevIndex + 1) % wordList.length);
    }

    // Call the selectNextWord function every 2 seconds
    const interval = setInterval(selectNextWord, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [wordList.length]); // Include wordList.length as a dependency

  const currentWord = wordList[wordIndex];

  return (
    <div className="homepage">
      <Header />
      <div className="container98374">
        <div className="text97h">
          <h2 className="despaji78">
            <span className="jjdo67">Hello</span>
            <span style={{ color: currentWord.color }} className="abc86">
              {currentWord.word}
            </span>{" "}
            <span className="amet34">ready for project ?</span>
          </h2>
          <p className="lorum45">
            Lorem ipsum dolor sit amet adipisicing elit. Iure neque fugit alias
            tenetur consequatur laborum voluptates repellat magnam animi facere?
          </p>
          <div className="buts">
            <button>Get started</button>
          </div>
        </div>

        <div className="img9746cg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-hlLa1mnf2V1p__dFMxkNjf44wHphOxH2g&usqp=CAU"
            alt=""
          />
        </div>
      </div>

      <div className="container9b53">
        <ul id="cards87n7b5">
          <li className="cardn86" id="card1">
            <div className="card-body89">
              <div className="textvhd">
                <div className="head4bj">
                  <h1 className="khfojh">About Us</h1>

                </div>
                <div className="louoj56">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam ut debitis voluptatibus natus eaque quis exercitationem sit, hic blanditiis iusto odit corporis quidem minus voluptatum consequuntur saepe sunt culpa iure nam tempora doloremque pariatur aliquid autem. Sit tempora, commodi quidem a quo quaerat id?</p>

                </div>
              </div>
              <div className="imgjhj">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="cardn86" id="card2">
            <div className="card-body89">
              <div className="textvhd">
                <div className="head4bj">
                  <h1 className="khfojh">Our Achievements</h1>

                </div>
                <div className="louoj56">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam ut debitis voluptatibus natus eaque quis exercitationem sit, hic blanditiis iusto odit corporis quidem minus voluptatum consequuntur saepe sunt culpa iure nam tempora doloremque pariatur aliquid autem. Sit tempora, commodi quidem a quo quaerat id?</p>

                </div>
              </div>
              <div className="imgjhj">
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/15/21/38/nature-3084841_640.jpg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li className="cardn86" id="card3">
            <div className="card-body89">
              <div className="textvhd">
                <div className="head4bj">
                  <h1 className="khfojh">For you!</h1>

                </div>
                <div className="louoj56">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam ut debitis voluptatibus natus eaque quis exercitationem sit, hic blanditiis iusto odit corporis quidem minus voluptatum consequuntur saepe sunt culpa iure nam tempora doloremque pariatur aliquid autem. Sit tempora, commodi quidem a quo quaerat id?</p>

                </div>
              </div>
              <div className="imgjhj">
                <img
                  src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                  alt=""
                />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="hhdh89nhd">
        <Cards />
      </div>
      <div className="anv">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
