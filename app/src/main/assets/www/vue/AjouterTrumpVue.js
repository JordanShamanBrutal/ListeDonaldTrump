var AjouterTrumpVue = function () {
	
	//fais referecne a la 1er fonction dans lequel il est contenue
	this.afficher = function(actionAjouterTrump){		
		$("body").html(AjouterTrumpVue.html) ; 

		$("#formulaire-ajouter").on("submit" , $.proxy(this.ajouterTrump,this)) ; 

		this.actionAjouterTrump = actionAjouterTrump ; 
	}

	this.ajouterTrump = function()
{
	
	//nom et marque = input texte 
	//description = textarea
	var nom = $("#trump-nom").val(); 
	var citation = $("#trump-citation").val(); 
	var commentaire = $("#trump-commentaire").val(); 

	var trump = new Trump(id=null , nom,citation,commentaire) ; 

	this.actionAjouterTrump(trump); 

	window.location.hash = "" ; 
	event.preventDefault();	 



}
}

AjouterTrumpVue.html = $("#page-ajouter-trump").html() ; 