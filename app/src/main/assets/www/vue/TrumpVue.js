var TrumpVue = function (trump) {
	
	//fais referecne a la 1er fonction dans lequel il est contenue
	this.afficher = function(){		

		var htmlEnConstrution = TrumpVue.html
		.replace("{NOM}", trump.nom)
		.replace("{CITATION}" , trump.citation)
		.replace("{COMMENTAIRE}", trump.commentaire) ;

		$("body").html(htmlEnConstrution) ; 

/*
		$("#cadeau-nom").html(cadeau.nom);
		$("#cadeau-marque").html(cadeau.marque);
		$("#cadeau-description").html(cadeau.description);*/


	}
}

TrumpVue.html = $("#page-trump").html() ; 