import Navbar from "../component/Navbar"

function about() {
  return(
    <>
      <h1 className="text-teal-800 text-center text-8xl font-bold my-6" style={{ fontFamily: "fantasy" }}> 
        Countries Around the World
      </h1>

      <Navbar/>

      <h2 className="text-red-200 text-center text-6xl font-bold" style={{ fontFamily: "monospace"}}>
        About Us
      </h2>

      <p className="text-teal-800 text-center font-bold mx-6 my-6">
        This is a website dedicated to providing information regarding various countries
      </p>
    </>
  )
} 
export default about