var TrumpDAO = function(){

	this.listeTrump = [] ; 
	

	this.initialiser = function()
	{
		var SQL_CREATION = "CREATE TABLE IF NOT EXISTS trump(id INTEGER PRIMARY KEY AUTOINCREMENT , nom VARCHAR(50) , citation TEXT , commentaire TEXT )" ; 
		this.baseDeDonnees = window.openDatabase("listeTrump" , "1.0" , "Liste citation de Trump " , 200000) ; 

		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_CREATION = "CREATE TABLE IF NOT EXISTS trump(id INTEGER PRIMARY KEY AUTOINCREMENT , nom VARCHAR(50) , citation TEXT , commentaire TEXT )";
				operation.executeSql(SQL_CREATION) ; 
			},
			this.reagirErreur , 
			this.reagirSucces
			);
	}


	this.ajouterTrump = function(trump)
	{

	this.baseDeDonnees.transaction(
		function(operation)
		{	
			var SQL_AJOUT = "INSERT INTO trump (nom,citation,commentaire ) VALUES(?,?,?)" ; 
			var parametres = [trump.nom , trump.citation ,trump.commentaire] ; 
			operation.executeSql(SQL_AJOUT , parametres) ; 
		} , 
		this.reagirErreur,
		this.reagirSucces
		);
	}

	this.updateTrump = function(trump)
	{

	this.baseDeDonnees.transaction(
		function(operation)
		{	
			
			var SQL_UPDATE = " UPDATE trump SET nom = ?, citation = ? , commentaire = ? WHERE id = ? ;" ; 
			var parametres = [trump.nom , trump.citation ,trump.commentaire , trump.id ] ; 
			operation.executeSql(SQL_UPDATE , parametres) ; 
		} , 
		this.reagirErreur,
		this.reagirSucces
		);
	}



	this.listerTousLesTrump = function(finalisation)
	{
		this.baseDeDonnees.transaction(
			//operation 
			$.proxy(
			function(operation)
			{
				var SQL_SELECTION = "SELECT * FROM trump " ; 
				operation.executeSql(SQL_SELECTION , [] , $.proxy(
						function(operation , resultat){
						this.listeTrump = [] ; 
						for (var position = 0 ;  position <resultat.rows.length; position++) {


							var enregistrementTrump = resultat.rows.item(position) ; 

							var trump = new Trump(
								enregistrementTrump.id , 
								enregistrementTrump.nom , 
								enregistrementTrump.citation , 
								enregistrementTrump.commentaire  

								)
							this.listeTrump[this.listeTrump.length] = trump;

						}

					},this));}, this), 
			//erreur
			this.reagirErreur , 

			//succes
			$.proxy(
			function(){
				finalisation(this.listeTrump) ; 
			} , this) )  ; 
	}


	/*
	this.listeTrump[this.listeTrump.length] = 
	{
		"id":this.listeTrump.length+1,
		"nom":trump.nom,
		"citation":trump.citation ,
		"commentaire":trump.commentaire   
	}; */
	
	

	this.reagirErreur = function(erreur){
		console.log("ERREUR:SQL" + erreur.code + ":" + erreur.message) ; 
		alert("ERREUR:SQL" + erreur.code + ":" + erreur.message);
	}

	this.reagirSucces = function(erreur){
		console.log("SUCCES:SQL") ; 
		//alert("SUCCES:SQL");
	}

	this.initialiser() ;


	
	// attribut
	
	/*
{
"id":1,
"nom":"Immigration mexicaine",
"citation":"Quand le Mexique nous envoie ces gens (les immigrés mexicains, ndlr), ils n'envoient pas les meilleurs d'entre eux. Ils apportent des drogues. Ils apportent le crime. Ce sont des violeurs." ,
"commentaire":"Sur ses prochaines vacances visiblement pas en Amérique Latine"},
{
"id":2,"nom":"Fausse medecine",
"citation":"On m'a apporté la preuve que j'ai raison sur les vaccinations massives: les médecins ont menti. Sauvez vos enfants et leur futur." ,
"commentaire":"Sur son scepticisme sur les vaccinations (Donald est donc un peu médecin)"},

{
"id":3,"nom":"Internet",
"citation":"On doit faire quelque chose. On doit aller voir Bill Gates et plusieurs autres personnes qui comprennent réellement ce qu'il se passe et leur demander de fermer Internet dans certains endroits." ,
"commentaire":"Sa solution radicale pour éviter le recrutement djihadistes"},


{
"id":4,"nom":"Les journalistes",
"citation":"On pouvait voir du sang sortir de ses yeux, du sang sortir de son... où que ce soit" ,
"commentaire":"Sur la journaliste Megyn Kelly qui lui a posé des questions unfair, sûrement parce qu'elle avait ses règles."},


{
"id":5,"nom":"Un conseil",
"citation":"Quand quelqu'un vous attaque, ripostez. Soyez brutal, soyez féroce." ,
"commentaire":"NO COMMENT "},


{
"id":6,"nom":"Mère patrie",
"citation":"Je dirais que Poutine est un homme plus sympathique que moi" ,
"commentaire":"Nous on dit qu'il y a match."},



{
"id":7,"nom":"Réchauffement climatique",
"citation":"Le concept de réchauffement climatique a été créé par et pour les Chinois dans le but de rendre l'industrie américaine non-compétitive." ,
"commentaire":"Plus fort que les climato-sceptiques, les climato-scepto-complotistes (et les Chinois, c'est cadeau)."},

{
"id":8,"nom":"La Syrie",
"citation":"Je préviens les gens qui viennent ici de Syrie, parmi cette vague d'immigration massive, que si je gagne [l'élection présidentielle], ils devront retourner chez eux !" ,
"commentaire":"Sur sa vision humaniste du monde."},

{
"id":9,"nom":"Hillary Clinton",
"citation":"Comment peut-elle satisfaire son pays si elle ne satisfait pas son mari ?" ,
"commentaire":"Sur Hillary Clinton ou comment être mysogine en 140 caractères."},

{
"id":10,"nom":"Musulmans",
"citation":"Donald Trump appelle à l'arrêt total et complet de l'entrée des musulmans aux Etats-Unis jusqu'à ce que les élus de notre pays comprennent ce qui se passe" ,
"commentaire":"Sa réaction quand il a appris que les auteurs de la tuerie de San Bernardino sont musulmans."},

{
"id":11,"nom":"Le copain musulmans",
"citation":"J’ai des amis musulmans, ce sont des gens très bien, mais ils savent qu’il y a un problème, et on ne peut plus le tolérer" ,
"commentaire":"Les amis musulmans... Nadine Morano va demander des droits d'auteur."},
]  ; */



this.touverTrumpParId = function(id){
	for (var id_trump in this.listeTrump) {

		if (this.listeTrump[id_trump].id == id) {
			return this.listeTrump[id_trump] ;
		}
	}
};



}