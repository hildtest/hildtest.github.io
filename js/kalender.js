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

//dato (this dato-modifikasjon), alvorlighets-grad, anmerkninger, utfyllende
tidligere_symptomer_array = [
	[[dd_dato-7, month_array[mm_dato]], "lav", "Ingen anmerkninger"],
	[[dd_dato-6, month_array[mm_dato]], "lav", "Ingen anmerkninger"],
	[[dd_dato-5, month_array[mm_dato]], "lav", "Ingen anmerkninger"],
	[[dd_dato-4, month_array[mm_dato]], "lav", "Ingen anmerkninger"],
	[[dd_dato-3, month_array[mm_dato]], "middels", "Økt på oppkast, og milde magesmerter"],
	[[dd_dato-2, month_array[mm_dato]], "lav", "Ingen anmerkninger"],
	[[dd_dato-1, month_array[mm_dato]], "hoy", "Alvorlig økt avføring og alvorlig økte magesmerter"],
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

	content.appendChild(tilbake_til_start_meny_knapp)
	content.appendChild(overskrift_kalender_div)
	content.appendChild(liste_tidligere_symptomer_div)

	LagListeDato(tidligere_symptomer_array)
}

LagListeDato = function (array) {
	liste_tidligere_symptomer_div.innerHTML = ""

	for (var i = 0; i < array.length; i++) {
		//console.log(array[i][0])
		var hver_dato_div = document.createElement("div")
		hver_dato_div.className = "dato_container_div"
		LagDatoElement(i, array, hver_dato_div)
		liste_tidligere_symptomer_div.appendChild(hver_dato_div)
		BindHendelseHverDatoDiv(hver_dato_div)
	}
}

LagDatoElement = function (i, array, hver_dato_div) {
	//console.log("dato")
	hver_dato_div.innerHTML = ""
	hver_dato_div.classList.add(array[i][1])

	dato_div = document.createElement("div")
	dato_div.classList.add("dato_div")

	alvorlighetsgrad_div = document.createElement("div")
	alvorlighetsgrad_div.classList.add("alvorlighetsgrad_div")

	anmerkninger_div = document.createElement("div")
	anmerkninger_div.classList.add("anmerkninger_div")

	dato_div.innerHTML = "<div class='dd'>" + array[i][0][0] + ".</div><div class='mm'>" + array[i][0][1] + "</div>"

	//hard kodet at ø-kommer inn
	if (array[i][1] == "hoy") {
		alvorlighetsgrad_div.innerHTML = "Høy"
	}
	else {
		alvorlighetsgrad_div.innerHTML = GjorForsteBokstavStor(array[i][1])
	}
	
	anmerkninger_div.innerHTML = array[i][2]

	hver_dato_div.appendChild(dato_div)
	hver_dato_div.appendChild(alvorlighetsgrad_div)
	hver_dato_div.appendChild(anmerkninger_div)

}

BindHendelseHverDatoDiv = function (div) {
	div.onmouseover = function () {
		div.style.filter = "brightness(0.9)"
		div.style.fontWeight = "bold"
		console.log(div)
	}
	div.onmouseout = function () {
		div.style.filter = "brightness(1.0)"
		div.style.fontWeight = "normal"
	}
}