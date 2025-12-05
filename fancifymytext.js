function makeTextBigger() {
	const textArea = document.getElementById("user-text");
	if (textArea) {
		textArea.style.fontSize = "24pt";
	}
}

function toggleFanciness() {
	alert("Style toggled!");

	const textArea = document.getElementById("user-text");
	const fancyRadio = document.getElementById("fancy-radio");

	if (!textArea || !fancyRadio) {
		return;
	}

	if (fancyRadio.checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "";
		textArea.style.textDecoration = "none";
	}
}

function addMoo() {
	const textArea = document.getElementById("user-text");
	if (!textArea) {
		return;
	}

	const upperText = textArea.value.toUpperCase();
	const sentences = upperText.split(".");
	const transformed = sentences.map((sentence) => {
		const trimmed = sentence.trim();
		if (!trimmed) {
			return "";
		}

		const words = trimmed.split(/\s+/);
		const lastIndex = words.length - 1;
		words[lastIndex] = `${words[lastIndex]}-Moo`;
		return words.join(" ");
	});

	const result = transformed.filter((s) => s !== "").join(". ");
	textArea.value = result ? `${result}.` : "";
}
