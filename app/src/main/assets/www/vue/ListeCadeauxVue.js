var ListeCadeauxVue = function (liste_cadeaux) {
	
	//fais referecne a la 1er fonction dans lequel il est contenue
	this.afficher = function(){

		$("body").html(ListeCadeauxVue.html) ; 


		var html_liste_cadeaux = $("#listeCadeau") ;



		var htmlEnConstruction = "";

		// liste de cadeau pour afficher la vue 
		for (var i in liste_cadeaux) {

			htmlEnConstruction += "<li class='itemCadeau'> <a class='lienCadeau' href='#cadeau/" + i + "'>" +  liste_cadeaux[i].nom + "</a></li>" ; 
		}


		html_liste_cadeaux.html(htmlEnConstruction);
	}
}

ListeCadeauxVue.html = $("#pageListeCadeau").html() ; 