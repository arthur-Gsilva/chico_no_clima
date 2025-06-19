export const Partners = () => {
    return(
        <section className="bg-white w-full">
            <div className="py-15 flex items-center flex-col mx-20 gap-20">
                <div className="w-full">
                    <h2 className="text-center text-2xl mb-12">Parceiros</h2>
                    <div className="flex justify-around">
                        <img src="parceiros/SENAC.svg" alt="Logo do Senac" />
                        <img src="parceiros/SEBRAE.svg" alt="Logo do SEBRAE" />
                        <img src="parceiros/porto-digital.svg" alt="Logo do Porto Digital" />
                        <img src="parceiros/espaco-ciencia.svg" alt="Logo do espaço ciência" />
                    </div>
                </div>

                <div className="h-[1px] w-1/2 bg-black"></div>

                <div className="w-full">
                    <h2 className="text-center text-2xl mb-12">Incentivos</h2>
                    <img src="incentivos/coletivos.svg" alt="Incentivos" />
                </div>
            </div>
        </section>
    )
}