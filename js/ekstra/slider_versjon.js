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
		sporsmal.innerHTML = "Har du hatt " + array[i] + " det siste døgnet? ";

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
		innhold_div.innerHTML = "<b>Registrert 0 tilfeller av " + bivirkningen + "</b> ";
		aktuell_index = index
		innhold_div.appendChild(endre_knapp)
		status_bivirkninger[index] = 0
		ja_knapp.style.backgroundColor = "white"
		nei_knapp.style.backgroundColor = "red"
		sporsmal_knapper.style.display = "none"
	}

	ja_knapp.onclick = function () {
		innhold_div.innerHTML = "Angi hvor mange ved å dra i slideren<br>"
		ja_knapp.style.backgroundColor = "green"
		nei_knapp.style.backgroundColor = "white"
		sporsmal_knapper.style.display = "none"

		aktuell_index = index
		console.log(aktuell_index)
		LagSlider(index, innhold_div, resultat_div, bivirkningen, endre_knapp)

	}
}

LagSlider = function (index, innhold_div, resultat_div, bivirkningen, endre_knapp) {

	var slider_div = document.createElement("slider")
	slider_div.className = "slidecontainer"

	var slider = document.createElement("input")
	slider.className = "slider"
	slider.type = "range"
	slider.min = 1
	slider.max = 10
	slider.value = 1

	//console.log(slider.value)

	var start_tekst = document.createTextNode("1")
	var slutt_tekst = document.createTextNode("10+")
	slider_div.appendChild(start_tekst)
	slider_div.appendChild(slider)
	slider_div.appendChild(slutt_tekst)
	innhold_div.appendChild(slider_div)

	var registrer_knapp = document.createElement("button")
	registrer_knapp.innerHTML = "Bekreft"	

	BindHendelseSlider(index, innhold_div, slider, resultat_div, bivirkningen, registrer_knapp, endre_knapp)

}

BindHendelseSlider = function (index, innhold_div, slider, resultat_div, bivirkningen, registrer_knapp, endre_knapp) {
	slider.oninput = function () {
		console.log(slider.value, slider.max)

		if (slider.value == slider.max) {
			resultat_div.innerHTML = "Antall: " + this.value + "+"
		}
		else {
			resultat_div.innerHTML = "Antall: " + this.value
		}
	}

	slider.onchange = function () {
		if (slider.value == slider.max) {
			resultat_div.innerHTML += "<br>Har du opplevd " + this.value + " eller mer hendelser med " + bivirkningen + " ";
		}
		else {
			resultat_div.innerHTML += "<br>Har du opplevd " + this.value + " hendelser med " + bivirkningen + " ";
		}
		resultat_div.appendChild(registrer_knapp)
	}

	registrer_knapp.onclick = function () {
		console.log(slider.value, bivirkningen)
		innhold_div.innerHTML = "<b>Registrert " + slider.value + " tilfeller av " + bivirkningen + "</b> ";
		resultat_div.innerHTML = ""
		innhold_div.appendChild(endre_knapp)
	}
}


EndreBareAktueltElement = function (aktuell_index) {
	var element_liste = document.getElementsByClassName("bivirkninger")
	var aktuelt_element = element_liste[aktuell_index]
	console.log(aktuelt_element)

	aktuelt_element.innerHTML = ""

	var sporsmal_container = document.createElement("div")
	sporsmal_container.id = "sporsmal_container"
		
	var sporsmal = document.createElement("div")
	sporsmal.id = "sporsmal"
	sporsmal.innerHTML = "Har du hatt " + bivirkninger[aktuell_index] + " det siste døgnet? ";

	var sporsmal_knapper = document.createElement("div")
	sporsmal_knapper.id = "sporsmal_knapper"

	var ja_knapp = document.createElement("button")
	ja_knapp.innerHTML = "Ja"
	var nei_knapp = document.createElement("button")
	nei_knapp.innerHTML = "Nei"

	var endre_knapp = document.createElement("button")
	endre_knapp.innerHTML = "Endre"
	endre_knapp.className = "endre_knapp"
	BindEndreKnapp(aktuell_index, endre_knapp)

	var innhold_div = document.createElement("div")

	var resultat_div = document.createElement("div")

	BindHendelse(aktuell_index, bivirkninger[aktuell_index] , sporsmal_container, innhold_div, resultat_div, sporsmal_knapper, ja_knapp, nei_knapp, endre_knapp)

	var br = document.createElement("br")
		
	aktuelt_element.appendChild(sporsmal_container)
	sporsmal_container.appendChild(sporsmal)
	sporsmal_container.appendChild(sporsmal_knapper)
	sporsmal_knapper.appendChild(ja_knapp)
	sporsmal_knapper.appendChild(nei_knapp)
	aktuelt_element.appendChild(innhold_div)
	aktuelt_element.appendChild(resultat_div)
}

BindEndreKnapp = function (index, endre_knapp) {
	//console.log(index, "endre")
	endre_knapp.onclick = function () {
		//console.log(index)
		EndreBareAktueltElement(index)
	}

}

LagListe(bivirkninger)