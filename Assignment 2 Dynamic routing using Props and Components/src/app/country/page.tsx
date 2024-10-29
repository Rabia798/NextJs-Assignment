import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function ListOfCountries() {
    return (
        <>
         <Header/>
         <Navbar/>
          <div style={{display:"flex", flexDirection:"column", minHeight: "100vh", flex: 1}}>
            <h2 className="text-red-200 text-center text-6xl font-bold" style={{ fontFamily: "monospace"}}>List of Countries</h2>
            
            <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/Pakistan">Pakistan</Link></li>
            <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/Russia">Russia</Link></li>
            <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/Sweden">Sweden</Link></li>
            <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/China">China</Link></li>
            <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/Japan">Japan</Link></li>
            <li className="mx-10 text-2xl text-blue-950" style={{ fontFamily:"fantasy" }}><Link href="/country/South_Korea">South Korea</Link></li>
          </div>
        <Footer/>
        </>
    
    )
}