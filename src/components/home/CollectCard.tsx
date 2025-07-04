import { IoIosPin } from "react-icons/io";

export const CollectCardPurple = () => {
    return(
        <div className="bg-[#983979] p-2 rounded-xl">
            <div className="bg-green-300 w-full h-[200px] bg-cover bg-center"
                style={{ backgroundImage: 'url(https://smartlap.com.br/wp-content/uploads/2021/10/shutterstock_2033981429-1.jpg)' }}
            ></div>

            <div className="flex flex-col gap-4 text-center mt-4">
                <h4 className="font-bold text-xl">Coleta dos matérais eletrônicos</h4>
                <h5 className="font-bold">O projeto Chico no Clima convida você a contribuir por um Recife mais limpo!</h5>
                <p>Estamos arrecadando materiais eletrônicos como teclados, mouses e outros que você não usa mais e não sabe onde descartar corretamente.</p>
                <p>Esses itens serão reaproveitados nas nossas Oficinas e no Hackathon do projeto. </p>
                <p>O que não for utilizado será doado para organizações que transformam resíduos eletrônicos em arte. </p>
                <h5 className="font-bold">Participe e faça parte dessa corrente de inovação e sustentabilidade!</h5>
                <div className="w-1/2 h-[1px] bg-black mx-auto"></div>
                <h5 className="text-left font-bold">Ponto de arrecadação:</h5>
                <h6 className="text-[#D0A4C1] text-left flex items-center gap-1 pl-3">
                    <IoIosPin className="text-[#D0A4C1]"/>
                    ICT Senac - Rua do Apolo, 235
                </h6>
            </div>
        </div>
    )
}

export const CollectCardGreen = () => {
    return(
        <div className="bg-[#8BD049] p-2 rounded-xl">
            <div className="bg-green-700 w-full h-[200px] bg-cover bg-center"
                style={{ backgroundImage: 'url(https://s5.static.brasilescola.uol.com.br/be/2024/05/tres-pessoas-carregando-caixas-com-materiais-para-reciclagem.jpg)' }}
            ></div>

            <div className="flex flex-col gap-4 text-center mt-4">
                <h4 className="font-bold text-xl">Coleta dos matérais eletrônicos</h4>
                <h5 className="font-bold">O projeto Chico no Clima convida você a contribuir por um Recife mais limpo!</h5>
                <p>Estamos arrecadando materiais recicláveis como garrafas pet, latinhas e que não sabe onde descartar corretamente. Esses itens serão reaproveitados nas nossas Oficinas e no Hackathon do projeto.</p>
                <p>O que não for utilizado será doado para organizações que reciclam esses materiais.  </p>
                
                <h5 className="font-bold">Participe e faça parte dessa corrente de inovação e sustentabilidade!</h5>
                <div className="w-1/2 h-[1px] bg-black mx-auto"></div>
                <h5 className="text-left font-bold">Ponto de arrecadação:</h5>
                <h6 className="text-[#422AD0] text-left flex items-center gap-1 pl-3">
                    <IoIosPin className="text-[#422AD0]"/>
                    Laboratório do Porto Digital - 3º Andar
                </h6>
                <h6 className="text-[#422AD0] text-left flex items-center gap-1 pl-3">
                    <IoIosPin className="text-[#422AD0]"/>
                    ICT Senac - Rua do Apolo, 235
                </h6>
            </div>
        </div>
    )
}