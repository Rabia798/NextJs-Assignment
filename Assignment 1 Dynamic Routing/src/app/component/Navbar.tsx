import Link from "next/link"

export default function Page() {
    return (
        <div className="text-blue-950 text-center text-2xl mt-4">
        <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/aboutus">About us</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/contactus">Contact us</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/country">Country</Link>
        </div>
    )
}