
//dikotom vs. numerisk
var bivirkninger = [
		["avføring", "numerisk lang", 6], ["oppkast", "numerisk kort", 2],
		["magesmerter som begrenser daglig funksjon", "dikotom", "ja"], ["utslett", "dikotom", "ja"], ["blod i avføring", "dikotom", "ja"]]
//["oppkast", "numerisk"], ["utslett", "dikotom"]

var status_bivirkninger = []
for (var i = 0; i < bivirkninger.length; i++) {
	status_bivirkninger.push([bivirkninger[i][0]])
}

var mengde_array_lang = ["0", "1-3", "4-6", "7+"]
var mengde_array_kort = ["0", "1", "2", "3+"]
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