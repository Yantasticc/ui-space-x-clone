import Footer from "@/components/Footer";
import Lower from "@/components/Lower";
import Navbar from "@/components/Navbar";
import Recent from "@/components/Recent";
import Upcoming from "@/components/Upcoming";
 
export default function Home() {
  return (
    <>
      <div className="relative h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/section-a.webp")' }}>
        <Navbar/>
        <Recent/>
      </div>

      <div className="relative h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/section-b.webp")' }}>
        <Upcoming/>
      </div>
      <div className="relative h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/section-c.webp")' }}>
        <Lower/>
      </div>
        
      <Footer/>

    </>
  )
}
