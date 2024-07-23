"use client";

import OurCustomers from "@/components/customer/our-customer";
import SloganTitle from "@/components/landing/slogan-title";
import OurProfessionals from "@/components/professional/our-professionals";
import OurServices from "@/components/service/our-services";
import ContainerWithBackground from "@/components/shared/container-with-bg";

export default function Landing() {
	return (
		<>
			<SloganTitle />
			<ContainerWithBackground image="/banners/servicos.webp">
				<OurServices />
			</ContainerWithBackground>
			<ContainerWithBackground image="/banners/profissionais.webp">
				<OurProfessionals />
			</ContainerWithBackground>
			<ContainerWithBackground image="/banners/clientes.webp">
				<OurCustomers />
			</ContainerWithBackground>
		</>
	);
}
