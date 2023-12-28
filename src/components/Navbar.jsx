import trollface from "../images/trollface.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navHeader">
        <img src={trollface} alt="trollface" className="navLogo" />
        <h1>Meme Generator</h1>
      </div>
      <span>React Course - Project 3</span>
    </div>
  );
}
