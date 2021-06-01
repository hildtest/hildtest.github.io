
var legg_inn_alle_bivirkninger_knapp = document.createElement("button")
legg_inn_alle_bivirkninger_knapp.classList.add("viktig_knapp")
legg_inn_alle_bivirkninger_knapp.classList.add("ikke_klar_knapp")
legg_inn_alle_bivirkninger_knapp.innerHTML = "Legg inn bivirkninger"

legg_inn_alle_bivirkninger_div.appendChild(legg_inn_alle_bivirkninger_knapp)

var send_inn_alle_bivirkninger_knapp_container = document.createElement("div")
send_inn_alle_bivirkninger_knapp_container.classList.add("knapp_i_sentrum_container")

var send_inn_alle_bivirkninger_knapp = document.createElement("button")
send_inn_alle_bivirkninger_knapp.classList.add("viktig_knapp")
send_inn_alle_bivirkninger_knapp.innerHTML = "Send inn bivirkninger"
send_inn_alle_bivirkninger_knapp_container.appendChild(send_inn_alle_bivirkninger_knapp)

var ring_sykehuset_knapp_container = document.createElement("div")
ring_sykehuset_knapp_container.classList.add("knapp_i_sentrum_container")

var ring_sykehuset_knapp = document.createElement("button")
ring_sykehuset_knapp.classList.add("viktig_knapp")
ring_sykehuset_knapp.innerHTML = "Ring &#9742;"

ring_sykehuset_knapp_container.appendChild(ring_sykehuset_knapp)


SjekkAtAlleBivirkningerErRegistrert = function () {
	antall_mangler = 0;
	for (var i = 0; i < status_bivirkninger.length; i++) {
		if (status_bivirkninger[i].length < 2) {
			console.log(status_bivirkninger[i][0] + " ikke lagt inn")
			antall_mangler += 1
		}
	}
	return antall_mangler
}

SjekkOmNoenBivirkningerErAlvorlige = function () {
	antall_alvorlige = 0;
	for (var i = 0; i < status_bivirkninger.length; i++) {
		console.log(status_bivirkninger[i][0], status_bivirkninger[i][1], status_bivirkninger[i][2])
		var grense = status_bivirkninger[i][1]

		//hvis grensen er numerisk
		if (Number(grense)) {
			if (status_bivirkninger[i][2] >= grense) {
				console.log(status_bivirkninger[i][1] + " er grensen, " + status_bivirkninger[i][2] + " er for mye")
				antall_alvorlige += 1
			}
		}
		//hvis ja-nei
		else {
			if (status_bivirkninger[i][2].toLowerCase() == grense.toLowerCase()) {
				console.log(status_bivirkninger[i][1] + " er grensen, " + status_bivirkninger[i][2] + " er for mye")
				antall_alvorlige += 1
			}
		}
		
	}
	return antall_alvorlige
}

VisRegisterteBivirkninger = function (status_bivirkninger) {
	//console.log(liste_bivirkninger_div)
	SkjulDiv(liste_bivirkninger_div)
	SkjulDiv(legg_inn_alle_bivirkninger_div)
	VisDiv(oppsummering_bivirkninger_div)

	oppsummering_bivirkninger_div.innerHTML = "Oppsummering av bivirkninger: <br><br>"
	for (var i = 0; i < status_bivirkninger.length; i++) {
		var bivirkningen = GjorForsteBokstavStor(status_bivirkninger[i][0])
		oppsummering_bivirkninger_div.innerHTML += "- " + bivirkningen + ": " + status_bivirkninger[i][2] + "<br>"
	}
	oppsummering_bivirkninger_div.innerHTML += "<br>"
	oppsummering_bivirkninger_div.appendChild(send_inn_alle_bivirkninger_knapp_container)
}

VisRingSykehuset = function () {
	console.log("alvorlig")
	SkjulDiv(oppsummering_bivirkninger_div)
	VisDiv(ring_sykehuset_div)

	ring_sykehuset_div.innerHTML = ""
	ring_sykehuset_div.innerHTML += "Du har registrert en eller flere bivirkninger som er alvorlig og kan potensielt påvirke behandlingsplanen. Du bør ringe sykehuset for å avklare situasjonen med en sykepleier. <br><br>"
	ring_sykehuset_div.appendChild(ring_sykehuset_knapp_container)
}

OppdaterFargePaKnapp = function (knapp) {
	var antall_mangler = SjekkAtAlleBivirkningerErRegistrert()
	if (antall_mangler > 0) {
		//ikke alt registrert
	}
	else {
		//gjennomfører registrering
		knapp.classList.remove("ikke_klar_knapp")
	}
}

legg_inn_alle_bivirkninger_knapp.onclick = function () {
	var antall_mangler = SjekkAtAlleBivirkningerErRegistrert()
	if (antall_mangler > 0) {
		//ikke alt registrert
	}
	else {
		//gjennomfører registrering
		console.log(status_bivirkninger)
		VisRegisterteBivirkninger(status_bivirkninger)
	}
}


send_inn_alle_bivirkninger_knapp.onclick = function () {
	var antall_alvorlige = SjekkOmNoenBivirkningerErAlvorlige()
	if (antall_alvorlige == 0) {
		//ikke noe alvorlig
		//starter på nytt
		console.log("ikke alvorlig")
		LagListe(bivirkninger)
		VisDiv(liste_bivirkninger_div)
		VisDiv(legg_inn_alle_bivirkninger_div)
		SkjulDiv(oppsummering_bivirkninger_div)
	}
	else {
		//noe alvorlig, bedt om å ringe sykehuset
		VisRingSykehuset()
	}
}

ring_sykehuset_knapp.onclick = function () {
	console.log("ikke alvorlig")
	LagListe(bivirkninger)
	VisDiv(liste_bivirkninger_div)
	VisDiv(legg_inn_alle_bivirkninger_div)
	SkjulDiv(ring_sykehuset_div)
}