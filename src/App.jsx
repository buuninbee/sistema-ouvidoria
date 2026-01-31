
import logoOuv from "./assets/logo-ouv.svg"
import izaHome from "./assets/iza-home.png"
import { NavLink } from "react-router"
import DialogOrientacoes from "./componentes/DialogoOrientacoes"
import TextAreahome from "./componentes/TextArea"
import { Button } from "./components/ui/button"
import { ChevronRight } from "lucide-react"

function App() {

  return (
    <>
      <main className="px-7">
        <section className="grid justify-center items-center-safe">
          <div className="grid pb-7 justify-center">
            <img src={logoOuv} alt="Logo da ouvidoria do GDF" srcset="" />
          </div>

          <div className="grid gap-1.5 pb-6 text-[#012247]">
            <h1 className="text-2xl font-semibold">Olá, eu sou Iza e vou te ajudar no seu relato</h1>
            <p className="text-lg">Para que tudo ocorra bem é importante que seu relato seja sobre um tema por vez e bem detalhado.</p>
            <span className="text-sm italic">Você poderá também anexar documentos, fotos ou vídeos que me ajudem a resolver sua demanda.</span>
          </div>

          <div className="grid justify-end pb-6">
            <img className="" src={izaHome} alt="Iza sorrindo olhando para cima" />
          </div>

          <div className="grid justify-start pb-6">
          <DialogOrientacoes/>
          </div>

          <form className="grid gap-4 place-items-end items-end pb-6">
            <TextAreahome/>
            <NavLink to="/resumo" className="flex items-center text-white py-2 px-4 rounded-lg max-w-max bg-[#0B8B42]"> Avançar <ChevronRight/> </NavLink>
          </form>

        </section>
      </main>
    </>
  )
}

export default App
