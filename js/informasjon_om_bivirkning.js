VisInformasjonKnappOmBivirkningen = function (hver_bivirkning_div, bivirkningen) {
	var informasjon_om_bivirkningen_div = document.createElement("div")
	informasjon_om_bivirkningen_div.className = "informasjon_om_bivirkningen_div"
	var informasjon_om_bivirkningen_knapp = document.createElement("button")
	informasjon_om_bivirkningen_knapp.classList.add("forstorret_knapp")
	informasjon_om_bivirkningen_knapp.classList.add("ingen_kant_eller_bakgrunn")
	informasjon_om_bivirkningen_knapp.innerHTML = "&#9432"
	informasjon_om_bivirkningen_div.appendChild(informasjon_om_bivirkningen_knapp)
	hver_bivirkning_div.appendChild(informasjon_om_bivirkningen_div)

	BindHendelseInformasjonOmBivirkningen(informasjon_om_bivirkningen_knapp, bivirkningen)
}

BindHendelseInformasjonOmBivirkningen = function (knapp, bivirkningen) {
	knapp.onclick = function () {
		//console.log(bivirkningen)
		VisRelevantInformasjon(overflate_div, overflate_div_blank, bivirkningen)
	}
}

VisRelevantInformasjon = function (div, div_blank, bivirkningen) {
	div.style.display = "block"
	div_blank.style.display = "block"
	div_blank.style.padding = "0px"
	div.innerHTML = ""
	div.innerHTML += "Her står det relevant informasjon om bivirkningen. <br>"
	div.innerHTML += "Som hvor vanlig den er, hvorfor den er alvorlig og hva man bør gjøre hvis den er såpass alvorlig.<br>"
	div.innerHTML += "<br>"

	var tilbake_til_bivirkning_oversikt_knapp = document.createElement("button")
	tilbake_til_bivirkning_oversikt_knapp.innerHTML = "Tilbake"
	div.appendChild(tilbake_til_bivirkning_oversikt_knapp)

	tilbake_til_bivirkning_oversikt_knapp.onclick = function () {
		SkjulDiv(overflate_div)
		SkjulDiv(overflate_div_blank)
	}
}

overflate_div_blank.onclick = function () {
	SkjulDiv(overflate_div)
	SkjulDiv(overflate_div_blank)
}