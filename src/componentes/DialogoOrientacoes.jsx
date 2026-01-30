import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Info } from 'lucide-react';

function DialogOrientacoes() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex text-sm items-center text-white bg-[#012247]" variant="outline"> <Info className="text-lg" /> Orientações para o seu registro</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ouvidoria</DialogTitle>
          <DialogDescription>
          Orientações para o seu registro
          </DialogDescription>
        </DialogHeader>
        <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
            <div>
            <h2>Proteção ao Denunciante</h2>
            <p>As denúncias registradas no Participa DF são tratadas com sigilo absoluto da identidade do denunciante, conforme determina o art. 23 do Decreto nº 36.462/2015:</p>
            <ul>
                <li>Nenhuma informação pessoal do denunciante pode ser compartilhada;</li>
                <li>O sigilo é obrigatório, mesmo dentro dos órgãos públicos;</li>
                <li>O descumprimento dessas regras pode gerar responsabilização administrativa, civil e penal.</li>
            </ul>
            <p>A proteção também está garantida pela Lei nº 4.896/2012, que institui o SIGO-DF, e pela Lei Geral de Proteção de Dados (LGPD).</p>
            </div>
            <div>
                <h2>Pode confiar: sua segurança é prioridade!</h2>
                <p>- Não escreva seus dados pessoais (nome, CPF, e-mail, endereço, data de nascimento etc.) no texto do seu registro. Essa medida serve para proteger o sigilo dos seus dados.

- Se você quiser tratar sobre assuntos como INSS, aplicativo CONECTA SUS, aplicativo GOV.BR e outros assuntos do Governo Federal, acesse o Sistema Fala BR.

- Quantos registros você deseja realizar? Cada registro deverá conter apenas 1 assunto. Por exemplo, se você quiser solicitar poda de árvore e tapa buraco, precisará fazer 2 registros.</p>
            </div>
            <div>
                <h2>Agora vamos ao passo a passo para o registro:</h2>

            </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogOrientacoes
