import Navbar from "../component/Navbar"
import Link from "next/link"



function ListOfCountries()
{
  return (
    <>
   <h1 className="text-teal-800 text-center text-8xl font-bold my-6" style={{ fontFamily: "fantasy" }}> Countries Around the World</h1>

   <Navbar/>

   <h2 className="text-red-200 text-center text-6xl font-bold" style={{ fontFamily: "monospace"}}>List of Countries</h2>

    <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/Pakistan">Pakistan</Link></li>
    <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/Russia">Russia</Link></li>
    <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/Sweden">Sweden</Link></li>
    <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/China">China</Link></li>
    <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/Japan">Japan</Link></li>
    <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/South_Korea">South Korea</Link></li>
    </>
  )
} 
export default ListOfCountries                                    