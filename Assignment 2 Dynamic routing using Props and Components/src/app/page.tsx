import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Homepage() {
  return (
    <>
      <Header />

      <Navbar />
      <div style={{display:"flex", flexDirection:"column", minHeight: "100vh", flex: 1}}>
        <h2
          className="text-red-200 text-center text-6xl font-bold"
          style={{ fontFamily: "monospace",}}>
          Home
        </h2>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="/image2.jpeg" width="1000px" height="1000px"></img>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Homepage;
