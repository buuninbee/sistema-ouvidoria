import logoOuv from "@/assets/logo-ouv.svg"
import { NavLink } from "react-router"
import { ChevronRight } from "lucide-react"
import { ChevronLeft } from "lucide-react"
import { Newspaper } from "lucide-react"
import { PhoneCall } from "lucide-react"

const Resumo = () => {
  return (
    <>
      <main className="px-7">
        <section className="grid justify-center items-center-safe">
          <div className="grid pb-7 justify-center">
            <img src={logoOuv} alt="Logo da ouvidoria do GDF" srcset="" />
          </div>

          <nav aria-label="Breadcrumb">
            <ol class="flex justify-center *:text-lg items-center pb-7 gap-1 text-sm text-gray-700">
              <li>
                <p class="block transition-colors hover:text-gray-900"> Assunto </p>
              </li>

              <li class="rtl:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
              </li>

              <li>
                <p class="block font-bold transition-colors hover:text-gray-900"> Resumo </p>
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
                <Newspaper />
                <h1 className="text-2xl font-semibold">Confirme os dados do seu registro</h1>
              </div>
              <p className="text-lg">Não foi possível sugerir um assunto para seu relato. Por favor, escolha um assunto a partir da pesquisa</p>
            </div>

            <div className="grid gap-3.5 pb-9">
              <div className="grid gap-1 text-[#012247]">
                <h2 className="font-medium text-xl">Seu registro:</h2>
                <p>Quero denunciar a falta de luz nas entre quadras da asa norte</p>
              </div>

              <div className="grid gap-1 text-[#012247]">
                <h2 className="font-medium text-xl">Assunto:</h2>
                <p>Fiscalização de falta de iluminação</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 text-white rounded-lg items-center bg-[#F5A524] py-3 px-4">
            <PhoneCall/>
            <p>Se você não conseguir fazer o seu registro, ligue na Central 162.</p>
          </div>

          <div className="grid justify-start pb-6">
          </div>
          <div className="flex items-center justify-between">
            <NavLink to="/assunto" className="flex items-center text-white py-2 px-4 rounded-lg max-w-max bg-[#012247]"><ChevronLeft/> Voltar</NavLink>
            <NavLink to="/identificacao" className="flex items-center text-white py-2 px-4 rounded-lg max-w-max bg-[#0B8B42]"> Avançar <ChevronRight/> </NavLink>
          </div>
            

        </section>
      </main>
    </>
  )
}

export default Resumo