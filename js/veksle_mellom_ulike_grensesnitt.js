var veksler = document.getElementById("veksler")

//Tester for eksistens
//veksler.innerHTML = "Hello World"

veksler.innerHTML = ""

var numerisk_stilvalg_div = document.createElement("div")
numerisk_stilvalg_div.innerHTML = "Fremvisning av numeriske muligheter: <br>"

var numeriske_stilvalg_array = ["drop_down", "ja_nei", "radioknapper", "slider"]

var dikotom_stilvalg_div = document.createElement("div")
dikotom_stilvalg_div.innerHTML = "Fremvisning av dikotome muligheter: <br>"

var dikotom_stilvalg_array = ["drop_down", "ja_nei", "radioknapper", "slider"]



checkbox_elementer_div = document.createElement("div")
checkbox_elementer_div.innerHTML = "Fremvisning av checkbox-alternativer: <br>"

var font_stil = "sans-serif" //sans-serif eller serif
var font_stil_muligheter = ["sans-serif", "serif"]

var bivirkning_allerede_lagt_inn = "nei" //ja eller nei
var bivirkning_allerede_lagt_inn_muligheter = ["nei", "ja"]

document.body.style.fontFamily = font_stil

var checkbox_elementer_array = [
	["font_stil", font_stil, font_stil_muligheter],
	["bivirkning_allerede_lagt_inn", bivirkning_allerede_lagt_inn, bivirkning_allerede_lagt_inn_muligheter],
	]


veksler.appendChild(numerisk_stilvalg_div)
veksler.appendChild(dikotom_stilvalg_div)
veksler.appendChild(checkbox_elementer_div)


LagRadioKnapperFraArray = function (stilvalg_type, array, presatt_verdi, div) {
	//console.log("array")
	for (var i = 0; i < array.length; i++) {

		var radio_div = document.createElement("div")
		//radio_div.className = "radio_div"

		var radio_input = document.createElement("input")
		radio_input.type = "radio"
		radio_input.id = stilvalg_type + array[i]
		radio_input.name = stilvalg_type
		radio_input.value = array[i]

		if (radio_input.id == stilvalg_type + presatt_verdi) {
			radio_input.checked = "checked"
		}

		var label = document.createElement("label")
		label.htmlFor = stilvalg_type + array[i]
		label.innerHTML = GjorForsteBokstavStor(array[i])

		radio_div.appendChild(radio_input)
		radio_div.appendChild(label)

		//console.log("hello")
		div.appendChild(radio_div)

		BindHendelseValgAvStil(i, radio_input, stilvalg_type, array[i])
	}
}

BindHendelseValgAvStil = function (i, radio_input, stilvalg_type, stilvalget) {
	radio_input.onclick = function () {
		if (stilvalg_type == "numerisk") {
			numerisk_stilart = stilvalget
		}
		else if (stilvalg_type == "dikotom") {
			dikotom_stilart = stilvalget
		}
		LagListe(bivirkninger)
	}
	//Oppdatere utseende
}


LagCheckboxForElementFraArray = function (array, div) {
	for (var i = 0; i < array.length; i++) {
		console.log(array[i])

		var checkbox_div = document.createElement("div")
		//radio_div.className = "radio_div"

		var checkbox_input = document.createElement("input")
		checkbox_input.type = "checkbox"
		checkbox_input.id = array[i][0]
		checkbox_input.name = array[i][0]
		checkbox_input.value = array[i][1]
		checkbox_input.checked = "checked"

		var label = document.createElement("label")
		label.htmlFor = array[i][0]
		label.innerHTML = GjorForsteBokstavStor(array[i][0] + ": " + array[i][1])

		checkbox_div.appendChild(checkbox_input)
		checkbox_div.appendChild(label)

		BindHendelseCheckboxStil(i, checkbox_input, array[i])

		div.appendChild(checkbox_div)
	}
}

BindHendelseCheckboxStil = function (i, checkbox_input, elementet) {
	checkbox_input.onchange = function () {
		//console.log(checkbox_input.checked)
		//console.log(elementet[1], elementet[2][0])
		//Sjekker om verdien er lik default, hvis den er det, så bytter
		if (elementet[1] == elementet[2][0]) {
			elementet[1] = elementet[2][1]
		}
		else {
			elementet[1] = elementet[2][0]
		}


		if (elementet[0] == "font_stil") {
			font_stil = elementet[1]
			document.body.style.fontFamily = font_stil
		}
		else if (elementet[0] == "bivirkning_allerede_lagt_inn") {
			bivirkning_allerede_lagt_inn = elementet[1]
			//console.log(bivirkning_allerede_lagt_inn)
		}
	}
}

LagRadioKnapperFraArray("numerisk", numeriske_stilvalg_array, numerisk_stilart, numerisk_stilvalg_div)
LagRadioKnapperFraArray("dikotom", dikotom_stilvalg_array, dikotom_stilart, dikotom_stilvalg_div)
LagCheckboxForElementFraArray(checkbox_elementer_array, checkbox_elementer_div)