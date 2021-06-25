var content = document.getElementById("content")
var overflate_content = document.getElementById("overflate_content")

var header = document.getElementById("header")
var active_footer = document.getElementById("active")

//console.log(bivirkninger)

var aktuell_index = 0

var numerisk_stilart = "radioknapper" //drop_down, ja_nei, radioknapper, slider
var dikotom_stilart= "radioknapper" //drop_down, ja_nei, radioknapper

var overskrift_rapporter_symptomer_div = document.createElement("div")
overskrift_rapporter_symptomer_div.classList.add("overskrift_sentrum_div")
overskrift_rapporter_symptomer_div.style.padding = "0px";
overskrift_rapporter_symptomer_div.innerHTML = "<h3>Symptomer siste døgn</h3>"

var liste_bivirkninger_div = document.createElement("div")
liste_bivirkninger_div.classList.add("liste_bivirkninger_div")

var legg_inn_alle_bivirkninger_div = document.createElement("div")
legg_inn_alle_bivirkninger_div.classList.add("legg_inn_alle_bivirkninger_div")

var oppsummering_bivirkninger_div = document.createElement("div")
oppsummering_bivirkninger_div.classList.add("oppsummering_bivirkninger_div")
oppsummering_bivirkninger_div.classList.add("tekst_innhold")

var ring_sykehuset_div = document.createElement("div")
ring_sykehuset_div.classList.add("ring_sykehuset_div")
ring_sykehuset_div.classList.add("tekst_innhold")

var overflate_div = document.createElement("div")
overflate_div.id = "overflate_div"

var overflate_div_blank = document.createElement("div")
overflate_div_blank.id = "overflate_div_blank"

overflate_content.appendChild(overflate_div)
overflate_content.appendChild(overflate_div_blank)

VisSymptomerSisteDogn = function() {
	content.innerHTML = ""
	content.appendChild(overskrift_rapporter_symptomer_div)
	content.appendChild(liste_bivirkninger_div)
	content.appendChild(legg_inn_alle_bivirkninger_div)

	content.appendChild(tilbake_til_start_meny_div)

	LagListe(bivirkninger)
}


LagListe = function (array) {

	liste_bivirkninger_div.innerHTML = ""

	for (var i = 0; i < array.length; i++) {
		//var bivirkningen = array[i][0]
		//var bivirkning_talltype = array[i][1]
		var hver_bivirkning_div = document.createElement("div")
		hver_bivirkning_div.className = "bivirkninger"
		hver_bivirkning_div.classList.add("tekst_innhold")
		hver_bivirkning_div.classList.add("bivirkninger_inndeling_" + i%2)
		LagBivirkningElement(i, array, hver_bivirkning_div, numerisk_stilart)
		liste_bivirkninger_div.appendChild(hver_bivirkning_div)
	}
}

LagBivirkningElement = function (i, array, hver_bivirkning_div, numerisk_stilart) {
	hver_bivirkning_div.innerHTML = ""
	//console.log(hver_bivirkning_div)

	var bivirkningen = array[i][0]
	var bivirkning_talltype = array[i][1]

	var sporsmal_div = document.createElement("div")
	var innhold_div = document.createElement("div")
	var resultat_div = document.createElement("div")

	var endre_knapp = document.createElement("button")
	endre_knapp.innerHTML = "Endre"
	endre_knapp.className = "endre_knapp"
	BindEndreKnapp(i, bivirkningen, endre_knapp, hver_bivirkning_div, bivirkning_talltype, numerisk_stilart)

	if (bivirkning_talltype == "numerisk kort" || bivirkning_talltype == "numerisk lang") {
		if (numerisk_stilart == "drop_down") {
			LagBivirkningElementForDropDown(i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
		}
		else if (numerisk_stilart == "radioknapper") {
			LagBivirkningElementForRadioKnapper(i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
		}
		else if (numerisk_stilart == "slider") {
			LagBivirkningElementForSlider(i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
		}
		else if (numerisk_stilart == "ja_nei") {
			var bivirkningen_grense = array[i][2]
			LagBivirkningElementForJaNeiKnapperMedGrense(i, bivirkningen, bivirkningen_grense, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
		}
	}
	else if (bivirkning_talltype == "dikotom") {
		if (dikotom_stilart == "drop_down") {
			LagBivirkningElementForDropDownJaNei(i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
		}
		else if (dikotom_stilart == "ja_nei") {
			LagBivirkningElementForJaNeiKnapper(i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
		}
		else if (dikotom_stilart == "radioknapper") {
			LagBivirkningElementForRadioKnapperJaNei(i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
		}
	}
	hver_bivirkning_div.appendChild(sporsmal_div)
	hver_bivirkning_div.appendChild(innhold_div)
	hver_bivirkning_div.appendChild(resultat_div)
	VisInformasjonKnappOmBivirkningen(hver_bivirkning_div, bivirkningen)
}

BindEndreKnapp = function (index, bivirkningen, endre_knapp, hver_bivirkning_div, bivirkning_talltype, numerisk_stilart) {
	endre_knapp.onclick = function () {
		console.log(index, numerisk_stilart, bivirkning_talltype)
		
		LagBivirkningElement(index, bivirkninger, hver_bivirkning_div, numerisk_stilart)
		hver_bivirkning_div.classList.remove("active_div")
	}
}

VisDivSomGarOverInnhold = function () {
	
}

SkjulDiv = function (div) {
	//console.log(div)
	div.style.display = "none"
}

VisDiv= function (div) {
	div.style.display = "block"
}

GjorForsteBokstavStor = function (tekst) {
	redigert_tekst = ""
	redigert_tekst += tekst[0].toUpperCase()
	for (var i = 1; i < tekst.length; i++) {
		redigert_tekst += tekst[i]
	}
	return redigert_tekst
}