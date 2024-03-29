import React from "react"
import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Faq from "./pages/help/Faq"
import Contact from "./pages/help/Contact"
import NotFound from "./pages/NotFound"

// layouts
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path="" element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path="services" element={<Services />}/>
    <Route path="help" element={<HelpLayout />}>
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
