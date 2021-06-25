
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

var tilbake_til_oversikt_over_bivirkninger_knapp = document.createElement("button")
tilbake_til_oversikt_over_bivirkninger_knapp.classList.add("viktig_knapp")
tilbake_til_oversikt_over_bivirkninger_knapp.innerHTML = "Tilbake til symptomer siste døgn"

send_inn_alle_bivirkninger_knapp_container.innerHTML = ""
send_inn_alle_bivirkninger_knapp_container.appendChild(tilbake_til_oversikt_over_bivirkninger_knapp)
send_inn_alle_bivirkninger_knapp_container.appendChild(send_inn_alle_bivirkninger_knapp)

var ring_sykehuset_knapp_container = document.createElement("div")
ring_sykehuset_knapp_container.classList.add("knapp_i_sentrum_container")

var ring_sykehuset_knapp = document.createElement("button")
ring_sykehuset_knapp.classList.add("viktig_knapp")
ring_sykehuset_knapp.innerHTML = "Ring &#9742;"

var tilbake_til_oppsummering_av_bivirkninger_knapp = document.createElement("button")
tilbake_til_oppsummering_av_bivirkninger_knapp.classList.add("viktig_knapp")
tilbake_til_oppsummering_av_bivirkninger_knapp.innerHTML = "Tilbake til oppsummering av symptomer"

ring_sykehuset_knapp_container.appendChild(ring_sykehuset_knapp)
ring_sykehuset_knapp_container.appendChild(tilbake_til_oppsummering_av_bivirkninger_knapp)


SjekkAtAlleBivirkningerErRegistrert = function () {
	antall_mangler = 0;
	for (var i = 0; i < status_bivirkninger.length; i++) {
		if (status_bivirkninger[i].length < 3) {
			console.log(status_bivirkninger[i][0] + " ikke lagt inn")
			antall_mangler += 1
		}
	}
	return antall_mangler
}

SjekkOmNoenBivirkningerErAlvorlige = function () {
	antall_alvorlige = 0;
	for (var i = 0; i < status_bivirkninger.length; i++) {
		//console.log(status_bivirkninger[i][0], status_bivirkninger[i][1], status_bivirkninger[i][2])
		var grense = status_bivirkninger[i][1]

		//hvis grensen er numerisk
		if (Number(grense)) {
			if (status_bivirkninger[i][2][0] >= grense) {
				//console.log(status_bivirkninger[i][1] + " er grensen, " + status_bivirkninger[i][2] + " er for mye")
				antall_alvorlige += 1
			}
		}
		//hvis ja-nei
		else {
			if (status_bivirkninger[i][2].toLowerCase() == grense.toLowerCase()) {
				//console.log(status_bivirkninger[i][1] + " er grensen, " + status_bivirkninger[i][2] + " er for mye")
				antall_alvorlige += 1
			}
		}
		
	}
	return antall_alvorlige
}

VisRegisterteBivirkninger = function (status_bivirkninger) {

	content.innerHTML = ""
	content.appendChild(overskrift_rapporter_symptomer_div)
	content.appendChild(oppsummering_bivirkninger_div)

	oppsummering_bivirkninger_div.innerHTML = "Oppsummering av bivirkninger: <br><br>"
	for (var i = 0; i < status_bivirkninger.length; i++) {
		var bivirkningen = GjorForsteBokstavStor(status_bivirkninger[i][0])
		oppsummering_bivirkninger_div.innerHTML += "- " + bivirkningen + ": " + status_bivirkninger[i][2] + "<br>"
	}
	content.appendChild(send_inn_alle_bivirkninger_knapp_container)

	content.appendChild(tilbake_til_start_meny_div)
}

VisRingSykehuset = function () {
	console.log("alvorlig")

	content.innerHTML = ""
	content.appendChild(ring_sykehuset_div)

	ring_sykehuset_div.innerHTML = ""
	ring_sykehuset_div.innerHTML += "Du har registrert en eller flere bivirkninger som er alvorlig og kan potensielt påvirke behandlingsplanen. Du bør ringe sykehuset for å avklare situasjonen med en sykepleier. <br><br>"
	
	content.appendChild(ring_sykehuset_knapp_container)

	content.appendChild(tilbake_til_start_meny_div)
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
		content.innerHTML = ""
		VisStartMenyBivirkninger()
	}
	else {
		//noe alvorlig, bedt om å ringe sykehuset
		VisRingSykehuset()
	}
}

ring_sykehuset_knapp.onclick = function () {
	console.log("ikke alvorlig")
	content.innerHTML = ""
	VisStartMenyBivirkninger()
}

tilbake_til_oversikt_over_bivirkninger_knapp.onclick = function () {
	content.innerHTML = ""
	content.appendChild(overskrift_rapporter_symptomer_div)
	content.appendChild(liste_bivirkninger_div)
	content.appendChild(legg_inn_alle_bivirkninger_div)
	content.appendChild(tilbake_til_start_meny_div)
}

tilbake_til_oppsummering_av_bivirkninger_knapp.onclick = function () {
	content.innerHTML = ""
	content.appendChild(overskrift_rapporter_symptomer_div)
	content.appendChild(oppsummering_bivirkninger_div)
	content.appendChild(tilbake_til_start_meny_div)
}