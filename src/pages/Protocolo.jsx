import logoOuv from "@/assets/logo-ouv.svg"
import izaProtocolo from "@/assets/iza-protocolo.png"
import { NavLink } from "react-router"


const Protocolo = () => {
  return (
    <main className="px-7">
    <section className="grid justify-center items-center-safe">
      <div className="grid pb-7 justify-center">
        <img src={logoOuv} alt="Logo da ouvidoria do GDF" srcset="" />
      </div>

      <div>
        <div className="grid gap-1.5 pb-6 text-[#012247]">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">Obrigado, Agradecemos seu contato</h1>
          </div>
          <p className="text-lg">O registro foi realizado com sucesso.</p>
        </div>
      </div>

      <div className="grid justify-end py-6 ">
        <img  src={izaProtocolo} alt="Iza oferecendo o protocolo" />
      </div>

      <div className="grid gap-2.5 text-[#012247]">
        <div className="flex items-center gap-1.5">
          <h3 className="font-bold text-xl">Número da ouvidoria:</h3>
          <p>OUV-025938/2026</p>
        </div>

        <div className="flex items-center gap-1.5">
          <h3 className="font-bold text-xl">Data que foi feita a ouvidoria:</h3>
          <p>27/01/2026 23:10:07</p>
        </div>

        <div className="flex items-center gap-1.5">
          <h3 className="font-bold text-xl">Prazo de resposta:</h3>
          <p>19/02/2026</p>
        </div>
      </div>

      <div className="grid items-centers py-6 gap-3 *:text-center">
        <NavLink to="/" className="text-white py-2 px-4 rounded-lg bg-[#012247]">Imprimir</NavLink>
        <NavLink to="/" className=" text-white py-2 px-4 rounded-lg bg-[#0B8B42]">Voltar ao início</NavLink>
      </div>
        

    </section>
    </main>
  )
}

export default Protocolo