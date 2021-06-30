
LagBivirkningElementForDropDownV2 = function (i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp) {

	var sporsmal_container = document.createElement("div")
	//sporsmal_container.className = "sporsmal_container_flex"
	
	var sporsmal_innhold_div = document.createElement("div")
	sporsmal_innhold_div.className = "sporsmal_innhold_div"
	sporsmal_innhold_div.innerHTML = "Hvordan har du opplevd det med " + bivirkningen + " det siste døgnet? ";

	innhold_div.innerHTML = ""

	var alternativer_array = FinnRiktigAltenativerArrayForBivirkning(bivirkningen)

	var drop_down = document.createElement("select")
	drop_down.className = "select"
	drop_down.name = bivirkningen
	drop_down.id = bivirkningen
	innhold_div.appendChild(drop_down)

	var default_option = document.createElement("option")
	default_option.className = "option"
	default_option.innerHTML = "Velg en verdi"
	default_option.value = "Velg en verdi"
	default_option.hidden = "true"

	drop_down.appendChild(default_option)

	for (var j = 0; j < alternativer_array.length; j++) {
		//console.log(alternativer_array[j])
		var option = document.createElement("option")
		option.className = "option"
		option.innerHTML = GjorForsteBokstavStor(alternativer_array[j])
		option.value = alternativer_array[j]

		drop_down.appendChild(option)
	}

	var bekreft_antall_knapp = document.createElement("button")
	bekreft_antall_knapp.innerHTML = "Legg inn"

	BindHendelseDropDownV2(i, bivirkningen, drop_down, hver_bivirkning_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp)

	sporsmal_div.appendChild(sporsmal_container)
	sporsmal_container.appendChild(sporsmal_innhold_div)
}

BindHendelseDropDownV2 = function (index, bivirkningen, drop_down, hver_bivirkning_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp) {
	drop_down.onchange = function () {
		var verdi = drop_down.value
		hver_bivirkning_div.classList.add("active_div")
		status_bivirkninger[index][1] = verdi
		var alvorlighetsgrad = FinnAlvorlighetsgrad(bivirkningen, verdi)
		status_bivirkninger[index][2] = alvorlighetsgrad

		innhold_div.innerHTML = ""
		resultat_div.innerHTML = "<b>" + GjorForsteBokstavStor(bivirkningen) + ": " + verdi + "</b>"
		resultat_div.innerHTML += "<br>"
		resultat_div.appendChild(endre_knapp)
		OppdaterFargePaKnapp(legg_inn_alle_bivirkninger_knapp)
	}
}

BindHendelseDropDownBekreftAntallV2 = function (index, bivirkningen, drop_down, hver_bivirkning_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp) {
	drop_down.onchange = function () {

		resultat_div.innerHTML = "Antall: " + drop_down.value + "<br>";
		bekreft_antall_knapp.innerHTML = "Legg inn " + drop_down.value + " hendelser";
		resultat_div.appendChild(bekreft_antall_knapp)
	}

	bekreft_antall_knapp.onclick = function () {
		hver_bivirkning_div.classList.add("active_div")
		innhold_div.innerHTML = "<b>Registrert " + drop_down.value + " tilfeller</b> ";
		status_bivirkninger[index][2] = drop_down.value
		resultat_div.innerHTML = ""
		innhold_div.appendChild(endre_knapp)
		OppdaterFargePaKnapp(legg_inn_alle_bivirkninger_knapp)
	}
}

