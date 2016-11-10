//objet anonyme 
var applicationListeNoel = {
	lancer:function(){
 		this.cadeau = new CadeauDAO() ; 
		this.listeCadeau = this.cadeau.listerTousLesCadeaux();


		//proxy permet que le this courant sois utiliser dans le on 
		$(window).on('hashchange',$.proxy(this.naviguer , this));
		this.naviguer();			
	},

	naviguer:function(){
		var ancre = window.location.hash ; 
		if (!ancre){
			this.listeCadeauxVue = new ListeCadeauxVue(this.listeCadeau); 

			this.listeCadeauxVue.afficher(); 
		}else{
			var trouvailles = ancre.match(/^#cadeau\/([0-9]+)/); 
			var id_cadeau = trouvailles[1]; 
			alert(id_cadeau) ;
			this.cadeauVue = new CadeauVue(this.listeCadeau[id_cadeau]);
			this.cadeauVue.afficher();
		}

		
		//var listeCadeauxVue = new ListeCadeauxVue(listeCadeau)


		
	}
};

applicationListeNoel.lancer()





