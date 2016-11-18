var TrumpVue = function (trump) {
	
	//fais referecne a la 1er fonction dans lequel il est contenue
	this.afficher = function(){		


		var htmlEnConstrution = TrumpVue.html
		.replace("{ID}" , trump.id)
		.replace("{NOM}", trump.nom)
		.replace("{CITATION}" , trump.citation)
		.replace("{COMMENTAIRE}", trump.commentaire) ;

		$("body").html(htmlEnConstrution) ; 

	}
}

TrumpVue.html = $("#page-trump").html() ; 