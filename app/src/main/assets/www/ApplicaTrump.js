//objet anonyme 
var applicationTrump = {
	lancer:function(){
 		this.trump = new TrumpDAO() ; 
		this.listeTrump = this.trump.listerTousLesTrump();


		//proxy permet que le this courant sois utiliser dans le on 
		$(window).on('hashchange',$.proxy(this.naviguer , this));
		this.naviguer();			
	},

	naviguer:function(){
		var ancre = window.location.hash ; 
		if (!ancre){
			this.listeTrumpVue = new ListeTrumpVue(this.listeTrump); 

			this.listeTrumpVue.afficher(); 
		}else{
			var trouvailles = ancre.match(/^#trump\/([0-9]+)/); 

			var id_trump = trouvailles[1]; 
			var trump = this.trump.touverTrumpParId(id_trump) ; 
			this.trumpVue = new TrumpVue(trump);
			this.trumpVue.afficher();
		}

		
		//var listeTrumpVue = new ListeCadeauxVue(listeCadeau)


		
	}
};

applicationTrump.lancer()