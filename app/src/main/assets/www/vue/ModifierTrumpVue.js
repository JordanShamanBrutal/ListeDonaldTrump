var ModifierTrumpVue = function () {
	
	//fais referecne a la 1er fonction dans lequel il est contenue
	this.afficher = function(trumpAModifier ,  actionModifierTrump){		
		$("body").html(ModifierTrumpVue.html) ; 


		$("#formulaire-modifier").on("submit" , $.proxy(this.updateTrump,this)) ; 

		this.actionModifierTrump = actionModifierTrump ; 
		this.trumpAModifier = trumpAModifier
	}

	this.updateTrump = function()
{
	
	//nom et marque = input texte 
	//description = textarea
	var nom = $("#trump-nom").val(); 
	var citation = $("#trump-citation").val(); 
	var commentaire = $("#trump-commentaire").val();  

	var trump = new Trump(this.trumpAModifier.id , nom,citation,commentaire) ; 
	alert(this.trumpAModifier.id)
	this.actionModifierTrump(trump); 


	window.location.hash = "" ; 
	event.preventDefault();	 



}
}

ModifierTrumpVue.html = $("#page-modifier-trump").html() ; 