
LagBivirkningElementForDropDown = function (i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp) {

	var sporsmal_container = document.createElement("div")
	//sporsmal_container.className = "sporsmal_container_flex"

	var sporsmal_knapper_div = document.createElement("div")
	sporsmal_knapper_div.className = "sporsmal_knapper_div"
	
	var sporsmal_innhold_div = document.createElement("div")
	sporsmal_innhold_div.className = "sporsmal_innhold_div"
	sporsmal_innhold_div.innerHTML = "Hvor mange tilfeller med " + bivirkningen + " har du hatt det siste døgnet? ";

	innhold_div.innerHTML = ""

	var mengde_array = FinnRiktigMengdeArrayForBivirkning(bivirkningen)

	var drop_down = document.createElement("select")
	drop_down.name = bivirkningen
	drop_down.id = bivirkningen
	innhold_div.appendChild(drop_down)

	var default_option = document.createElement("option")
	default_option.className = "option"
	default_option.innerHTML = "Velg en verdi"
	default_option.value = "Velg en verdi"
	default_option.hidden = "true"

	drop_down.appendChild(default_option)

	for (var j = 0; j < mengde_array.length; j++) {
		//console.log(mengde_array[j])
		var option = document.createElement("option")
		option.className = "option"
		option.innerHTML = mengde_array[j]
		option.value = mengde_array[j]

		drop_down.appendChild(option)
	}

	var bekreft_antall_knapp = document.createElement("button")
	bekreft_antall_knapp.innerHTML = "Legg inn"

	BindHendelseDropDownBekreftAntall(i, bivirkningen, drop_down, hver_bivirkning_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp)

	sporsmal_div.appendChild(sporsmal_container)
	sporsmal_container.appendChild(sporsmal_innhold_div)
	sporsmal_container.appendChild(sporsmal_knapper_div)
}

BindHendelseDropDown = function (index, bivirkningen, drop_down, hver_bivirkning_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp) {
	drop_down.onchange = function () {
		hver_bivirkning_div.classList.add("active_div")
		status_bivirkninger[index][2] = drop_down.value

		resultat_div.innerHTML = "Opplevd " + drop_down.value + " tilfeller med " + bivirkningen
		OppdaterFargePaKnapp(legg_inn_alle_bivirkninger_knapp)
	}
}

BindHendelseDropDownBekreftAntall = function (index, bivirkningen, drop_down, hver_bivirkning_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp) {
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

LagBivirkningElementForDropDownJaNei = function (i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp) {

	var sporsmal_container = document.createElement("div")
	//sporsmal_container.className = "sporsmal_container_flex"

	var sporsmal_knapper_div = document.createElement("div")
	sporsmal_knapper_div.className = "sporsmal_knapper_div"
	
	var sporsmal_innhold_div = document.createElement("div")
	sporsmal_innhold_div.className = "sporsmal_innhold_div"
	sporsmal_innhold_div.innerHTML = "Har du hatt " + bivirkningen + " det siste døgnet? ";

	innhold_div.innerHTML = ""

	var drop_down = document.createElement("select")
	drop_down.name = bivirkningen
	drop_down.id = bivirkningen
	innhold_div.appendChild(drop_down)

	var default_option = document.createElement("option")
	default_option.className = "option"
	default_option.innerHTML = "Velg en verdi"
	default_option.value = "Velg en verdi"
	default_option.hidden = "true"

	drop_down.appendChild(default_option)

	for (var j = 0; j < ja_nei_array.length; j++) {
		var option = document.createElement("option")
		option.className = "option"
		option.innerHTML = ja_nei_array[j]
		option.value = ja_nei_array[j]

		drop_down.appendChild(option)
	}

	var bekreft_antall_knapp = document.createElement("button")
	bekreft_antall_knapp.innerHTML = "Legg inn"

	BindHendelseDropDownJaNei(i, bivirkningen, drop_down, hver_bivirkning_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp)

	sporsmal_div.appendChild(sporsmal_container)
	sporsmal_container.appendChild(sporsmal_innhold_div)
	sporsmal_container.appendChild(sporsmal_knapper_div)
}

BindHendelseDropDownJaNei = function (index, bivirkningen, drop_down, hver_bivirkning_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp) {
	drop_down.onchange = function () {
		resultat_div.innerHTML = GjorForsteBokstavStor(bivirkningen) + ": " + drop_down.value + "<br>";
		hver_bivirkning_div.classList.add("active_div")
		status_bivirkninger[index][2] = drop_down.value
		innhold_div.appendChild(endre_knapp)
		OppdaterFargePaKnapp(legg_inn_alle_bivirkninger_knapp)
	}
}