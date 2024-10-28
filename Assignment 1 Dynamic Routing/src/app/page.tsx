import Navbar from "./component/Navbar";

function Homepage() {
  return (
    <>
      <h1
        className="text-teal-800 text-center text-8xl font-bold my-6"
        style={{ fontFamily: "fantasy" }}
      >
        Countries Around the World
      </h1>

      <Navbar />

      <h2
        className="text-red-200 text-center text-6xl font-bold"
        style={{ fontFamily: "monospace" }}
      >
        Home
      </h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/image2.jpg" width="1000px" height="1000px"></img>
      </div>
    </>
  );
}
export default Homepage;
