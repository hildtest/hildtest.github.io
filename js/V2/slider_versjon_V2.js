
LagBivirkningElementForSlider = function (i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp) {

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


	BindHendelseVisSlider(i, bivirkningen, vis_slider_knapp, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp, hver_bivirkning_div)		


	sporsmal_div.appendChild(sporsmal_container)
	sporsmal_container.appendChild(sporsmal_innhold_div)
	sporsmal_container.appendChild(sporsmal_knapper_div)
	
	//innhold_div.appendChild(vis_slider_knapp)
}

BindHendelseVisSlider = function (index, bivirkningen, vis_slider_knapp, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp, hver_bivirkning_div) {

	//vis_slider_knapp.onclick = function () {
		innhold_div.innerHTML = "Angi hvor mange ved å dra i slideren.<br><br>"
		sporsmal_knapper_div.innerHTML = ""

		aktuell_index = index
		//console.log(aktuell_index)

		LagSlideren(index, bivirkningen, vis_slider_knapp, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp, hver_bivirkning_div)
	//}
}

FinnHoyesteTallEtterPluss = function (array) {
	for (var i = 0; i < array.length; i++) {
		var number_array = ""
		if (Number(array[i])) {
			number_array += array[i]
		}
		return number_array
	}
}

LagSlideren = function (index, bivirkningen, vis_slider_knapp, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp, hver_bivirkning_div) {
	var slider_div = document.createElement("div")
	slider_div.className = "slider_container"

	var mengde_array = FinnRiktigMengdeArrayForBivirkning(bivirkningen)

	var start_verdi = mengde_array[0]
	var slutt_verdi = mengde_array[mengde_array.length-1]

	var start_verdi_tall = FinnHoyesteTallEtterPluss(start_verdi)
	var slutt_verdi_tall = FinnHoyesteTallEtterPluss(slutt_verdi)

	console.log(slutt_verdi_tall)
	console.log(mengde_array)

	var slider = document.createElement("input")
	slider.id = bivirkningen
	slider.className = "slider"
	slider.type = "range"
	slider.min = start_verdi_tall
	slider.max = slutt_verdi_tall
	slider.value = (slider.min+slider.max)/2

	
	var start_tekst = document.createTextNode(mengde_array[0])
	var slutt_tekst = document.createTextNode(mengde_array[mengde_array.length-1])
	
	slider_div.appendChild(start_tekst)
	slider_div.appendChild(slider)
	slider_div.appendChild(slutt_tekst)

	innhold_div.appendChild(slider_div)
	console.log(slider)

	resultat_div.innerHTML = "<br>Antall: Dra i slideren <br>"
	BindHendelseSlider(index, bivirkningen, slider, hver_bivirkning_div, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp)
}

BindHendelseSlider = function (index, bivirkningen, slider, hver_bivirkning_div, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp) {
	slider.oninput = function () {
		console.log(slider.value, slider.max)

		slider.style.opacity = 1;

		if (slider.value == slider.max) {
			resultat_div.innerHTML = "<br>Antall: " + this.value + "+<br>";
			bekreft_antall_knapp.innerHTML = "Legg inn " + this.value + " eller flere hendelser";
		}
		else {
			resultat_div.innerHTML = "<br>Antall: " + this.value + "<br>";
			bekreft_antall_knapp.innerHTML = "Legg inn " + this.value + " hendelser";
		}

		resultat_div.appendChild(bekreft_antall_knapp)
	}

	bekreft_antall_knapp.onclick = function () {
		console.log(slider.value, bivirkningen)
		hver_bivirkning_div.classList.add("active_div")
		innhold_div.innerHTML = "<b>Registrert " + slider.value + " tilfeller</b> ";
		status_bivirkninger[index][2] = slider.value
		console.log(status_bivirkninger)
		resultat_div.innerHTML = ""
		innhold_div.appendChild(endre_knapp)
		OppdaterFargePaKnapp(legg_inn_alle_bivirkninger_knapp)
	}
}


