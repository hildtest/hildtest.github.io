

//Sortert etter grader
//Merk at for avføring er både 0 og 1-3, normal konsistens definert som grad 0
var bivirkninger_array = [
	["kvalme", ["ingen", "nedsatt appetitt, men normalt inntak", "nedsatt inntak av mat og væske", "nedsatt inntak med vekttap og/eller dehydrering"], 
	["Har du opplevd ", "<b>kvalme</b>", " det siste døgnet, og i så fall hvordan vil du beskrive den?"],
	"Har du opplevd <b>kvalme</b> hvor det har vært <b>nedsatt inntak av mat og væske med vekttap og/eller dehydrering</b> det siste døgnet",
	], 
	
	["oppkast", ["0", "1-2", "3-5", "6 eller flere",],
	["Hvor mange tilfeller med ", "<b>oppkast</b>", " har du hatt det siste døgnet?"],
	"Har du hatt <b>6 eller flere tilfeller</b> med <b>oppkast</b> det siste døgnet",
	],
	
	["avføring/diare", ["0", "1-3, normal konsistens", "1-3, løs konsistens", "4-6, normal eller løs konsistens", "7 eller flere, , normal eller løs konsistens"],
	["Hvor mange tilfeller med ", "<b>avføring</b>", " har du hatt det siste døgnet, og hvordan har konsistensen vært?"],
	"Har du hatt <b>7 eller flere tilfeller</b> med <b>avføring</b> det siste døgnet",
	],
	
	["nevropati/nervebetennelse", ["ingen", "føleforstyrrelser i huden uten smerter", "smerter og lammelser som begrenser enkelte aktiviteter", "sterke smerter og lammelser som hindrer deg i hverdagen"],
	["Har du kjent på følelsesforstyrrelser/prikking i huden og/eller smerter og lammelser i kroppen ", "(omtalt som <b>nevropati</b>)", "?"],
	"Har du opplevd <b>smerter og lammelser i kroppen (nevropati)</b> det siste døgnet som <b>hindrer deg betraktelig i hverdagen</b>",
	],

	["hudforandringer", ["ingen", "begrensede forandringer uten smerter", "forandringer med smerter", "store forandringer med smerter og nedsatt funksjon",],
	["Har du opplevd ", "<b>hudforandringer</b>", " det siste døgnet, og i så fall hvordan vil du beskrive dem?"],
	"Har du opplevd <b>store hudforandringer</b> som gir <b>smerter og nedsatt funksjon</b> det siste døgnet?",
	],
	
	["munnhulesmerter", ["ingen", "milde/svake smerter", "moderate smerter som krever tilpasset kost", "sterke smerter som påvirker matinntaket"],
	["Har du opplevd ", "<b>smerter i munnhulen</b>", "det siste døgnet, og i så fall hvordan vil du beskrive dem?"],
	"Har du opplevd <b>sterke smerter i munnhulen</b> det siste døgnet som <b>påvirker matinntaket</b>?",
	],
	
	["feber", ["ingen (under 38,0)", "38,0 - 39,0", "over 39,0 - 40,0", "over 40,0"],
	["Har du hatt ", "<b>feber</b>", " det siste døgnet, og i så fall til hvilken temperatur?"],
	"Har du hatt feber over 40,0 grader det siste døgnet?",
	],
	
	["magesmerter", ["ingen", "milde/svake smerter", "moderate smerter som begrenser enkelte aktiviteter", "sterke smerter som hindrer deg i hverdagen"],
	["Har du opplevd ","<b>magesmerter</b>", " det siste døgnet, og i så fall hvordan vil du beskrive dem?"],
	"Har du opplevd <b>sterke magesmerter</b> det siste døgnet som <b>hindrer deg betraktelig i hverdagen</b>?",
	],
	/**/
]

/*
kvalme
oppkast
avføring/diare
hudforandringer
munnhulesmerter
feber
magesmerter
*/

var status_bivirkninger = []



FinnRiktigAltenativerArrayForBivirkning = function (bivirkningen) {
	var bivirkninger_navn_array = []
	for (var i = 0; i < bivirkninger_array.length; i++) {
		bivirkninger_navn_array.push(bivirkninger_array[i][0])
	}

	var index = bivirkninger_navn_array.indexOf(bivirkningen)
	var array = bivirkninger_array[index][1]

	return array
}

FinnRiktigGrenseForBivirkning = function (bivirkningen) {
	var bivirkninger_navn_array = []
	for (var i = 0; i < bivirkninger_array.length; i++) {
		bivirkninger_navn_array.push(bivirkninger_array[i][0])
	}

	var index = bivirkninger_navn_array.indexOf(bivirkningen)
	var grense = bivirkninger_array[index][2]

	return grense
}

