import Footer from "@/components/Footer";
import Lower from "@/components/Lower";
import Navbar from "@/components/Navbar";
import Recent from "@/components/Recent";
import Upcoming from "@/components/Upcoming";
 
export default function Home() {
  return (
    <>
      <Navbar/>
      <Recent/>
      <Upcoming/>
      <Lower/>
      <Footer/>
    </>
  )
}
