export default class TelephoneUtils {
	static format(telephone: string): string {
		if (!telephone) return "";
		const numbers = this.unformat(telephone);
		return numbers.length <= 10
			? this.changeNumbers(numbers, "(xx) xxxx-xxxx")
			: this.changeNumbers(numbers, "(xx) xxxxx-xxxx");
	}

	static unformat(telephone: string): string {
		if (!telephone) return "";
		return telephone.replace(/\D/g, "").slice(0, 11);
	}

	private static changeNumbers(telephone: string, ref: string): string {
		let formatted = telephone
			.split("")
			.reduce((telephone, number) => {
				return telephone.replace("x", number);
			}, ref)
			.replace(/x/g, "");
		if (telephone.length <= 2)
			formatted = formatted.replace(")", "").replace(" ", "");
		if (telephone.length <= 6) formatted = formatted.replace("-", "");
		return formatted;
	}
}
