var AjouterTrumpVue = function () {
	
	//fais referecne a la 1er fonction dans lequel il est contenue
	this.afficher = function(){		
		$("body").html(AjouterTrumpVue.html) ; 
	}
}

AjouterTrumpVue.html = $("#page-ajouter-trump").html() ; 