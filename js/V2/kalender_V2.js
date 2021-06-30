var overskrift_kalender_div = document.createElement("div")
overskrift_kalender_div.classList.add("overskrift_sentrum_div")
overskrift_kalender_div.style.padding = "0px";
overskrift_kalender_div.innerHTML = "<h3>Tidligere Symptomer</h3>"

var liste_tidligere_symptomer_div = document.createElement("div")
liste_tidligere_symptomer_div.classList.add("liste_tidligere_symptomer_div")

var dato = new Date();
dd_dato = dato.getDate();

mm_dato = dato.getMonth();

var month_array = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]

var month_information_array = [
	["januar", 31],
	["februar", 28],
	["mars", 31],
	["april", 30],
	["mai", 31],
	["juni", 30],
	["juli", 31],
	["august", 31],
	["september", 30],
	["oktober", 31],
	["november", 30],
	["desember", 31],
]

var standard_rapport = [
	["avføring", 3], ["oppkast", 0], ["magesmerter som begrenser daglig funksjon", "nei"], ["utslett", "nei"], ["blod i avføring", "nei"]
]

var okt_oppkast = [
	["avføring", 2], ["oppkast", 1], ["magesmerter som begrenser daglig funksjon", "nei"], ["utslett", "nei"], ["blod i avføring", "nei"]
]

var alvorlig_okt_avføring_og_magesmerter = [
	["avføring", 7], ["oppkast", 0], ["magesmerter som begrenser daglig funksjon", "ja"], ["utslett", "nei"], ["blod i avføring", "nei"]
]
//dato (this dato-modifikasjon), alvorlighets-grad, anmerkninger, utfyllende
tidligere_symptomer_array = [
	[[dd_dato-7, month_array[mm_dato]], "lav", "Ingen anmerkninger", standard_rapport],
	[[dd_dato-6, month_array[mm_dato]], "lav", "Ingen anmerkninger", standard_rapport],
	[[dd_dato-5, month_array[mm_dato]], "lav", "Ingen anmerkninger", standard_rapport],
	[[dd_dato-4, month_array[mm_dato]], "lav", "Ingen anmerkninger", standard_rapport],
	[[dd_dato-3, month_array[mm_dato]], "middels", "Ikke alvorlig, men økt oppkast", okt_oppkast],
	[[dd_dato-2, month_array[mm_dato]], "lav", "Ingen anmerkninger", standard_rapport],
	[[dd_dato-1, month_array[mm_dato]], "hoy", "Alvorlig økt avføring og alvorlig økte magesmerter", alvorlig_okt_avføring_og_magesmerter],
]

var standard_rapport = [
	["avføring", 3], ["oppkast", 0], ["magesmerter som begrenser daglig funksjon", "nei"], ["utslett", "nei"], ["blod i avføring", "nei"]
]

for (var i = 0; i < tidligere_symptomer_array.length; i++) {
	if (tidligere_symptomer_array[i][0][0] < 1) {
		if (mm_dato <= 0) {
			mm_dato = 12
		}
		tidligere_symptomer_array[i][0][0] = month_information_array[mm_dato-1][1]-Math.abs(tidligere_symptomer_array[i][0][0])
		tidligere_symptomer_array[i][0][1] = month_array[mm_dato-1]
	}
}


VisTidligereSymptomer= function () {
	console.log("kalender")

	content.appendChild(overskrift_kalender_div)
	content.appendChild(liste_tidligere_symptomer_div)

	LagListeDato(tidligere_symptomer_array)

	content.appendChild(tilbake_til_start_meny_div)
}

LagListeDato = function (array) {
	liste_tidligere_symptomer_div.innerHTML = ""

	for (var i = 0; i < array.length; i++) {
		//console.log(array[i][0])
		var hver_dato_div = document.createElement("div")
		hver_dato_div.className = "dato_container_div"
		LagDatoElement(i, array, hver_dato_div)
		liste_tidligere_symptomer_div.appendChild(hver_dato_div)
	}
}

