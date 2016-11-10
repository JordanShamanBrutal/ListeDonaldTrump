var CadeauDAO = function(){

	// attribut
	this.listeCadeau = [
{"id":1,"nom":"pebble","description":"ALLOOWOWOWOWOWOWOWO"},
{"id":2,"nom":"voitureElectrique", "marque":"TESLA","description":"dam une voiture de riche"},
] ;

this.listerTousLesCadeaux = function(){
	return this.listeCadeau;
};

}