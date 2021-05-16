var content = document.getElementById("content")


var mengde_array = ["0", "1-3", "4-6", "7+"]

var aktuell_index = 0


LagBivirkningElementForRadioKnapper = function (i, bivirkningen, hver_bivirkning_div) {
	hver_bivirkning_div.innerHTML = ""

	var sporsmal_div = document.createElement("div")
	var innhold_div = document.createElement("div")
	innhold_div.className = "innhold_div_flex"
	var resultat_div = document.createElement("div")

	var sporsmal_container = document.createElement("div")
	//sporsmal_container.className = "sporsmal_container_flex"
	
	var sporsmal_innhold_div = document.createElement("div")
	sporsmal_innhold_div.className = "sporsmal_innhold_div"
	sporsmal_innhold_div.innerHTML = "Har du hatt " + bivirkningen + " det siste døgnet? ";

	var endre_knapp = document.createElement("button")
	endre_knapp.innerHTML = "Endre"
	endre_knapp.className = "endre_knapp"
	BindEndreKnapp2(i, bivirkningen, endre_knapp, hver_bivirkning_div)

	innhold_div.innerHTML = ""

	for (var j = 0; j < mengde_array.length; j++) {
		//console.log(mengde_array[j])
		var radio_div = document.createElement("div")
		radio_div.className = "radio_div"

		var radio_input = document.createElement("input")
		radio_input.type = "radio"
		radio_input.id = bivirkningen + mengde_array[j]
		radio_input.name = bivirkningen
		radio_input.value = mengde_array[j]

		var label = document.createElement("label")
		label.htmlFor = bivirkningen + mengde_array[j]
		label.innerHTML = mengde_array[j]

		radio_div.appendChild(radio_input)
		radio_div.appendChild(label)

		innhold_div.appendChild(radio_div)

		BindRadioHendelse(i, bivirkningen, radio_input, hver_bivirkning_div, innhold_div, resultat_div)
	}

	hver_bivirkning_div.appendChild(sporsmal_div)
	sporsmal_div.appendChild(sporsmal_container)
	sporsmal_container.appendChild(sporsmal_innhold_div)

	hver_bivirkning_div.appendChild(innhold_div)
	hver_bivirkning_div.appendChild(resultat_div)

}


BindRadioHendelse = function (index, bivirkningen, radio_input, hver_bivirkning_div, innhold_div, resultat_div) {
	radio_input.onclick = function () {
		console.log(radio_input.value)
,		hver_bivirkning_div.classList.add("active_div")
		status_bivirkninger[index][1] = radio_input.value
		console.log(status_bivirkninger)
		resultat_div.innerHTML = "Opplevd " + radio_input.value + " tilfeller med " + bivirkningen
		OppdaterFargePaKnapp(registrer_alle_bivirkninger_knapp)
	}
}

BindEndreKnapp2 = function (index, bivirkningen, endre_knapp, hver_bivirkning_div) {
	endre_knapp.onclick = function () {
		//console.log(index)
		LagBivirkningElementForRadioKnapper(index, bivirkningen, hver_bivirkning_div)
		hver_bivirkning_div.classList.remove("active_div")
	}
}