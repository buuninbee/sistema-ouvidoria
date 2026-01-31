import logoOuv from "@/assets/logo-ouv.svg"
import { NavLink } from "react-router"
import { Paperclip } from "lucide-react"
import InputArquivo from "@/componentes/InputArquivo"

const Anexo = () => {
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
            <p class="block transition-colors hover:text-gray-900"> Identificação </p>
          </li>

          <li class="rtl:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </li>

          <li>
            <p class="block transition-colors font-bold  hover:text-gray-900"> Anexos </p>
          </li>
        </ol>
      </nav>

      <div>
        <div className="grid gap-1.5 pb-6 text-[#012247]">
          <div className="flex items-center gap-3">
            <Paperclip />
            <h1 className="text-2xl font-semibold">Anexos</h1>
          </div>
          <p className="text-lg">Aqui é o lugar para anexar documentos, fotos ou vídeos que me ajudem a resolver sua demanda.</p>
        </div>


      </div>

      <div className="pb-6">
        <InputArquivo/>
      </div>

      <div className="grid gap-1 pb-6 text-[#012247]">
        <h2 className="font-medium text-xl">Atenção:</h2>
        <p>A partir desta etapa você não pode mais alterar seu texto. Se quiser incluir novas informações, finalize este registro, consulte o número do protocolo gerado clicando em “Meus Registros” e preencha o campo "informações complementares". Esse procedimento será possível somente se o registro não tiver recebido resposta definitiva pelo órgão/entidade responsável dentro do prazo legal.</p>
      </div>

      <div className="grid items-centers pb-6 gap-3 *:text-center">
        <NavLink to="/protocolo" className=" text-white py-2 px-4 rounded-lg bg-[#0B8B42]">Finalizar</NavLink>
      </div>
    </section>
    </main>
  )
}

export default Anexo