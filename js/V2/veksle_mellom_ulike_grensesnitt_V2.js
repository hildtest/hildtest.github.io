var veksler = document.getElementById("veksler")

//Tester for eksistens
//veksler.innerHTML = "Hello World"

veksler.innerHTML = ""

stilvalg_div = document.createElement("div")

stilvalg_array = ["drop_down", "ja_nei", "radioknapper", "slider"]

//stilart er definert i vis_bivirkninger


checkbox_elementer_div = document.createElement("div")

var font_stil = "sans-serif" //sans-serif eller serif
var font_stil_muligheter = ["sans-serif", "serif"]

var bivirkning_allerede_lagt_inn = "nei" //ja eller nei
var bivirkning_allerede_lagt_inn_muligheter = ["ja", "nei"]

var advarsel_stil = "mild"
var advarsel_stil_muligheter = ["mild", "kraftig"]

var rekkefolge_dato_kalender = "yngst-eldst"
var rekkefolge_dato_kalender_muligheter = ["yngst-eldst", "eldst_yngst"]
document.body.style.fontFamily = font_stil


var checkbox_elementer_array = [
	//["Font Stil: Sans-serif", font_stil, font_stil_muligheter, true],
	["Bivirkning allerede lagt inn", bivirkning_allerede_lagt_inn, bivirkning_allerede_lagt_inn_muligheter, bivirkning_allerede_lagt_inn==bivirkning_allerede_lagt_inn_muligheter[0]],
	["Advarsel Stil: Mild", advarsel_stil, advarsel_stil_muligheter, true],
	["Rekkefølge i kalander: Yngst-til-eldst", rekkefolge_dato_kalender, rekkefolge_dato_kalender_muligheter, rekkefolge_dato_kalender==rekkefolge_dato_kalender_muligheter[0]],
]


veksler.appendChild(stilvalg_div)
veksler.appendChild(checkbox_elementer_div)


LagRadioKnapperFraArray = function (array, presatt_verdi, div) {
	div.innerHTML = "Fremvisning av muligheter: <br>"
	//console.log("array")
	var stilvalg_type = "test"
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
		stilart = radio_input.value
		//console.log(stilart)
		LagListe(bivirkninger_array)
	}
	//Oppdatere utseende
}


LagCheckboxForElementFraArray = function (array, div) {
	console.log(rekkefolge_dato_kalender)
	console.log(rekkefolge_dato_kalender_muligheter[0])
	div.innerHTML = "Fremvisning av checkbox-alternativer: <br>"
	for (var i = 0; i < array.length; i++) {
		console.log(array[i])

		var checkbox_div = document.createElement("div")
		//radio_div.className = "radio_div"

		var checkbox_input = document.createElement("input")
		checkbox_input.type = "checkbox"
		checkbox_input.id = array[i][0]
		checkbox_input.name = array[i][0]
		checkbox_input.value = array[i][1]
		checkbox_input.checked = array[i][3]
		console.log(array[i][3])

		var label = document.createElement("label")
		label.htmlFor = array[i][0]
		label.innerHTML = GjorForsteBokstavStor(array[i][0])

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


		if (elementet[0] == "Font Stil: Sans-serif") {
			font_stil = elementet[1]
			document.body.style.fontFamily = font_stil
		}
		else if (elementet[0] == "Bivirkning allerede lagt inn") {
			bivirkning_allerede_lagt_inn = elementet[1]
			//console.log(bivirkning_allerede_lagt_inn)
		}
		else if (elementet[0] == "Advarsel Stil: Mild") {
			advarsel_stil = elementet[1]

			//kopiert fra registrer_alle_bivirkninger_V2.js
			ring_sykehuset_div.innerHTML = ""
			ring_sykehuset_div.appendChild(overskrift_advarsel_symptomer_div)
			
			if (advarsel_stil == "kraftig") {
				ring_sykehuset_div.appendChild(varsel_trekant_div_container)
			}
			else {
				
			}
			tekst_advarsel_symptomer_div.innerHTML = "Du har registrert en/flere bivirkninger som er alvorlige. Du bør ringe sykehuset for å avklare situasjonen med en sykepleier. <br><br>"
			ring_sykehuset_div.appendChild(tekst_advarsel_symptomer_div)
		}
		else if (elementet[0] == "Rekkefølge i kalander: Yngst-til-eldst") {
			rekkefolge_dato_kalender = elementet[1]
			//console.log(rekkefolge_dato_kalender)

			//Kopiert fra kalander_V2.js
			var eldst_yngst_array = []
			for (var i = 0; i < tidligere_symptomer_array.length; i++) {
				eldst_yngst_array.push(tidligere_symptomer_array[i])
			}

			var yngst_eldst_array = []
			for (var i = 0; i < tidligere_symptomer_array.length; i++) {
				var overste_index = tidligere_symptomer_array.length - 1
				yngst_eldst_array.push(tidligere_symptomer_array[overste_index-i])
			}

			if (rekkefolge_dato_kalender == "yngst-eldst") {
				LagListeDato(yngst_eldst_array)
			}
			else {
				LagListeDato(eldst_yngst_array)
			}
		}
	}
}

LagRadioKnapperFraArray(stilvalg_array, stilart, stilvalg_div)
LagCheckboxForElementFraArray(checkbox_elementer_array, checkbox_elementer_div)

