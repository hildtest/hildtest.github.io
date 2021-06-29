
//dikotom vs. numerisk
var bivirkninger = [
	["avføring", "numerisk lang", 6], ["oppkast", "numerisk kort", 3],
	["feber", "dikotom", "ja"], ["smerter i munnhulen", "dikotom", "ja"], ["kvalme med dehydrering og/eller vekttap", "dikotom", "ja"],
	["alvorlige magesmerter", "dikotom", "ja"], ["hudforandringer med smerter", "dikotom", "ja"],
]
//["oppkast", "numerisk"], ["utslett", "dikotom"]

//kategorisk, erstatter den dikotome

//Sortert etter grader
//Merk at for avføring er både 0 og 1-3, normal konsistens definert som grad 0
var bivirkninger_del_2 = [
	["kvalme", ["ingen", "nedsatt appetitt", "nedsatt inntak av mat og væske", "opplevd vekttap og/eller dehydrering"],], 
	["oppkast", ["0", "1-2", "3-5", "6 eller flere",]],
	["avføring/diare", ["0", "1-3, normal konsistens", "1-3, løs konsistens", "4-6", "7 eller flere"]],
	["hudforandringer", ["ingen", "begrensede forandringer uten smerter", "forandringer med smerter", "store forandringer med smerter",],],
	["munnhulesmerter", ["ingen", "mild", "moderat", "sterk"]],
	["feber", ["ingen (under 38,0)", "38,0 - 39,0", "over 39,0 - 40,0", "over 40,0"]],
	["magesmerter", ["ingen", "mild", "moderat", "sterk"],],
]

var status_bivirkninger = []
for (var i = 0; i < bivirkninger.length; i++) {
	status_bivirkninger.push([bivirkninger[i][0], bivirkninger[i][2]])
}

var mengde_array_lang = ["0", "1-3", "4-5", "6-7", "8+"]
var mengde_array_kort = ["0", "1", "2", "3", "4+"]
var ja_nei_array = ["Ja", "Nei"]

FinnRiktigMengdeArrayForBivirkning = function (bivirkningen) {
	var bivirkninger_navn_array = []
	for (var i = 0; i < bivirkninger.length; i++) {
		bivirkninger_navn_array.push(bivirkninger[i][0])
	}
	var index = bivirkninger_navn_array.indexOf(bivirkningen)
	//console.log(bivirkningen, index)
	var numerisk_type = bivirkninger[index][1]
	//console.log(numerisk_type)

	if (numerisk_type == "numerisk lang") {
		return mengde_array_lang
	}
	else {
		return mengde_array_kort
	}
}


FinnRiktigAltenativerArrayForBivirkning = function (bivirkningen) {
	var bivirkninger_navn_array = []
	for (var i = 0; i < bivirkninger_del_2.length; i++) {
		bivirkninger_navn_array.push(bivirkninger_del_2[i][0])
	}
	console.log(bivirkninger_navn_array)
	var index = bivirkninger_navn_array.indexOf(bivirkningen)
	console.log(bivirkningen, index)
	var array = bivirkninger_del_2[index][1]
	//console.log(numerisk_type)

	return array
}