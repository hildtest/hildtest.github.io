LagBivirkningElementForJaNeiKnapper = function (i, bivirkningen, hver_bivirkning_div) {
	hver_bivirkning_div.innerHTML = ""

	var sporsmal_div = document.createElement("div")
	//sporsmal_div.id = "sporsmal_div"
	var innhold_div = document.createElement("div")
	var resultat_div = document.createElement("div")

	var sporsmal_container = document.createElement("div")
	//sporsmal_container.className = "sporsmal_container_flex"

	var sporsmal_knapper_div = document.createElement("div")
	sporsmal_knapper_div.className = "sporsmal_knapper_div"
	
	var sporsmal_innhold_div = document.createElement("div")
	sporsmal_innhold_div.className = "sporsmal_innhold_div"
	sporsmal_innhold_div.innerHTML = "Har du hatt " + bivirkningen + " det siste døgnet? ";

	var ja_knapp = document.createElement("button")
	ja_knapp.innerHTML = "Ja"
	var nei_knapp = document.createElement("button")
	nei_knapp.innerHTML = "Nei"


	var endre_knapp = document.createElement("button")
	endre_knapp.innerHTML = "Endre"
	endre_knapp.className = "endre_knapp"
	BindEndreKnapp(i, bivirkningen, endre_knapp, hver_bivirkning_div)

	BindHendelseJaNeiKnapper(i, bivirkningen, ja_knapp, nei_knapp, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, hver_bivirkning_div)		

	hver_bivirkning_div.appendChild(sporsmal_div)
	sporsmal_div.appendChild(sporsmal_container)
	sporsmal_container.appendChild(sporsmal_innhold_div)
	sporsmal_container.appendChild(sporsmal_knapper_div)
	sporsmal_knapper_div.appendChild(ja_knapp)
	sporsmal_knapper_div.appendChild(nei_knapp)

	hver_bivirkning_div.appendChild(innhold_div)
	hver_bivirkning_div.appendChild(resultat_div)
}

BindHendelseJaNeiKnapper = function (i, bivirkningen, ja_knapp, nei_knapp, sporsmal_div, sporsmal_knapper_div, innhold_div, resultat_div, endre_knapp, hver_bivirkning_div) {
	ja_knapp.onclick = function () {
		ja_knapp.style.backgroundColor = "green"
		ja_knapp.style.opacity = 1
		nei_knapp.style.backgroundColor = "white"
		nei_knapp.style.opacity = 0.5

		hver_bivirkning_div.classList.add("active_div")
		status_bivirkninger[i][1] = "ja"
		console.log(status_bivirkninger)
		resultat_div.innerHTML = "Ja, " + bivirkningen + " opplevd"
		OppdaterFargePaKnapp(registrer_alle_bivirkninger_knapp)
	}
	nei_knapp.onclick = function () {
		ja_knapp.style.backgroundColor = "white"
		ja_knapp.style.opacity = 0.5
		nei_knapp.style.backgroundColor = "red"
		nei_knapp.style.opacity = 1

		hver_bivirkning_div.classList.add("active_div")
		status_bivirkninger[i][1] = "nei"
		console.log(status_bivirkninger)
		resultat_div.innerHTML = "Nei, ingen " + bivirkningen + " opplevd"
		OppdaterFargePaKnapp(registrer_alle_bivirkninger_knapp)
	}
}