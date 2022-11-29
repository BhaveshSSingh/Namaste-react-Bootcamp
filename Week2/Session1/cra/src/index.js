import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
// import App from "./App";

// const heading = React.createElement("div", { id: "title" }, [
//   React.createElement("h1", { id: "heading" }, "Namaste Javascript Bootcamp"),
//   React.createElement("h2", {}, "from zero to hero"),
//   React.createElement("h3", {}, "in 3 months"),
// ]);

// const heading2 = (
//   <div id="title">
//     <h1 id="heading">Namaste JS Bootcamp</h1>
//     <h2>from zero to hero</h2>
//     <h3>in 3 months</h3>
//   </div>
// );

// const TitleComponent = () => {
//   return (
//     <div>
//       <h1>Namaste JS Bootcamp</h1>
//     </div>
//   );
// };
// const TitleComponent = (
//   <div>
//     <h1>Namaste JS Bootcamp</h1>
//   </div>
// );

// function Heading3() {
//   return (
//     <div id="title">
//       <TitleComponent />
//       <h2>from zero to hero</h2>
//       <h3>in 3 months</h3>
//     </div>
//   );
// }

function Header() {
  return (
    <div className="header">
      <div>
        <IoFastFoodOutline size={40} />
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search your next grub..."
          className="search"
        />
      </div>
      <FaRegUserCircle size={40} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
