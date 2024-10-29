import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Feedback()
{
  return(
    <>
    <Header />

    <Navbar/>
    <div style={{display:"flex", flexDirection:"column", minHeight: "100vh", flex: 1}}>
      <h2 className="text-red-200 text-center text-6xl font-bold" style={{ fontFamily: "monospace"}}>
        Feedback 
      </h2>

      <p className="text-teal-800 text-center font-bold mx-6 my-6">
        Please provide feedback on our email address countries_around_the_world@gmail.com
      </p>
    </div>
    <Footer />
    </>
  )
} 