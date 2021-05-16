var content = document.getElementById("content")

//dikotom vs. numerisk
var bivirkninger = [["avføring", "numerisk"], ["utslett", "dikotom"]]
//["oppkast", "numerisk"], ["utslett", "dikotom"]
var status_bivirkninger = []
for (var i = 0; i < bivirkninger.length; i++) {
	status_bivirkninger.push([bivirkninger[i][0]])
}

var aktuell_index = 0

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


LagListe = function (array) {
	liste_bivirkninger_div.innerHTML = ""

	for (var i = 0; i < array.length; i++) {
		var bivirkningen = array[i][0]
		var bivirkning_talltype = array[i][1]
		var hver_bivirkning_div = document.createElement("div")
		hver_bivirkning_div.className = "bivirkninger"
		if (bivirkning_talltype == "numerisk") {
			LagBivirkningElementForRadioKnapper(i, bivirkningen, hver_bivirkning_div)
		}
		else {
			LagBivirkningElementForJaNeiKnapper(i, bivirkningen, hver_bivirkning_div)
		}
		liste_bivirkninger_div.appendChild(hver_bivirkning_div)
	}
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