LagDatoElement = function (i, array, hver_dato_div) {
	//console.log("dato")
	hver_dato_div.innerHTML = ""
	//legger til bakgrunn basert på alvorlighetsgrad
	hver_dato_div.classList.add(array[i][1])

	var hver_dato_hovedinformasjon_container_div = document.createElement("div")
	hver_dato_hovedinformasjon_container_div.classList.add("hver_dato_hovedinformasjon_container_div")

	var dato_div = document.createElement("div")
	dato_div.classList.add("dato_div")

	var alvorlighetsgrad_div = document.createElement("div")
	alvorlighetsgrad_div.classList.add("alvorlighetsgrad_div")

	var anmerkninger_div = document.createElement("div")
	anmerkninger_div.classList.add("anmerkninger_div")

	hver_dato_hovedinformasjon_container_div.appendChild(dato_div)
	hver_dato_hovedinformasjon_container_div.appendChild(alvorlighetsgrad_div)
	hver_dato_hovedinformasjon_container_div.appendChild(anmerkninger_div)


	dato_div.innerHTML = "<div class='dd'>" + array[i][0][0] + ".</div><div class='mm'>" + array[i][0][1] + "</div>"

	//hard kodet at ø-kommer inn
	if (array[i][1] == "hoy") {
		alvorlighetsgrad_div.innerHTML = "Høy"
	}
	else {
		alvorlighetsgrad_div.innerHTML = GjorForsteBokstavStor(array[i][1])
	}
	
	anmerkninger_div.innerHTML = array[i][2]


	var utfyllende_informasjon_div = document.createElement("div")
	utfyllende_informasjon_div.innerHTML = ""
	utfyllende_informasjon_div.classList.add("utfyllende_informasjon_div")


	hver_dato_div.appendChild(hver_dato_hovedinformasjon_container_div)
	hver_dato_div.appendChild(utfyllende_informasjon_div)


	var count = 0

	BindHendelseHverDatoDiv(i, array, hver_dato_div, utfyllende_informasjon_div, count)
}

BindHendelseHverDatoDiv = function (i, array, div, utfyllende_informasjon_div, count) {
	div.onmouseover = function () {
		//div.style.filter = "brightness(0.9)"
		//div.style.fontWeight = "bold"
		//console.log(div)
	}
	div.onmouseout = function () {
		//div.style.filter = "brightness(1.0)"
		//div.style.fontWeight = "normal"
	}
	div.onclick = function function_name() {
		NullstillAlleElement()
		VisTidligereSymptomerForDag(i, array, div, utfyllende_informasjon_div, count)
		div.style.filter = "brightness(0.9)"
		div.style.fontWeight = "bold"
	}
}

VisTidligereSymptomerForDag = function (i, array, div, utfyllende_informasjon_div, count) {
	console.log("hei", array[i])
	var element = array[i]
	var rapport = element[3]
	utfyllende_informasjon_div.innerHTML = ""


	for (var i = 0; i < rapport.length; i++) {
		console.log(rapport[i])
		var bivirkningen = GjorForsteBokstavStor(rapport[i][0])
		utfyllende_informasjon_div.innerHTML += "- " + bivirkningen + ": " + rapport[i][1] + "<br>"
	}

	var minimer_knapp = document.createElement("button")
	minimer_knapp.innerHTML = "Minimer"
	utfyllende_informasjon_div.appendChild(minimer_knapp)

	div.onclick = function () {
		LagListeDato(tidligere_symptomer_array)
	}

}

NullstillAlleElement = function () {
	liste_med_element = document.getElementsByClassName("dato_container_div")
	utfyllende_informasjon_div_elementer = document.getElementsByClassName("utfyllende_informasjon_div")
	console.log(liste_med_element)
	for (var i = 0; i < liste_med_element.length; i++) {
		utfyllende_informasjon_div_elementer[i].innerHTML = ""

		var div = liste_med_element[i]
		div.style.filter = "brightness(1.0)"
		div.style.fontWeight = "normal"
	}
}