import logoOuv from "@/assets/logo-ouv.svg"
import { NavLink } from "react-router"
import { ShieldUser } from "lucide-react"
import { Info } from "lucide-react"

const Identificacao = () => {
  return (
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
            <p class="block transition-colors hover:text-gray-900"> Resumo </p>
          </li>

          <li class="rtl:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </li>

          <li>
            <p class="block transition-colors font-bold  hover:text-gray-900"> Identificação </p>
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
            <ShieldUser />
            <h1 className="text-2xl font-semibold">Identificação</h1>
          </div>
          <p className="text-lg">Esse registro pode ser feito de <span className="font-bold"> forma anônima</span>. Porém ao escolher o anonimato <span className="font-bold"> você não poderá acompanhar o andamento da sua manifestação</span>.</p>
        </div>

        <div className="flex gap-3 text-white rounded-lg items-center bg-[#F5A524] py-3 px-4">
            <Info className="w-20"/>
            <p>Sugiro que se identifique realizando o acesso ou cadastro. Suas informações estarão seguras.</p>
          </div>
      </div>

      <div className="grid items-centers py-6 gap-3 *:text-center">
        <NavLink to="/anexo" className="text-white py-2 px-4 rounded-lg bg-[#012247]">Avançar sem identificação</NavLink>
        <NavLink to="/login" className=" text-white py-2 px-4 rounded-lg bg-[#0B8B42]">Prefiro me identificar</NavLink>
      </div>
        
        <div>
          <a className="underline text-[#012247]" target="_blank" href="https://www.sinj.df.gov.br/sinj/Norma/c87d4625386745569ef03028e6c79397/Instru_o_Normativa_1_05_05_2017.html">Base legal Art.14 da Instrução Normativa CGDF Nº 01 de 05/05/2017</a>
        </div>

    </section>
    </main>
  )
}

export default Identificacao