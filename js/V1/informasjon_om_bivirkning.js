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
		console.log(bivirkningen)
		overflate_content.style.zIndex = 2
		console.log(overflate_content)
		console.log(overflate_div)
		VisRelevantInformasjon(bivirkningen)
	}
}

VisRelevantInformasjon = function (bivirkningen) {
	overflate_div.innerHTML = ""
	overflate_div.innerHTML += "Her står det relevant informasjon om bivirkningen. <br>"
	overflate_div.innerHTML += "Som hvor vanlig den er, hvorfor den er alvorlig og hva man bør gjøre hvis den er såpass alvorlig.<br>"
	overflate_div.innerHTML += "<br>"

	var tilbake_til_bivirkning_oversikt_knapp = document.createElement("button")
	tilbake_til_bivirkning_oversikt_knapp.innerHTML = "Tilbake"
	overflate_div.appendChild(tilbake_til_bivirkning_oversikt_knapp)

	tilbake_til_bivirkning_oversikt_knapp.onclick = function () {
		overflate_content.style.zIndex = -1
	}
}

overflate_div_blank.onclick = function () {
	overflate_content.style.zIndex = -1
}