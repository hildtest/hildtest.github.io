var content = document.getElementById("content")

//dikotom vs. numerisk
var bivirkninger = [["avføring", "numerisk", 6], ["utslett", "dikotom"]]
//["oppkast", "numerisk"], ["utslett", "dikotom"]
var status_bivirkninger = []
for (var i = 0; i < bivirkninger.length; i++) {
	status_bivirkninger.push([bivirkninger[i][0]])
}

var aktuell_index = 0

var stilart_numerisk = "ja_nei" //radioknapper, slider, ja_nei
var stilart_dikotom = "ja_nei"

var liste_bivirkninger_div = document.createElement("div")
liste_bivirkninger_div.classList.add("liste_bivirkninger_div")
content.appendChild(liste_bivirkninger_div)

registrer_alle_bivirkninger_div = document.createElement("div")
registrer_alle_bivirkninger_div.classList.add("registrer_alle_bivirkninger_div")
content.appendChild(registrer_alle_bivirkninger_div)

var oppsummering_bivirkninger_div = document.createElement("div")
oppsummering_bivirkninger_div.classList.add("oppsummering_bivirkninger_div")
oppsummering_bivirkninger_div.style.display = "none"
content.appendChild(oppsummering_bivirkninger_div)

var ring_sykehuset_div = document.createElement("div")
ring_sykehuset_div.classList.add("ring_sykehuset_div")
ring_sykehuset_div.style.display = "none"
content.appendChild(ring_sykehuset_div)

var overflate_div = document.createElement("div")
overflate_div.classList.add("overflate_div")
overflate_div.style.display = "none"
content.appendChild(overflate_div)

var overflate_div_blank = document.createElement("div")
overflate_div_blank.classList.add("overflate_div_blank")
overflate_div_blank.style.display = "none"
content.appendChild(overflate_div_blank)




LagListe = function (array) {
	liste_bivirkninger_div.innerHTML = ""

	for (var i = 0; i < array.length; i++) {
		//var bivirkningen = array[i][0]
		//var bivirkning_talltype = array[i][1]
		var hver_bivirkning_div = document.createElement("div")
		hver_bivirkning_div.className = "bivirkninger"
		LagBivirkningElement(i, array, hver_bivirkning_div, stilart_numerisk)
		liste_bivirkninger_div.appendChild(hver_bivirkning_div)
	}
}

LagBivirkningElement = function (i, array, hver_bivirkning_div, stilart_numerisk) {
	hver_bivirkning_div.innerHTML = ""

	var bivirkningen = array[i][0]
	var bivirkning_talltype = array[i][1]

	var sporsmal_div = document.createElement("div")
	var innhold_div = document.createElement("div")
	var resultat_div = document.createElement("div")

	var endre_knapp = document.createElement("button")
	endre_knapp.innerHTML = "Endre"
	endre_knapp.className = "endre_knapp"
	BindEndreKnapp(i, bivirkningen, endre_knapp, hver_bivirkning_div, bivirkning_talltype, stilart_numerisk)

	if (bivirkning_talltype == "numerisk") {
		if (stilart_numerisk == "radioknapper") {
			LagBivirkningElementForRadioKnapper(i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
		}
		else if (stilart_numerisk == "slider") {
			LagBivirkningElementForSlider(i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
		}
		else if (stilart_numerisk == "ja_nei") {
			var bivirkningen_grense = array[i][2]
			LagBivirkningElementForJaNeiKnapperMedGrense(i, bivirkningen, bivirkningen_grense, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
		}
	}
	else if (bivirkning_talltype == "dikotom") {
		LagBivirkningElementForJaNeiKnapper(i, bivirkningen, hver_bivirkning_div, sporsmal_div, innhold_div, resultat_div, endre_knapp)
	}
	hver_bivirkning_div.appendChild(sporsmal_div)
	hver_bivirkning_div.appendChild(innhold_div)
	hver_bivirkning_div.appendChild(resultat_div)
	VisInformasjonKnappOmBivirkningen(hver_bivirkning_div, bivirkningen)
}

BindEndreKnapp = function (index, bivirkningen, endre_knapp, hver_bivirkning_div, bivirkning_talltype, stilart_numerisk) {
	endre_knapp.onclick = function () {
		//console.log(index)
		LagBivirkningElement(index, bivirkningen, bivirkning_talltype, hver_bivirkning_div, stilart_numerisk)
		hver_bivirkning_div.classList.remove("active_div")
	}
}

VisDivSomGarOverInnhold = function () {
	
}

SkjulDiv = function (div) {
	console.log(div)
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