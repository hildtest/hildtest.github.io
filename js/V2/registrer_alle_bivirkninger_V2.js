var oppsummering_bivirkninger_div = document.createElement("div")
oppsummering_bivirkninger_div.classList.add("oppsummering_bivirkninger_div")
oppsummering_bivirkninger_div.classList.add("tekst_innhold")

var ring_sykehuset_div = document.createElement("div")
ring_sykehuset_div.classList.add("ring_sykehuset_div")

var overskrift_advarsel_symptomer_div = document.createElement("div")
overskrift_advarsel_symptomer_div.classList.add("overskrift_sentrum_div")
overskrift_advarsel_symptomer_div.style.padding = "0px";
overskrift_advarsel_symptomer_div.innerHTML = "<h3>Advarsel</h3>"

var tekst_advarsel_symptomer_div = document.createElement("div")
tekst_advarsel_symptomer_div.classList.add("tekst_innhold")


var legg_inn_alle_bivirkninger_knapp = document.createElement("button")
legg_inn_alle_bivirkninger_knapp.classList.add("viktig_knapp")
legg_inn_alle_bivirkninger_knapp.classList.add("ikke_klar_knapp")
legg_inn_alle_bivirkninger_knapp.innerHTML = "Vis oppsummering (og gjør klar til innsending)"

legg_inn_alle_bivirkninger_div.appendChild(legg_inn_alle_bivirkninger_knapp)

var send_inn_alle_bivirkninger_knapp_container = document.createElement("div")
send_inn_alle_bivirkninger_knapp_container.classList.add("knapp_i_sentrum_container")

var send_inn_alle_bivirkninger_knapp = document.createElement("button")
send_inn_alle_bivirkninger_knapp.classList.add("viktig_knapp")
send_inn_alle_bivirkninger_knapp.innerHTML = "Send inn bivirkninger"

var tilbake_til_oversikt_over_bivirkninger_knapp = document.createElement("button")
tilbake_til_oversikt_over_bivirkninger_knapp.classList.add("viktig_knapp")
tilbake_til_oversikt_over_bivirkninger_knapp.innerHTML = "Tilbake til bivirkninger siste døgn"

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
tilbake_til_oppsummering_av_bivirkninger_knapp.innerHTML = "Tilbake til oppsummering av bivirkninger"

ring_sykehuset_knapp_container.appendChild(ring_sykehuset_knapp)
ring_sykehuset_knapp_container.appendChild(tilbake_til_oppsummering_av_bivirkninger_knapp)


var varsel_trekant_div_container = document.createElement("div")
varsel_trekant_div_container.classList.add = "varsel_trekant_div_container"


var varsel_trekant_svg_container = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var svg_storrelse = 200
varsel_trekant_svg_container.setAttribute("width", svg_storrelse);
varsel_trekant_svg_container.setAttribute("height", svg_storrelse-25);

var varsel_trekant_polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
varsel_trekant_polygon.setAttribute("points", "10,160 100,10 190,160");
varsel_trekant_polygon.setAttribute("fill", "yellow");
varsel_trekant_polygon.setAttribute("stroke", "black")
varsel_trekant_polygon.setAttribute("stroke-width", "10")

varsel_trekant_svg_container.appendChild(varsel_trekant_polygon)
varsel_trekant_div_container.appendChild(varsel_trekant_svg_container)


SjekkAtAlleBivirkningerErRegistrert = function () {
	var antall_mangler = 0;
	for (var i = 0; i < status_bivirkninger.length; i++) {
		if (status_bivirkninger[i].length < 3) {
			//console.log(status_bivirkninger[i][0] + " ikke lagt inn")
			antall_mangler += 1
		}
	}
	return antall_mangler
}

FinnManglendeBivirkninger = function () {
	var mangler_array = [];
	for (var i = 0; i < status_bivirkninger.length; i++) {
		if (status_bivirkninger[i].length < 3) {
			//console.log(status_bivirkninger[i][0] + " ikke lagt inn")
			mangler_array.push(status_bivirkninger[i][0])
		}
	}
	return mangler_array
}
 
SjekkOmNoenBivirkningerErAlvorlige = function () {
	var antall_alvorlige = 0;
	for (var i = 0; i < status_bivirkninger.length; i++) {
		if (status_bivirkninger[i][2] > 2) {
			//console.log(status_bivirkninger[i])
			antall_alvorlige += 1
		}		
	}
	return antall_alvorlige
}

FinnHoyesteAlvorlighetsgrad = function () {
	var hoyeste_alvorlighetsgrad = 0
	for (var i = 0; i < status_bivirkninger.length; i++) {
		var aktuell_alvorlighetsgrad = status_bivirkninger[i][2]
		if (hoyeste_alvorlighetsgrad < aktuell_alvorlighetsgrad) {
			hoyeste_alvorlighetsgrad = aktuell_alvorlighetsgrad
		}
		else if (aktuell_alvorlighetsgrad == "0-2") {
			console.log("ikke aktuelt")
			hoyeste_alvorlighetsgrad = "0-2"
		}
		else {
			//nothing happens
		}

	}
	return hoyeste_alvorlighetsgrad
}

