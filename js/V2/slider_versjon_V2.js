
LagBivirkningElementForSliderV2 = function (i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp) {

	var sporsmal_container = document.createElement("div")
	//sporsmal_container.className = "sporsmal_container_flex"

	var sporsmal_knapper_div = document.createElement("div")
	sporsmal_knapper_div.className = "sporsmal_knapper_div"
	
	var sporsmal_innhold_div = document.createElement("div")
	sporsmal_innhold_div.className = "sporsmal_innhold_div"
	sporsmal_innhold_div.innerHTML = "Hvor mange tilfeller med " + bivirkningen + " har du hatt det siste døgnet? ";

	
	var vis_slider_knapp = document.createElement("button")
	vis_slider_knapp.innerHTML = "Vis slider"
	

	var bekreft_antall_knapp = document.createElement("button")
	bekreft_antall_knapp.classList.add("litt_viktig_knapp")
	bekreft_antall_knapp.innerHTML = "Legg inn"

	var alternativer_array = FinnRiktigAltenativerArrayForBivirkning(bivirkningen)

	var flex_oppe_container_div = document.createElement("div")
	flex_oppe_container_div.className = "innhold_div_flex"
	var flex_nede_container_div = document.createElement("div")
	flex_nede_container_div.className = "innhold_div_flex"

	var alternativer_array_for_slider_presentasjon = alternativer_array


	for (var j = 0; j < alternativer_array_for_slider_presentasjon.length; j++) {
		//console.log(alternativer_array[j])
		var alternativer_div = document.createElement("div")
		alternativer_div.className = "flex_div"
		alternativer_div.classList.add("alternativer_flex_div")
		alternativer_div.innerHTML = GjorForsteBokstavStor(alternativer_array_for_slider_presentasjon[j])

		var tom_div = document.createElement("div")
		tom_div.className = "flex_div"

		if (j%2 == 0) {
			flex_oppe_container_div.appendChild(alternativer_div)
			flex_nede_container_div.appendChild(tom_div)
			alternativer_div.classList.add("alternativer_flex_oppe_div_"+ bivirkningen)
			tom_div.classList.add("alternativer_flex_nede_div_"+ bivirkningen)
		}
		else {
			flex_oppe_container_div.appendChild(tom_div)
			flex_nede_container_div.appendChild(alternativer_div)
			alternativer_div.classList.add("alternativer_flex_nede_div_"+ bivirkningen)
			tom_div.classList.add("alternativer_flex_oppe_div_"+ bivirkningen)
		}		
	}

	var slider_div = document.createElement("div")
	slider_div.className = "slider_container"

	var start_verdi = 0
	var slutt_verdi = alternativer_array.length-1

	var start_verdi_tall = start_verdi
	var slutt_verdi_tall = slutt_verdi

	var slider = document.createElement("input")
	slider.id = bivirkningen
	slider.className = "slider"
	slider.type = "range"
	slider.min = start_verdi_tall
	slider.max = slutt_verdi_tall
	slider.value = slider.min

	slider_div.appendChild(slider)

	console.log(slider_div)

	resultat_div.innerHTML = "<br>Antall: Dra i slideren <br>"
	
	BindHendelseSliderV2(i, bivirkningen, alternativer_array, slider, flex_oppe_container_div, flex_nede_container_div, hver_bivirkning_div, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp)

	innhold_div.innerHTML = "Angi hvor mange ved å dra i slideren.<br>"


	innhold_div.appendChild(flex_oppe_container_div)
	innhold_div.appendChild(slider_div)
	innhold_div.appendChild(flex_nede_container_div)

	
	sporsmal_div.appendChild(sporsmal_container)
	sporsmal_container.appendChild(sporsmal_innhold_div)
	sporsmal_container.appendChild(sporsmal_knapper_div)
	
}


