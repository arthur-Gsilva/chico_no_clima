export const Chico = () => {
    return(
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-6 md:gap-0">
                <img src="ChicoNoSebrae.svg" alt="Chico no SEBRAE" />

                <div className="text-right">
                    <h2 className="text-3xl font-bold">Como o Carangueijo Chico surgiu?</h2>

                    <p className="my-5  md:text-lg md:my-10">
                        O caranguejo CHICO é uma peça de metareciclagem que surgiu da vontade de dar nova vida a materiais que, para muitos, seriam apenas resíduos eletrônicos. A primeira inspiração para a construção dessa obra veio do caranguejo, ícone da cultura pernambucana, e foi amplificada pela mídia do Rec’n’Play. <br /><br />

                        Além disso, a obra também se inspira em Abaporu, de Tarsila do Amaral, especialmente pelo grande pé da figura, que se converteu na patola do caranguejo CHICO, criando uma fusão entre arte e identidade cultural. <br /><br />
                        
                        CHICO se apresenta como um símbolo de adaptabilidade e resiliência, unindo inovação e tradição em uma escultura de 2,4 m x 1,5 m. Equipado com Arduino, Raspberry Pi e sensores que captam toques, temperatura e distância, o caranguejo transforma a interação com o público em uma experiência gamificada e emocionante. <br /><br />

                        Suas expressões em pixel art refletem emoções que se conectam de maneira lúdica e significativa com os visitantes, promovendo, por meio do motor de jogos Godot, uma reflexão sobre a importância da sustentabilidade e da valorização cultural.
                    </p>

                    <button className="w-full h-10 bg-[#99E550] text-[#1F1360] border border-[#1F1360] rounded-sm">
                        Conheça a história do Chico
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-center gap-10 md:gap-32 flex-col md:flex-row">
                <div className="text-left">
                    <h2 className="text-3xl font-bold">E o Chico Sabido?</h2>

                    <p className="md:text-lg my-5 md:my-10">
                        O Chico Sabido é um jogo interativo criado em parceria entre a Faculdade SENAC Pernambuco, alunos do curso de Análise e Desenvolvimento de Sistemas e o SEBRAE. <br /><br />

                        Agora, Chico traz consigo um jogo educativo e o Chiquito, seu joystick exclusivo. A pedido do SEBRAE, o projeto amplia a experiência interativa, permitindo que jogadores testem conhecimentos enquanto Chico reage dinamicamente com carinhas super divertidas. <br /><br />
                    </p>

                    <button className="w-full h-10 bg-[#99E550] text-[#1F1360] border border-[#1F1360] rounded-sm">
                        Conheça a história do Chico
                    </button>
                </div>

                <img src="ChicoNoSebrae2.svg" alt="Chico no SEBRAE" />
            </div>
        </div>
    )
}