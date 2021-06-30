var content = document.getElementById("content")

var start_meny_bivirkninger_div = document.createElement("div")
start_meny_bivirkninger_div.classList.add("start_meny_bivirkninger_div")


var overskrift_start_meny_bivirkninger_div = document.createElement("div")
overskrift_start_meny_bivirkninger_div.innerHTML = ""
overskrift_start_meny_bivirkninger_div.classList.add("overskrift_sentrum_div")

var vis_legg_inn_symptomer_siste_dogn_div = document.createElement("div")
vis_legg_inn_symptomer_siste_dogn_div.innerHTML = ""
vis_legg_inn_symptomer_siste_dogn_div.classList.add("start_meny_div")

var vis_legg_inn_symptomer_siste_dogn_knapp = document.createElement("button")
vis_legg_inn_symptomer_siste_dogn_knapp.innerHTML = "Legg inn symptomer for siste døgn"
vis_legg_inn_symptomer_siste_dogn_knapp.classList.add("viktig_knapp")

vis_legg_inn_symptomer_siste_dogn_div.appendChild(vis_legg_inn_symptomer_siste_dogn_knapp)



var vis_tidligere_symptomer_div = document.createElement("div")
vis_tidligere_symptomer_div.innerHTML = ""
vis_tidligere_symptomer_div.classList.add("start_meny_div")

var vis_tidligere_symptomer_knapp = document.createElement("button")
vis_tidligere_symptomer_knapp.innerHTML = "Se tidligere innlagte symptomer"
vis_tidligere_symptomer_knapp.classList.add("viktig_knapp")

vis_tidligere_symptomer_div.appendChild(vis_tidligere_symptomer_knapp)


var varsel_symptomer_allerede_lagt_inn_div = document.createElement("div")
varsel_symptomer_allerede_lagt_inn_div.classList.add("start_meny_div")

legg_inn_nye_symptomer_fra_registert_dogn_div = document.createElement("div")
legg_inn_nye_symptomer_fra_registert_dogn_div.classList.add("knapp_i_sentrum_container")

var legg_inn_nye_symptomer_fra_registert_dogn_knapp = document.createElement("button")
legg_inn_nye_symptomer_fra_registert_dogn_knapp.innerHTML = "Legg inn nye symptomer"
legg_inn_nye_symptomer_fra_registert_dogn_knapp.classList.add("viktig_knapp")

VisStartMenyBivirkninger = function () {
	content.innerHTML = ""
	content.appendChild(start_meny_bivirkninger_div)
	overskrift_start_meny_bivirkninger_div.innerHTML = "<h3>Hva ønsker du å gjøre?</h3>"
	start_meny_bivirkninger_div.appendChild(overskrift_start_meny_bivirkninger_div)
	start_meny_bivirkninger_div.appendChild(vis_legg_inn_symptomer_siste_dogn_div)
	start_meny_bivirkninger_div.appendChild(vis_tidligere_symptomer_div)
}

vis_legg_inn_symptomer_siste_dogn_knapp.onclick = function () {
	content.innerHTML = ""

	console.log(bivirkning_allerede_lagt_inn)
	if (bivirkning_allerede_lagt_inn == "nei") {
		VisSymptomerSisteDogn()	
	}
	else {
		VisVarselAlleredeSymptomerLagtInn()
	}
}



vis_tidligere_symptomer_knapp.onclick = function () {
	content.innerHTML = ""
	VisTidligereSymptomer()
}




VisVarselAlleredeSymptomerLagtInn = function () {
	content.innerHTML = ""
	varsel_symptomer_allerede_lagt_inn_div.innerHTML = "<h3>Dagens symptomer er allerede lagt inn<h3>"
	varsel_symptomer_allerede_lagt_inn_div.innerHTML += "Det er allerede blitt lagt inn symptomer for i dag, ønsker du å legge inn på nytt?<br>"
	content.appendChild(varsel_symptomer_allerede_lagt_inn_div)

	legg_inn_nye_symptomer_fra_registert_dogn_div.appendChild(legg_inn_nye_symptomer_fra_registert_dogn_knapp)
	content.appendChild(legg_inn_nye_symptomer_fra_registert_dogn_div)

	content.appendChild(tilbake_til_start_meny_div)
}

legg_inn_nye_symptomer_fra_registert_dogn_knapp.onclick = function () {
	VisSymptomerSisteDogn()
}


var tilbake_til_start_meny_div = document.createElement("div")
tilbake_til_start_meny_div.classList.add("tilbake_til_start_meny_div")
tilbake_til_start_meny_div.innerHTML = ""

var tilbake_til_start_meny_knapp = document.createElement("button")
tilbake_til_start_meny_knapp.innerHTML = "Tilbake til startmeny"
tilbake_til_start_meny_knapp.className = "tilbake_til_start_meny_knapp"
tilbake_til_start_meny_knapp.classList.add("viktig_knapp")
tilbake_til_start_meny_knapp.onclick = function () {
	content.innerHTML = ""
	VisStartMenyBivirkninger()
}

tilbake_til_start_meny_div.appendChild(tilbake_til_start_meny_knapp)


header.onclick = function () {
	content.innerHTML = ""
	VisStartMenyBivirkninger()
}

footer.onclick = function () {
	content.innerHTML = ""
	VisStartMenyBivirkninger()
}