BindHendelseSliderV2 = function (index, bivirkningen, alternativer_array, slider, flex_oppe_container_div, flex_nede_container_div, hver_bivirkning_div, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp) {
	slider.oninput = function () {
		console.log(slider.value, slider.max)
		var verdi = alternativer_array[slider.value]

		resultat_div.innerHTML = "";
		bekreft_antall_knapp.innerHTML = "Legg inn: " + verdi + "";

		resultat_div.appendChild(bekreft_antall_knapp)
		//console.log(slider.value%2)
		if (slider.value%2 == 0) {
			OppdaterFargePaSliderDivKlasser(flex_oppe_container_div, bivirkningen, "oppe", slider.value)
			OppdaterFargePaSliderDivKlasserTilNormalen(flex_nede_container_div, bivirkningen, "nede")
		}
		else {
			OppdaterFargePaSliderDivKlasser(flex_nede_container_div, bivirkningen, "nede", slider.value)
			OppdaterFargePaSliderDivKlasserTilNormalen(flex_oppe_container_div, bivirkningen, "oppe")
		}
	}
	slider.onclick = function () {
		//console.log(slider.value, slider.max)
		var verdi = alternativer_array[slider.value]

		resultat_div.innerHTML = "";
		bekreft_antall_knapp.innerHTML = "Legg inn: " + verdi + "";

		resultat_div.appendChild(bekreft_antall_knapp)
		if (slider.value%2 == 0) {
			OppdaterFargePaSliderDivKlasser(flex_oppe_container_div, bivirkningen, "oppe", slider.value)
			OppdaterFargePaSliderDivKlasserTilNormalen(flex_nede_container_div, bivirkningen, "nede")
		}
		else {
			OppdaterFargePaSliderDivKlasser(flex_nede_container_div, bivirkningen, "nede", slider.value)
			OppdaterFargePaSliderDivKlasserTilNormalen(flex_oppe_container_div, bivirkningen, "oppe")
		}
	}

	bekreft_antall_knapp.onclick = function () {
		var verdi = alternativer_array[slider.value]
		hver_bivirkning_div.classList.add("active_div")
		status_bivirkninger[index][1] = verdi
		var alvorlighetsgrad = FinnAlvorlighetsgrad(bivirkningen, verdi)
		//console.log(alvorlighetsgrad)
		status_bivirkninger[index][2] = alvorlighetsgrad

		innhold_div.innerHTML = ""
		
		resultat_div.innerHTML = "<b>" + GjorForsteBokstavStor(bivirkningen) + ": " + verdi + "</b>"
		resultat_div.innerHTML += "<br>"
		resultat_div.appendChild(endre_knapp)
		OppdaterFargePaKnapp(legg_inn_alle_bivirkninger_knapp)
	}
}

OppdaterFargePaSliderDivKlasser = function (opp_eller_ned_div, bivirkningen, opp_eller_ned, slider_verdi) {
	var aktuell_klasse = "alternativer_flex_" + opp_eller_ned + "_div_" + bivirkningen
	console.log(aktuell_klasse)
	var liste_med_elementer = document.getElementsByClassName(aktuell_klasse)

	var div = liste_med_elementer[slider_verdi]
	//console.log(liste_med_elementer)
	for (var i = 0; i < liste_med_elementer.length; i++) {
		console.log(liste_med_elementer[i])
		liste_med_elementer[i].classList.remove("valgt_radio")
		liste_med_elementer[i].classList.add("generell_radio")
	}

	div.classList.add("valgt_radio")
	div.classList.remove("generell_radio")
}

OppdaterFargePaSliderDivKlasserTilNormalen = function (opp_eller_ned_div, bivirkningen, opp_eller_ned) {
	var aktuell_klasse = "alternativer_flex_" + opp_eller_ned + "_div_" + bivirkningen
	console.log(aktuell_klasse)
	var liste_med_elementer = document.getElementsByClassName(aktuell_klasse)

	//console.log(liste_med_elementer)
	for (var i = 0; i < liste_med_elementer.length; i++) {
		console.log(liste_med_elementer[i])
		liste_med_elementer[i].classList.remove("valgt_radio")
		liste_med_elementer[i].classList.add("generell_radio")
	}

}