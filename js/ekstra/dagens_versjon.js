var content = document.getElementById("content")

var bivirkninger = ["avføring", "oppkast"]

var status_bivirkninger = []


var aktuell_index = 0

var list = document.createElement("div")
list.id = "list"
content.appendChild(list)


LagListe = function (array) {
	list.innerHTML = ""

	for (var i = 0; i < array.length; i++) {
		var hver_bivirkning = document.createElement("div")
		hver_bivirkning.className = "bivirkninger"

		var sporsmal_container = document.createElement("div")
		sporsmal_container.id = "sporsmal_container"
		
		var sporsmal = document.createElement("div")
		sporsmal.id = "sporsmal"
		sporsmal.innerHTML = "Har du hatt mer enn 6 tilfeller med " + array[i] + " det siste døgnet? ";

		var sporsmal_knapper = document.createElement("div")
		sporsmal_knapper.id = "sporsmal_knapper"

		var ja_knapp = document.createElement("button")
		ja_knapp.innerHTML = "Ja"
		var nei_knapp = document.createElement("button")
		nei_knapp.innerHTML = "Nei"

		var endre_knapp = document.createElement("button")
		endre_knapp.innerHTML = "Endre"
		endre_knapp.className = "endre_knapp"
		BindEndreKnapp(i, endre_knapp)

		var innhold_div = document.createElement("div")

		var resultat_div = document.createElement("div")

		BindHendelse(i, array[i], sporsmal_container, innhold_div, resultat_div, sporsmal_knapper, ja_knapp, nei_knapp, endre_knapp)		

		var br = document.createElement("br")
		
		hver_bivirkning.appendChild(sporsmal_container)
		sporsmal_container.appendChild(sporsmal)
		sporsmal_container.appendChild(sporsmal_knapper)
		sporsmal_knapper.appendChild(ja_knapp)
		sporsmal_knapper.appendChild(nei_knapp)
		hver_bivirkning.appendChild(innhold_div)
		hver_bivirkning.appendChild(resultat_div)
		//hver_bivirkning.appendChild(br)
		list.appendChild(hver_bivirkning)
	}
}


BindHendelse = function (index, bivirkningen, sporsmal_container, innhold_div, resultat_div, sporsmal_knapper, ja_knapp, nei_knapp, endre_knapp) {

	angi_knapp = document.createElement("button")
	angi_knapp.innerHTML = "Angi hvor mange " + "&#8681;"

	nei_knapp.onclick = function () {
		console.log(index)
		innhold_div.innerHTML = "<b>Nei</b>";
		aktuell_index = index
		status_bivirkninger[index] = 0
		ja_knapp.style.backgroundColor = "white"
		nei_knapp.style.backgroundColor = "red"
		//sporsmal_knapper.style.display = "none"
	}

	ja_knapp.onclick = function () {
		innhold_div.innerHTML = "<b>Ja</b>"
		ja_knapp.style.backgroundColor = "green"
		nei_knapp.style.backgroundColor = "white"
	}
}

BindEndreKnapp = function (index, endre_knapp) {
	//console.log(index, "endre")
	endre_knapp.onclick = function () {
		//console.log(index)
		EndreBareAktueltElement(index)
	}

}