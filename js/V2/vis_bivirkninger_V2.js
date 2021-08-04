//tidligere content.js

var content = document.getElementById("content")
var overflate_content = document.getElementById("overflate_content")

var header = document.getElementById("header")
var active_footer = document.getElementById("active")

//console.log(bivirkninger)

var aktuell_index = 0

var stilart = "radioknapper" //drop_down, ja_nei, radioknapper

var overskrift_rapporter_symptomer_div = document.createElement("div")
overskrift_rapporter_symptomer_div.classList.add("overskrift_sentrum_div")
overskrift_rapporter_symptomer_div.style.padding = "0px";
overskrift_rapporter_symptomer_div.innerHTML = "<h3>Bivirkninger siste døgn</h3>"

var liste_bivirkninger_div = document.createElement("div")
liste_bivirkninger_div.classList.add("liste_bivirkninger_div")

var legg_inn_alle_bivirkninger_div = document.createElement("div")
legg_inn_alle_bivirkninger_div.classList.add("legg_inn_alle_bivirkninger_div")


var overflate_div = document.createElement("div")
overflate_div.id = "overflate_div"

var overflate_div_blank = document.createElement("div")
overflate_div_blank.id = "overflate_div_blank"

overflate_content.appendChild(overflate_div)
overflate_content.appendChild(overflate_div_blank)

VisSymptomerSisteDogn = function() {
	status_bivirkninger = []
	for (var i = 0; i < bivirkninger_array.length; i++) {
		status_bivirkninger.push([bivirkninger_array[i][0]])
	}
	console.log(status_bivirkninger)

	content.innerHTML = ""
	content.appendChild(overskrift_rapporter_symptomer_div)
	content.appendChild(liste_bivirkninger_div)
	content.appendChild(legg_inn_alle_bivirkninger_div)
	OppdaterFargePaKnapp(legg_inn_alle_bivirkninger_knapp)

	content.appendChild(tilbake_til_start_meny_div)

	LagListe(bivirkninger_array)
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
		LagBivirkningElement(i, array, hver_bivirkning_div, stilart)
		liste_bivirkninger_div.appendChild(hver_bivirkning_div)
	}
}

LagBivirkningElement = function (i, array, hver_bivirkning_div, stilart) {
	hver_bivirkning_div.innerHTML = ""
	//console.log(hver_bivirkning_div)

	var bivirkningen = bivirkninger_array[i][0]
	var bivirkningen_array = bivirkninger_array[i]

	var sporsmal_div = document.createElement("div")
	var innhold_div = document.createElement("div")
	var resultat_div = document.createElement("div")

	var endre_knapp = document.createElement("button")
	endre_knapp.innerHTML = "Nullstill"
	endre_knapp.className = "endre_knapp"
	endre_knapp.classList.add("litt_viktig_knapp")
	BindEndreKnapp(i, bivirkningen, endre_knapp, hver_bivirkning_div, stilart)

	if (stilart == "drop_down") {
		LagBivirkningElementForDropDownV2(i, bivirkningen, bivirkningen_array, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
	}
	else if (stilart == "ja_nei") {
		LagBivirkningElementForJaNeiKnapperV2(i, bivirkningen, bivirkningen_array, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
	}
	else if (stilart == "radioknapper") {
		LagBivirkningElementForRadioKnapperV2(i, bivirkningen, bivirkningen_array, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
	}
	else if (stilart == "slider") {
		LagBivirkningElementForSliderV2(i, bivirkningen, bivirkningen_array, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
	}
	
	hver_bivirkning_div.appendChild(sporsmal_div)
	hver_bivirkning_div.appendChild(innhold_div)
	hver_bivirkning_div.appendChild(resultat_div)
	VisInformasjonKnappOmBivirkningen(hver_bivirkning_div, bivirkningen)
}

BindEndreKnapp = function (index, bivirkningen, endre_knapp, hver_bivirkning_div, stilart) {
	endre_knapp.onclick = function () {
		console.log(index, stilart)
		
		LagBivirkningElement(index, bivirkninger_array, hver_bivirkning_div, stilart)
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