FinnAlvorlighetsgrad = function (bivirkningen, bivirkning_verdi) {
	aktuell_bivirkning_alternativer_array = FinnRiktigAltenativerArrayForBivirkning(bivirkningen)
	//console.log(aktuell_bivirkning_alternativer_array)
	var index = aktuell_bivirkning_alternativer_array.indexOf(bivirkning_verdi)
	//console.log(index)

	var alvorlighetsgrad = 0

	if (aktuell_bivirkning_alternativer_array.length == 4) {
		alvorlighetsgrad = index
	}
	else {
		if (index == 0) {
			alvorlighetsgrad = index	
		}
		else {
			alvorlighetsgrad = index-1
		}
	}
	return alvorlighetsgrad
}

FinnBivirkningNavnOgStatus = function (status_bivirkninger) {
	var array = []
	for (var i = 0; i < status_bivirkninger.length; i++) {
		array.push([status_bivirkninger[i][0], status_bivirkninger[i][1]])
	}
	return array
}

FinnAnmerkninger = function (status_bivirkninger, hoyeste_alvorlighetsgrad) {
	var array = []
	if (hoyeste_alvorlighetsgrad == 0) {
		array.push("Ingen anmerkninger")
	}
	else {
		for (var i = 0; i < status_bivirkninger.length; i++) {
			if (status_bivirkninger[i][2] == hoyeste_alvorlighetsgrad) {
				array.push(status_bivirkninger[i][0])
			}
		}	
	}
	
	return array
}

SkrivUtArraySomSammenhengendeTekst = function (array) {
	var tekst = ""
	tekst += GjorForsteBokstavStor(array[0])
	if (array.length > 1) {
		for (var i = 1; i < array.length-2; i++) {
		tekst += ", " + array[i]
		}
		tekst += " og " + array[array.length-1]		
	}
	return tekst
}

LeggBivirkningerForDagenInn = function (status_bivirkninger, index_for_dagen=7) {
	var bivirkning_navn_og_status_array = FinnBivirkningNavnOgStatus(status_bivirkninger)
	//console.log(bivirkning_navn_og_status_array)
	var dato = [dd_dato, month_array[mm_dato]]
	var hoyeste_alvorlighetsgrad = FinnHoyesteAlvorlighetsgrad()
	var farge_kode = alvorlighetsgrad_og_farge_sammenheng_array[hoyeste_alvorlighetsgrad]
	var alvorlighetsgrad = "Grad " + hoyeste_alvorlighetsgrad
	var anmerkninger_array = FinnAnmerkninger(status_bivirkninger, hoyeste_alvorlighetsgrad)
	var anmerkninger = SkrivUtArraySomSammenhengendeTekst(anmerkninger_array)

	console.log(anmerkninger)
	tidligere_symptomer_array[index_for_dagen] = [dato, farge_kode, alvorlighetsgrad, anmerkninger, bivirkning_navn_og_status_array]



	//Gjør at bivirkningen blir lagt inn når man sjekker i startmenyen
	bivirkning_allerede_lagt_inn = "ja"
	console.log(bivirkning_allerede_lagt_inn==bivirkning_allerede_lagt_inn_muligheter[0])
	checkbox_elementer_array = [
	//["Font Stil: Sans-serif", font_stil, font_stil_muligheter, true],
	["Bivirkning allerede lagt inn", bivirkning_allerede_lagt_inn, bivirkning_allerede_lagt_inn_muligheter, bivirkning_allerede_lagt_inn==bivirkning_allerede_lagt_inn_muligheter[0]],
	["Advarsel Stil: Mild", advarsel_stil, advarsel_stil_muligheter, true],
	["Rekkefølge i kalander: Yngst-til-eldst", rekkefolge_dato_kalender, rekkefolge_dato_kalender_muligheter, rekkefolge_dato_kalender==rekkefolge_dato_kalender_muligheter[0]],
]
	//checkbox_elementer_array[1] = ["Bivirkning allerede lagt inn", bivirkning_allerede_lagt_inn, bivirkning_allerede_lagt_inn_muligheter, bivirkning_allerede_lagt_inn==bivirkning_allerede_lagt_inn_muligheter[0]],
	console.log(checkbox_elementer_array)
	LagRadioKnapperFraArray(stilvalg_array, stilart, stilvalg_div)
	LagCheckboxForElementFraArray(checkbox_elementer_array, checkbox_elementer_div)
}