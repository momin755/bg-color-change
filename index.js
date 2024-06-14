let index = 1;

function colorChanges() {
	let colors = ["Blue", "IndianRed", "Crimson", "DeepPink", "OrangeRed", "Yellow", "Fuchsia", "Indigo", "Lime"]
	document.querySelector("body").style.background = colors[index++];
	if (index > colors.length - 1) {
		index = 0;
	}

}