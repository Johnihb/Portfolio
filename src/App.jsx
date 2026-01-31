import { Dock, Navbar, Welcome } from "#components"
import Safari from "#windows/Safari"
import Terminal from "#windows/Terminal"


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
    </main>
  )
}

export default App