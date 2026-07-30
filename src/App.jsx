import { Dock, Navbar, Welcome } from "#components"
import Contact from "#windows/Contact"
import Finder from "#windows/finder"
import Home from "#windows/Home"
import Image from "#windows/Image"
import Photo from "#windows/Photo"
import Resume from "#windows/Resume"
import Safari from "#windows/Safari"
import Terminal from "#windows/Terminal"
import Text from "#windows/Text"


import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(Draggable)


const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photo />
    </main>
  )
}

export default App