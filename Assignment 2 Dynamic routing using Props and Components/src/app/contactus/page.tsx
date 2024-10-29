import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home()
{
  return(
    <>
    
    <Header/>

    <Navbar/>
    
    <div style={{display:"flex", flexDirection:"column", minHeight: "100vh", flex: 1}}>
      <h2 className="text-red-200 text-center text-6xl font-bold" style={{ fontFamily: "monospace"}}>
        Contact Us
      </h2>

      <p className="text-teal-800 text-center font-bold mx-6 my-6">
        You are free to contact us on our email address countries_around_the_world@gmail.com
      </p>
    </div>
    <Footer />
    </>
  )
} 