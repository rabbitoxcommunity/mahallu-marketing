import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
