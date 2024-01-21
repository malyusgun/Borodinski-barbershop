import Advantages from "@/components/Advantages"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Mainblock from "@/components/Mainblock"
import News from "@/components/News"
import Reviews from "@/components/Reviews"
import Statistics from "@/components/Statistic"

export default function Main() {
  return (
    <>
      <Header />
      <main>
        <Mainblock/>
        <Statistics/>
        <Advantages/>
        <News />
        <Reviews/>
      </main>
      <Footer />
    </>
  )
}
