

LagBivirkningElementForRadioKnapperV2 = function (i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp) {
	hver_bivirkning_div.innerHTML = ""

	var sporsmal_container = document.createElement("div")
	//sporsmal_container.className = "sporsmal_container_flex"
	
	var sporsmal_innhold_div = document.createElement("div")
	sporsmal_innhold_div.className = "sporsmal_innhold_div"
	sporsmal_innhold_div.innerHTML = "Hvordan har du opplevd det med <b>" + bivirkningen + "</b> det siste døgnet? ";

	innhold_div.innerHTML = ""
	innhold_div.className = "innhold_div_flex"

	var alternativer_array = FinnRiktigAltenativerArrayForBivirkning(bivirkningen)

	for (var j = 0; j < alternativer_array.length; j++) {
		//console.log(alternativer_array[j])
		var radio_div = document.createElement("div")
		radio_div.className = "radio_div"
		radio_div.classList.add("radio_div"+bivirkningen)

		var radio_input_div = document.createElement("div")
		radio_input_div.className = "radio_input_div"

		var radio_input = document.createElement("input")
		radio_input.type = "radio"
		radio_input.id = bivirkningen + alternativer_array[j]
		radio_input.className = "bivirkning_radio_input"
		radio_input.name = bivirkningen
		radio_input.value = alternativer_array[j]
		radio_input_div.appendChild(radio_input)

		var radio_label_div = document.createElement("div")
		radio_label_div.className = "radio_label_div"
		var label = document.createElement("label")
		label.htmlFor = bivirkningen + alternativer_array[j]
		label.innerHTML = GjorForsteBokstavStor(alternativer_array[j])
		radio_label_div.appendChild(label)

		radio_div.appendChild(radio_input_div)
		radio_div.appendChild(radio_label_div)

		innhold_div.appendChild(radio_div)

		BindHendelseRadioKnapperV2(i, bivirkningen, radio_div, radio_input, hver_bivirkning_div, innhold_div, resultat_div)
	}

	sporsmal_div.appendChild(sporsmal_container)
	sporsmal_container.appendChild(sporsmal_innhold_div)
}



BindHendelseRadioKnapperV2 = function (index, bivirkningen, radio_div, radio_input, hver_bivirkning_div, innhold_div, resultat_div) {
	radio_input.onclick = function () {
		var verdi = radio_input.value
		hver_bivirkning_div.classList.add("active_div")
		status_bivirkninger[index][1] = verdi
		var alvorlighetsgrad = FinnAlvorlighetsgrad(bivirkningen, verdi)
		//console.log(alvorlighetsgrad)
		status_bivirkninger[index][2] = alvorlighetsgrad
		resultat_div.innerHTML = "<b>" + GjorForsteBokstavStor(bivirkningen) + ": " + verdi + "</b>"
		OppdaterFargePaRadioDivKlasser(radio_div, bivirkningen)
		OppdaterFargePaKnapp(legg_inn_alle_bivirkninger_knapp)
	}
}


OppdaterFargePaRadioDivKlasser = function (div, bivirkningen) {
	var aktuell_klasse = "radio_div"+bivirkningen
	var liste_med_elementer = document.getElementsByClassName(aktuell_klasse)
	console.log(liste_med_elementer)
	for (var i = 0; i < liste_med_elementer.length; i++) {
		console.log(liste_med_elementer[i])
		liste_med_elementer[i].classList.remove("valgt_radio")
		liste_med_elementer[i].classList.add("generell_radio")
	}

	div.classList.add("valgt_radio")
	div.classList.remove("generell_radio")
}