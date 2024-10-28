import Navbar from "../component/Navbar"

export default function Home()
{
  return(
    <>
    <h1 className="text-teal-800 text-center text-8xl font-bold my-6" style={{ fontFamily: "fantasy" }}> 
      Countries Around the World
    </h1>

    <Navbar/>
    
    <h2 className="text-red-200 text-center text-6xl font-bold" style={{ fontFamily: "monospace"}}>
      Contact Us
    </h2>

    <p className="text-teal-800 text-center font-bold mx-6 my-6">
      You are free to contact us on our email address countries_around_the_world@gmail.com
    </p>

    </>
  )
} 