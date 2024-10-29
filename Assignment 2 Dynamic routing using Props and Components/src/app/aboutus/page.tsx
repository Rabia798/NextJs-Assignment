import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



function about() {
  return (
    <>
      <Header />

      <Navbar />
      <div style={{display:"flex", flexDirection:"column", minHeight: "100vh", flex: 1}}>
        <h2
          className="text-red-200 text-center text-6xl font-bold"
          style={{ fontFamily: "monospace" }}
        >
          About Us
        </h2>

        <p className="text-teal-800 text-center font-bold mx-6 my-6">
          This is a website dedicated to providing information regarding various
          countries
        </p>
     </div>

      <Footer />
      
    </>
    
  );
}
export default about;
