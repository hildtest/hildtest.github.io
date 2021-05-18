var veksler = document.getElementById("veksler")

//Tester for eksistens
//veksler.innerHTML = "Hello World"

veksler.innerHTML = ""

var numerisk_stilvalg_div = document.createElement("div")
numerisk_stilvalg_div.innerHTML = "Fremvisning av numeriske muligheter: <br>"

var numeriske_stilvalg_array = [ "ja_nei", "radioknapper", "slider"]

var dikotom_stilvalg_div = document.createElement("div")
dikotom_stilvalg_div.innerHTML = "Fremvisning av dikotome muligheter: <br>"

var dikotom_stilvalg_array = ["ja_nei", "radioknapper"]

veksler.appendChild(numerisk_stilvalg_div)
veksler.appendChild(dikotom_stilvalg_div)

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


LagRadioKnapperFraArray("numerisk", numeriske_stilvalg_array, numerisk_stilart, numerisk_stilvalg_div)
LagRadioKnapperFraArray("dikotom", dikotom_stilvalg_array, dikotom_stilart, dikotom_stilvalg_div)