LagBivirkningElementForSliderJaNei = function (i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp) {

	var sporsmal_container = document.createElement("div")
	//sporsmal_container.className = "sporsmal_container_flex"

	var sporsmal_knapper_div = document.createElement("div")
	sporsmal_knapper_div.className = "sporsmal_knapper_div"
	
	var sporsmal_innhold_div = document.createElement("div")
	sporsmal_innhold_div.className = "sporsmal_innhold_div"
	sporsmal_innhold_div.innerHTML = "Har du hatt noen tilfeller med " + bivirkningen + " det siste døgnet? ";

	
	var vis_slider_knapp = document.createElement("button")
	vis_slider_knapp.innerHTML = "Vis slider"
	

	var bekreft_antall_knapp = document.createElement("button")
	bekreft_antall_knapp.classList.add("litt_viktig_knapp")
	bekreft_antall_knapp.innerHTML = "Legg inn"


	BindHendelseVisSliderJaNei(i, bivirkningen, vis_slider_knapp, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp, hver_bivirkning_div)		


	sporsmal_div.appendChild(sporsmal_container)
	sporsmal_container.appendChild(sporsmal_innhold_div)
	sporsmal_container.appendChild(sporsmal_knapper_div)
	
	//innhold_div.appendChild(vis_slider_knapp)
}

BindHendelseVisSliderJaNei = function (index, bivirkningen, vis_slider_knapp, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp, hver_bivirkning_div) {

	//vis_slider_knapp.onclick = function () {
		innhold_div.innerHTML = "Angi ja eller nei ved å dra i slideren<br><br>"
		sporsmal_knapper_div.innerHTML = ""

		aktuell_index = index
		//console.log(aktuell_index)

		LagSliderenJaNei(index, bivirkningen, vis_slider_knapp, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp, hver_bivirkning_div)
	//}
}


LagSliderenJaNei = function (index, bivirkningen, vis_slider_knapp, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp, hver_bivirkning_div) {
	var slider_div = document.createElement("div")
	slider_div.className = "slider_container"


	var slider = document.createElement("input")
	slider.id = bivirkningen
	slider.className = "slider"
	slider.type = "range"
	slider.min = 0
	slider.max = 1
	slider.step = 0.5
	slider.value = (slider.min+slider.max)/2

	
	var start_tekst = document.createTextNode("Nei")
	var slutt_tekst = document.createTextNode("Ja")
	
	slider_div.appendChild(start_tekst)
	slider_div.appendChild(slider)
	slider_div.appendChild(slutt_tekst)

	innhold_div.appendChild(slider_div)
	console.log(slider)

	resultat_div.innerHTML = "<br>Dra i slideren<br>"
	BindHendelseSliderJaNei(index, bivirkningen, slider, hver_bivirkning_div, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp)
}

BindHendelseSliderJaNei = function (index, bivirkningen, slider, hver_bivirkning_div, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, bekreft_antall_knapp) {
	var nei_ja_slider = ["nei", "ja"]

	slider.oninput = function () {
		var midt_verdi = (Number(slider.max)+Number(slider.min))/2

		slider.style.opacity = 1;

		//ugyldig når i midten
		if (slider.value == midt_verdi) {
			resultat_div.innerHTML = "<br>Dra i slideren<br>";
		}
		else {
			resultat_div.innerHTML = "<br>" + GjorForsteBokstavStor(bivirkningen) + ": " + nei_ja_slider[this.value] + "<br>";
			bekreft_antall_knapp.innerHTML = "Legg inn <b>" + GjorForsteBokstavStor(nei_ja_slider[this.value]) + "</b>";
			resultat_div.appendChild(bekreft_antall_knapp)
		}
	}

	bekreft_antall_knapp.onclick = function () {
		console.log(slider.value, bivirkningen)
		hver_bivirkning_div.classList.add("active_div")
		innhold_div.innerHTML = "<b>" + GjorForsteBokstavStor(bivirkningen) + ": " + GjorForsteBokstavStor(nei_ja_slider[slider.value]) + "</b> ";
		status_bivirkninger[index][2] = nei_ja_slider[slider.value]
		console.log(status_bivirkninger)
		resultat_div.innerHTML = ""
		innhold_div.appendChild(endre_knapp)
		OppdaterFargePaKnapp(legg_inn_alle_bivirkninger_knapp)
	}
}
