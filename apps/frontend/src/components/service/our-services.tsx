"use client";

import { Service } from "@barba/core";
import useServices from "@/data/hooks/useServices";
import { useRouter } from "next/navigation";
import Title from "../shared/title";
import ServiceItem from "./service-item";

export default function OurServices() {
	const router = useRouter();
	const { services } = useServices();

	function initScheduling() {
		router.push("/scheduling");
	}

	return (
		<div className="flex flex-col gap-16">
			<Title
				tag="Serviços"
				primary="Do Classico ao Rock"
				secondary="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som de rock pesado!"
			/>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
				{services.map((service: Service) => (
					<ServiceItem
						key={service.id}
						service={service}
						onClick={initScheduling}
					/>
				))}
			</div>
		</div>
	);
}
