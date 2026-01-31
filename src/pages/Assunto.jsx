import logoOuv from "@/assets/logo-ouv.svg"
import izaAssunto from "@/assets/iza-assunto.png"
import { NavLink } from "react-router"
import { Search } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { ChevronLeft } from "lucide-react"
import { Megaphone } from "lucide-react"

const Assunto = () => {
  return (
    <main className="px-7">
    <section className="grid justify-center items-center-safe">
      <div className="grid pb-7 justify-center">
        <img src={logoOuv} alt="Logo da ouvidoria do GDF" srcset="" />
      </div>

      <nav aria-label="Breadcrumb">
        <ol class="flex justify-center *:text-lg items-center pb-7 gap-1 text-sm text-gray-700">
          <li>
            <p class="block font-bold transition-colors hover:text-gray-900"> Assunto </p>
          </li>

          <li class="rtl:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </li>

          <li>
            <p class="block transition-colors hover:text-gray-900"> Resumo </p>
          </li>

          <li class="rtl:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </li>

          <li>
            <p class="block transition-colors hover:text-gray-900"> Identificação </p>
          </li>

          <li class="rtl:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </li>

          <li>
            <p class="block transition-colors hover:text-gray-900"> Anexos </p>
          </li>
        </ol>
      </nav>

      <div>
        <div className="grid gap-1.5 pb-6 text-[#012247]">
          <div className="flex items-center gap-3">
            <Megaphone />
            <h1 className="text-2xl font-semibold">Agradecemos pela informação</h1>
          </div>
          <p className="text-lg">Não foi possível sugerir um assunto para seu relato. Por favor, escolha um assunto a partir da pesquisa</p>
        </div>

        <div className='flex gap-2 px-2 py-1.5 items-center border rounded-lg'>
          <Search/>
          <input className='bg-[--terciario-400] w-full text-base appearance-none focus:outline-0' type="text" placeholder='Digite mińimo 4 caracteres para a pesquisa' name="" id="" />
        </div>
      </div>

      <div className="grid justify-end py-6 ">
        <img  src={izaAssunto} alt="Iza com uma lupa no rosto" />
      </div>

      <div className="grid justify-start pb-6">
      </div>
      <div className="flex items-center justify-between">
        <NavLink to="/" className="flex items-center text-white py-2 px-4 rounded-lg max-w-max bg-[#012247]"><ChevronLeft/> Voltar</NavLink>
        <NavLink to="/resumo" className="flex items-center text-white py-2 px-4 rounded-lg max-w-max bg-[#0B8B42]"> Avançar <ChevronRight/> </NavLink>
      </div>
        

    </section>
    </main>
  )
}

export default Assunto