
const array = ["rose","pink","fuchsia","purple","violet","indigo","blue","sky","cyan","teal","emerald","green","lime","yellow","amber","orange","red","warm-gray","true-gray","gray","cool-gray","blue-gray"];
const shades = ["50","100","200","300","400","500","600","700","800","900"]
let allColors = [];
array.forEach((item, idx) => {
		allColors.push([])
		for (let i = 0; i < shades.length; i++) {
			const shade = shades[i];
			// console.log(`bg-${item}-${shade}`);
			allColors[idx].push(`bg-${item}-${shade}`);
		}
});

console.log(allColors);