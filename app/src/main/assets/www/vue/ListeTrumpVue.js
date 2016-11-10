var ListeTrumpVue = function (liste_trump) {
	
	//fais referecne a la 1er fonction dans lequel il est contenue
	this.afficher = function(){

		$("body").html(ListeTrumpVue.html) ; 


		var html_liste_trump = $("#listeTrump") ;

		var htmlEnConstruction = "";

		// liste de cadeau pour afficher la vue 
		for (var i in liste_trump) {

			htmlEnConstruction += ListeTrumpVue.html_item.replace("{ID}",liste_trump[i].id).replace("{NOM}", liste_trump[i].nom) ; 
		}


		html_liste_trump.html(htmlEnConstruction);
	}
}

ListeTrumpVue.html = $("#pageListeTrump").html() ; 
ListeTrumpVue.html_item = $("#item-liste-trump").html() ; 