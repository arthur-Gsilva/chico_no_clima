export const WhatIs = ({ dark }: { dark?:  boolean}) => {
    return(
        <div className="flex items-center flex-col gap-4" style={{ color: dark ? '#fff' : '#000'}}>
            <h2 className="text-3xl">O que é o projeto Chico no Clima?</h2>

            <img src="logo.svg" alt="logo do chico no clima" className="w-md h-auto"/>

            <div className="flex flex-col gap-6 max-w-3xl text-lg">
                <p>O projeto “Chico no Clima” surge da urgência de fortalecer o protagonismo juvenil frente aos desafios das mudanças climáticas em contextos urbanos, especialmente em territórios periféricos do Recife.</p>

                <p>Diante da crescente crise ambiental e da desigualdade socioambiental, é essencial criar espaços de escuta, formação e ação que envolvam as juventudes de forma criativa, acessível e conectada às suas realidades. Nossa proposta convida jovens do Recife a participarem de uma jornada educativa, interativa e criativa, que une arte, tecnologia e ação comunitária. </p>

                <p>Por meio de oficinas, palestras, rodas de escuta, intervenções urbanas e experiências sensoriais, os participantes irão construir narrativas sobre a crise climática, desenvolver protótipos com sensores e criar instalações que dialoguem com os desafios ambientais do território</p>
            </div>

            {!dark &&
                <button className="w-[250px] h-10 bg-[#99E550] text-[#1F1360] border border-[#1F1360] rounded-sm">
                    Saiba mais sobre o projeto
                </button>
            }
            

            <div className="mt-6 flex items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                    <img src="instagram.svg" alt="icone do instagram" />
                    <p>Instagram</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img src="linkedin.svg" alt="icone do Linkedin" />
                    <p>Linkedin</p>
                </div>
            </div>
        </div>
    )
}