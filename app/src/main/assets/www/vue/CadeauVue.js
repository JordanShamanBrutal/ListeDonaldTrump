var CadeauVue = function (cadeau) {
	
	//fais referecne a la 1er fonction dans lequel il est contenue
	this.afficher = function(){		

		var htmlEnConstrution = CadeauVue.html
		.replace("{NOM}", cadeau.nom)
		.replace("{MARQUE}" , cadeau.marque)
		.replace("{DESCRIPTION}", cadeau.description) ;

		$("body").html(htmlEnConstrution) ; 

/*
		$("#cadeau-nom").html(cadeau.nom);
		$("#cadeau-marque").html(cadeau.marque);
		$("#cadeau-description").html(cadeau.description);*/


	}
}

CadeauVue.html = $("#page-cadeau").html() ; 