'use client'

import { workers } from "@/data/workers";
import { useState } from "react";
import { WorkerItem } from "./WorkerItem";

export const WhoWork = () => {

    const [selected, setSelected] = useState<string>('todos');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const valor = event.target.value;
        setSelected(valor);
        console.log('Valor selecionado:', valor);
    };

    return(
        <div className="flex flex-col items-center gap-12 py-1">
            <div className="flex items-center gap-6">

                <h2 className="text-white text-3xl text-center">
                    Quem contribuiu para o Desenvolvimento do <br /> Chico no Clima?
                </h2>
           
            </div>

            <div className="flex items-center justify-between w-full">
                <h4 className="text-white text-xl">Nossa equipe</h4>

                <select
                    id="area"
                    value={selected}
                    onChange={handleChange}
                    className="p-2 border  rounded-lg bg-white"
                >
                    <option value="gestão">Gestão</option>
                    <option value="desenvolvedor">Desenvolvedor</option>
                    <option value="design">Design</option>
                    <option value="maker">Maker</option>
                    <option value="todos">Todos</option>
                </select>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
                {workers.map((data) => (
                    <WorkerItem key={data.linkedin} worker={data}/>
                ))}
            </div>
        </div>
    )
}