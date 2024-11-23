import Image from "next/image";

export interface EstatisticaProps {
	texto: string;
	valor: string;
	imagem: string;
}

export default function Estatistica(props: EstatisticaProps) {
	return (
		<div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
			<div className="flex-1 flex flex-col gap-1">
				<span className="text-zinc-400 font-light">{props.texto}</span>
				<span className="text-2xl font-black">{props.valor}</span>
			</div>
			<Image src={props.imagem} alt="icone" width={80} height={80} />
		</div>
	);
}
