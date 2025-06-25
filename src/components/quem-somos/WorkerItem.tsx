import { WorkerType } from "@/types/WorkerType"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const WorkerItem = ({ worker }: { worker: WorkerType }) => {
    return(
        <div className="border border-white p-5 text-white rounded-xl flex flex-col items-center">
            <div
                className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] rounded-full mb-2"
                style={{
                    backgroundImage: `url(${worker.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </div>

            <h4 className="font-bold">{worker.name}</h4>
            <h5 className="mb-8">{worker.role}</h5>

            <div className="flex items-center gap-6">
                <Link href={worker.github} target="_blank">
                    <FaGithub className="text-3xl"/>
                </Link>

                <Link href={worker.linkedin} target="_blank">
                    <CiLinkedin className="text-3xl"/>
                </Link>
            </div>
        </div>
    )
}