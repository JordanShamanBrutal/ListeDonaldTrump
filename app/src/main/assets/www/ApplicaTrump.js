//objet anonyme 
var applicationTrump = {
	lancer:function(){
		//proxy permet que le this courant sois utiliser dans le on 
		$(window).on('hashchange',$.proxy(this.naviguer , this));
		//this.naviguer();	
		if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
			$(document).on('deviceready' , $.proxy(this.initialisePourDonnee , this )) ; 
		} else {
			this.initialisePourDonnee(); 
		}
	},

	initialisePourDonnee:function(){
		this.trumpDAO = new TrumpDAO();
		this.naviguer() ; 
	},

	naviguer:function(){
		var ancre = window.location.hash ; 
		if (!ancre){
			this.listeTrump	 = this.trumpDAO.listerTousLesTrump($.proxy(this.afficherTousLesTrump , this))	;	 
		}else if (ancre.match(/^#page-ajouter-trump/)){
			this.ajouterTrumpVue = new AjouterTrumpVue();
			this.ajouterTrumpVue.afficher($.proxy(this.sauvegarderNouveauTrump,this));

		}else if (ancre.match(/^#trump\/([0-9]+)\/#page-modifier-trump/)){
			//rendre sa bien TODO	
			var trouvailles = ancre.match(/^#trump\/([0-9]+)\/#page-modifier-trump/); 

			var id_trump = trouvailles[1]; 

		//	alert(id_trump) ;
			//model , 
			this.modifierTrumpVue = new ModifierTrumpVue();
			this.modifierTrumpVue.afficher(this.trumpDAO.touverTrumpParId(id_trump) , $.proxy(this.updateNouveauTrump,this));

		}

		else{
			
			var trouvailles = ancre.match(/^#trump\/([0-9]+)/); 

			var id_trump = trouvailles[1]; 
			var trump = this.trumpDAO.touverTrumpParId(id_trump) ; 
			this.trumpVue = new TrumpVue(trump);
			this.trumpVue.afficher();
		}

		//var listeTrumpVue = new ListeCadeauxVue(listeCadeau)
	},
	sauvegarderNouveauTrump:function(trump)
	{
		this.trumpDAO.ajouterTrump(trump) ; 

	},
	updateNouveauTrump:function(trump)
	{
		alert(trump.commentaire) ; 
		this.trumpDAO.updateTrump(trump) ; 

	},

	afficherTousLesTrump:function(listeTrump)
	{
		//alert(listeTrump.length) ; 
		this.listeTrumpVue = new ListeTrumpVue(listeTrump); 
		this.listeTrumpVue.afficher();
	}
};

applicationTrump.lancer()