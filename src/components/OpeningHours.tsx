export function OpeningHours() {
	return (
		<div className="w-full max-w-[393px] md:max-w-[190px] flex flex-col items-start justify-center gap-10">
			<h3 className="text-xl md:text-sm uppercase font-bold">
                Horário de Atendimento
			</h3>
			<div className="w-full h-full flex flex-col items-start justify-start gap-5">
				<div className="flex flex-col items-start justify-center">
					<span className="text-gray-400 opacity-90">
                    Segunda - Sexta
					</span>
					<span className="font-bold uppercase">
                    8:00 AM - 18:00 PM
					</span>
				</div>
				<div className="flex flex-col items-start justify-center">
					<span className="text-gray-400 opacity-90">
                    Sábado
					</span>
					<span className="font-bold uppercase">
                    8:00 AM - 12 PM
					</span>
				</div>
				<div className="flex flex-row justify-center gap-2">
					<span className="text-gray-400 opacity-90">
                    Domingo:
					</span>
					<span className="text-blue-600">
                    Fechado
					</span>
				</div>
			</div>
		</div>
	);
}