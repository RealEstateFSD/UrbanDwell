import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            The perfect place to search for houses that will turn into your homes!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
            <div className = "box">
              <h1>100+</h1>
              <h2>Satisfied Customers!</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
