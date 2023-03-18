export function Category() {
	return (
		<div className="w-full max-w-[393px] sm:max-w-[190px] flex flex-col items-start justify-center gap-10">
			<h3 className="text-xl sm:text-sm uppercase font-bold">
                Horário de Atendimento
			</h3>
			<div className="w-full h-full flex flex-col items-start justify-start gap-5">
				<a href="" className="text-gray-500">
                    Internet Resídencial
				</a>
				<a href="" className="text-gray-500">
                    Internet Corporativa
				</a>
				<a href="" className="text-gray-500">
                    Link Dedicado
				</a>
				<a href="" className="text-gray-500">
                    TV Por Assinatura
				</a>
			</div>
		</div>
	);
}