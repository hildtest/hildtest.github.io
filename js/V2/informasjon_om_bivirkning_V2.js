var bivirkning_informasjon_array = [
	["kvalme", "Kort info om kvalme", "Kvalme er en ubehagelig følelse i mellomgulvet, med eller uten oppkast. Kvalme gir dårligere matlyst og ofte fulgt av oppkast."], 
	
	["oppkast", "Kort info om oppkast", "Oppkast, brekninger, det å kaste opp, er en prosess der mageinnhold kommer opp i og ut gjennom munnen. Oppkast skjer ofte som en ufrivillig refleks, men denne refleksen kan dempes eller fremskyndes med vilje."],
	
	["avføring/diare", "Kort info om avføring/diare", "Avføring, ekskrementer, er de av kroppens avfallsstoffer som skilles ut via endetarmen. Diaré er uvanlig hyppige eller tynne avføringer. Det er store individuelle variasjoner i avføringsmønstre, men avføring som er hyppigere, tynnere eller løsere enn vanlig er en grei definisjon."],
	
	["nevropati/nervebetennelse", "Kort info om nevropati/nervebetennelse", "Nevropati er samlebetegnelse for en rekke sykdommer i perifere nerver og har tidligere blitt omtalt som nervebetennelse. Nevropatier er ulike sykdommer med forskjellige årsaker, som har det felles at det oppstår funksjonsforstyrrelser fordi nervefibrene eller deres isolerende margskjeder ødelegges av sykdomsprosesser. Avhengig av alvorlighetsgraden kan man føle prikking i huden eller større lammelser og smerter."],

	["hudforandringer", "Kort info om hudforandringer", "Hudforandringer/Hånd-fot syndrom er en tilstand som skaper rødhet, hevelse og eventuelle smerter på hånden eller foten. Disse forandringene kan være av varierende størrelse."],
	
	["munnhulesmerter", "Kort informasjon om munnhulesmerter", "Munnhulesmerter er tilstand hvor det munnhulen er betent, og gir smerter. Dette kan påvirke matinnntaket."],
	
	["feber", "Kort informasjon om feber", "Feber er forhøyet kroppstemperatur som følge av sykdom. Feber er et symptom, ikke en sykdom i seg selv."],
	
	["magesmerter", "Kort informasjon om magesmerter", "Magesmerter er en tilstand hvor man kjenner på smerter i mageregionen."],
]

VisInformasjonKnappOmBivirkningen = function (hver_bivirkning_div, bivirkningen) {
	var informasjon_om_bivirkningen_container_div = document.createElement("div")
	informasjon_om_bivirkningen_container_div.className = "informasjon_om_bivirkningen_container_div"
	//informasjon_om_bivirkningen_container_div.innerHTML = "Hei"
	var informasjon_om_bivirkningen_div = document.createElement("div")
	informasjon_om_bivirkningen_div.className = "informasjon_om_bivirkningen_div"
	var informasjon_om_bivirkningen_knapp = document.createElement("button")
	informasjon_om_bivirkningen_knapp.classList.add("litt_viktig_knapp")
	//informasjon_om_bivirkningen_knapp.classList.add("forstorret_knapp")
	//informasjon_om_bivirkningen_knapp.classList.add("ingen_kant_eller_bakgrunn")
	informasjon_om_bivirkningen_knapp.innerHTML = "Mer info"//"&#9432"
	informasjon_om_bivirkningen_div.appendChild(informasjon_om_bivirkningen_knapp)
	informasjon_om_bivirkningen_container_div.appendChild(informasjon_om_bivirkningen_div)

	hver_bivirkning_div.appendChild(informasjon_om_bivirkningen_container_div)

	BindHendelseInformasjonOmBivirkningen(informasjon_om_bivirkningen_knapp, bivirkningen)
}

BindHendelseInformasjonOmBivirkningen = function (knapp, bivirkningen) {
	knapp.onclick = function () {
		console.log(bivirkningen)
		overflate_content.style.zIndex = 2
		console.log(overflate_content)
		console.log(overflate_div)
		VisRelevantInformasjon(bivirkningen, bivirkning_informasjon_array)
	}
}

VisRelevantInformasjon = function (bivirkningen, bivirkning_informasjon_array) {
	overflate_div.innerHTML = ""
	overflate_div.classList.add("tekst_innhold")
	/*
	overflate_div.innerHTML += "Her står det relevant informasjon om bivirkningen. <br>"
	overflate_div.innerHTML += "Som hvor vanlig den er, hvorfor den er alvorlig og hva man bør gjøre hvis den er såpass alvorlig.<br>"
	*/
	var bivirkninger_navn_array = []
	for (var i = 0; i < bivirkning_informasjon_array.length; i++) {
		bivirkninger_navn_array.push(bivirkning_informasjon_array[i][0])
	}
	var riktig_index = bivirkninger_navn_array.indexOf(bivirkningen)

	overflate_div.innerHTML += "<h3>"+bivirkning_informasjon_array[riktig_index][1] + "</h3>"
	overflate_div.innerHTML += bivirkning_informasjon_array[riktig_index][2] + "<br>"
	overflate_div.innerHTML += "<br>"

	var tilbake_til_bivirkning_oversikt_knapp = document.createElement("button")
	tilbake_til_bivirkning_oversikt_knapp.classList.add("litt_viktig_knapp")
	tilbake_til_bivirkning_oversikt_knapp.innerHTML = "Tilbake"
	overflate_div.appendChild(tilbake_til_bivirkning_oversikt_knapp)

	tilbake_til_bivirkning_oversikt_knapp.onclick = function () {
		overflate_content.style.zIndex = -1
	}
}

overflate_div_blank.onclick = function () {
	overflate_content.style.zIndex = -1
}

VisInformasjonOmArBivirkningerMangler = function (manglende_bivirkninger_array) {
	overflate_div.innerHTML = ""
	overflate_div.innerHTML += "Ikke alle bivirkninger har blitt tildelt en verdi, vennligst legg inn informasjon for å gå videre.<br>"
	overflate_div.innerHTML += "<br>"

	overflate_div.innerHTML += "Følgende bivirkninger er ikke lagt inn: <br>"
	for (var i = 0; i < manglende_bivirkninger_array.length; i++) {
		overflate_div.innerHTML += "-" + GjorForsteBokstavStor(manglende_bivirkninger_array[i]) + "<br>"
	}

	var tilbake_til_bivirkning_oversikt_knapp = document.createElement("button")
	tilbake_til_bivirkning_oversikt_knapp.classList.add("litt_viktig_knapp")
	tilbake_til_bivirkning_oversikt_knapp.innerHTML = "Tilbake"
	overflate_div.appendChild(tilbake_til_bivirkning_oversikt_knapp)

	tilbake_til_bivirkning_oversikt_knapp.onclick = function () {
		overflate_content.style.zIndex = -1
	}
}