VisRegisterteBivirkninger = function (status_bivirkninger) {

	content.scrollTop = 0 + "px"
	content.innerHTML = ""
	content.appendChild(overskrift_rapporter_symptomer_div)
	content.appendChild(oppsummering_bivirkninger_div)

	oppsummering_bivirkninger_div.innerHTML = "Oppsummering av bivirkninger:"
	oppsummering_bivirkninger_div.innerHTML += "<ul>"
	for (var i = 0; i < status_bivirkninger.length; i++) {
		if (stilart == "ja_nei") {
			var bivirkningen = GjorForsteBokstavStor(status_bivirkninger[i][0])
			oppsummering_bivirkninger_div.innerHTML += "<li class='mellomrom_mellom_liste_element'><b>" + bivirkningen + "</b> (" + bivirkninger_array[i][2] + "): <b>" + GjorForsteBokstavStor(status_bivirkninger[i][1])+ "</b></li>"
		}
		else {
			var bivirkningen = GjorForsteBokstavStor(status_bivirkninger[i][0])
			oppsummering_bivirkninger_div.innerHTML += "<li class='mellomrom_mellom_liste_element'><b>" + bivirkningen + "</b>: <b>" + status_bivirkninger[i][1] + "</b></li>"
		}
	}
	oppsummering_bivirkninger_div.innerHTML += "</ul>"
	var hoyeste_alvorlighetsgrad = FinnHoyesteAlvorlighetsgrad()
	oppsummering_bivirkninger_div.innerHTML += "<br>Høyeste alvorlighetsgrad: Grad " + hoyeste_alvorlighetsgrad

	content.appendChild(send_inn_alle_bivirkninger_knapp_container)

	content.appendChild(tilbake_til_start_meny_div)
}

VisRingSykehuset = function () {
	console.log("alvorlig")

	content.scrollTop = 0 + "px"
	content.innerHTML = ""
	content.appendChild(ring_sykehuset_div)

	//Meldingen her:
	ring_sykehuset_div.innerHTML = ""
	ring_sykehuset_div.appendChild(overskrift_advarsel_symptomer_div)
	//ring_sykehuset_div.appendChild(varsel_trekant_div_container)
	tekst_advarsel_symptomer_div.innerHTML = "Du har registrert en/flere bivirkninger som er alvorlige. Du bør ringe sykehuset for å avklare situasjonen med en sykepleier. <br><br>"
	ring_sykehuset_div.appendChild(tekst_advarsel_symptomer_div)


	content.appendChild(ring_sykehuset_knapp_container)

	content.appendChild(tilbake_til_start_meny_div)
}

OppdaterFargePaKnapp = function (knapp) {
	var antall_mangler = SjekkAtAlleBivirkningerErRegistrert()
	console.log(antall_mangler)
	if (antall_mangler > 0) {
		//ikke alt registrert
		knapp.classList.add("ikke_klar_knapp")
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
		//vis informasjon
		var manglende_bivirkninger_array = FinnManglendeBivirkninger()
		overflate_content.style.zIndex = 2
		//console.log(overflate_content)
		//console.log(overflate_div)
		VisInformasjonOmArBivirkningerMangler(manglende_bivirkninger_array)
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
		//console.log(status_bivirkninger)
		//console.log("ikke alvorlig")
		content.innerHTML = ""
		VisStartMenyBivirkninger()
		LeggBivirkningerForDagenInn(status_bivirkninger)
	}
	else {
		//noe alvorlig, bedt om å ringe sykehuset
		VisRingSykehuset()
	}
}

ring_sykehuset_knapp.onclick = function () {
	//console.log("alvorlig")
	content.innerHTML = ""
	VisStartMenyBivirkninger()
	LeggBivirkningerForDagenInn(status_bivirkninger)
}

tilbake_til_oversikt_over_bivirkninger_knapp.onclick = function () {
	content.innerHTML = ""
	content.scrollTop = 0 + "px"
	content.appendChild(overskrift_rapporter_symptomer_div)
	content.appendChild(liste_bivirkninger_div)
	content.appendChild(legg_inn_alle_bivirkninger_div)
	content.appendChild(tilbake_til_start_meny_div)
}

tilbake_til_oppsummering_av_bivirkninger_knapp.onclick = function () {
	content.innerHTML = ""
	content.scrollTop = 0 + "px"
	content.appendChild(overskrift_rapporter_symptomer_div)
	content.appendChild(oppsummering_bivirkninger_div)
	content.appendChild(send_inn_alle_bivirkninger_knapp_container)
	content.appendChild(tilbake_til_start_meny_div)
}