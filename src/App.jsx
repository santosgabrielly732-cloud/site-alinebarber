import Header from './components/Header'
import Hero from './components/Hero'
import { About, Services, Gallery, Instagram, Booking, Contact, Footer, MobileBar } from './components/Sections'
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero /><About /><Services /><Gallery /><Instagram /><Booking /><Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
