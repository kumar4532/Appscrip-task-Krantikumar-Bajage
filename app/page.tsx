import NavTabs from "@/components/NavTabs/NavTabs"
import "./page.css"
import Navbar from '@/components/Navbar/Navbar'
import Discover from "@/components/DiscoverSection/Discover"
import Footer from "@/components/Footer/Footer"
import Products from "@/components/Product/Products"

const page = () => {
  return (
    <main className="page">
      <div className="content">
        <div className="container">
          <Navbar />
          <NavTabs />
        </div>

        <hr className="divider" />

        <div className="discovery_container">
          <Discover />
        </div>

        <div className="product_list">
          <Products />
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default page