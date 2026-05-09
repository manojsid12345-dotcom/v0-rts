import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  )
}
