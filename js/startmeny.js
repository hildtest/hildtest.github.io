var content = document.getElementById("content")

var start_meny_bivirkninger_div = document.createElement("div")

var vis_legg_inn_symptomer_siste_dogn_div = document.createElement("div")
vis_legg_inn_symptomer_siste_dogn_div.innerHTML = "Legg inn symptomer for siste døgn "
var vis_legg_inn_symptomer_siste_dogn_knapp = document.createElement("button")
vis_legg_inn_symptomer_siste_dogn_knapp.innerHTML = "Velg"
vis_legg_inn_symptomer_siste_dogn_div.appendChild(vis_legg_inn_symptomer_siste_dogn_knapp)

var vis_tidligere_symptomer_div = document.createElement("div")
vis_tidligere_symptomer_div.innerHTML = "Se tidligere symptomer "
var vis_tidligere_symptomer_knapp = document.createElement("button")
vis_tidligere_symptomer_knapp.innerHTML = "Velg"
vis_tidligere_symptomer_div.appendChild(vis_tidligere_symptomer_knapp)

VisStartMenyBivirkninger = function () {
	content.appendChild(start_meny_bivirkninger_div)
	start_meny_bivirkninger_div.innerHTML = "<h3>Hva ønsker du å gjøre?</h3>"
	start_meny_bivirkninger_div.appendChild(vis_legg_inn_symptomer_siste_dogn_div)
	start_meny_bivirkninger_div.appendChild(vis_tidligere_symptomer_div)
}

vis_legg_inn_symptomer_siste_dogn_knapp.onclick = function () {
	content.innerHTML = ""
	VisSymptomerSisteDogn()
}
