//Variables déclarées pour utilisation plus tard
var joueur = 0;
var de3;
var de1;
var de2;
var NDJ;
var k;
var k2;
var p1;
var p2;
var p3;
var p4;
var play;
var rgba;
p0 = new personnage("Personne");
//-----------------Programmation orienté objet-----------------//

//Base personnage
function personnage(nom,capital,cases,pion,prison,prisoncard,couleurcase,prof){
	this.nom = nom;
	this.pion = pion;
	this.capital = capital;
	this.cases = cases;
	this.prison = prison;
	this.prisoncard = prisoncard;
	this.couleurcase = couleurcase;
	this.prof = prof;
}

//Base Case
function Case(salle,prix,couleur1,position,proprietaire,maison,hotel,terrain,loyer){
	this.salle = salle;
	this.prix = prix;
	this.couleur1 = couleur1;
	this.proprietaire = proprietaire;
	this.terrain = this.prix/10;// le terrain avec une maison à pour base environ 1/6 du prix d'achat
	this.position = position;
	this.maison = maison || 0;
	this.hotel = hotel;
	this.loyer = loyer;
}

//On créer les propriétés des cases avec un tableau puis on les définis
var casee = [];
casee[0] = new Case("Départ",0,"depart",$(".element1:nth-child(1)"));
casee[1] = new Case("C406",500,3,$(".element1:nth-child(2)"),p0);
casee[2] = new Case("Chance",0,"chance",$(".element1:nth-child(3)"));
casee[3] = new Case("C405",500,1,$(".element1:nth-child(4)"),p0);
casee[4] = new Case("Professeur Sciences de la vie et de la Terre",2000,"prof",$(".element1:nth-child(5)"),p0);
casee[5] = new Case("C302",750,6,$(".element1:nth-child(6)"),p0);
casee[6] = new Case("C301",750,7,$(".element1:nth-child(7)"),p0);
casee[7] = new Case("C300",750,5,$(".element1:nth-child(8)"),p0);
casee[8] = new Case("Permanence",0,"colle",$(".element1:nth-child(9)"));
casee[9] = new Case("B309",1000,10,$(".element2:nth-child(2)"),p0);
casee[10] = new Case("B303",1000,11,$(".element3:nth-child(2)"),p0);
casee[11] = new Case("B300",1050,9,$(".element4:nth-child(2)"),p0);
casee[12] = new Case("Professeur Math",2000,"prof",$(".element5:nth-child(2)"),p0);
casee[13] = new Case("B203",1250,14,$(".element6:nth-child(2)"),p0);
casee[14] = new Case("B202",1250,15,$(".element7:nth-child(2)"),p0);
casee[15] = new Case("B200",1300,13,$(".element8:nth-child(2)"),p0);
casee[16] = new Case("Amphithéàtre",0,"amphi",$(".element9:nth-child(9)"));
casee[17] = new Case("A305",2000,19,$(".element9:nth-child(8)"),p0);
casee[18] = new Case("Chance",0,"chance",$(".element9:nth-child(7)"));
casee[19] = new Case("A303",2250,17,$(".element9:nth-child(6)"),p0);
casee[20] = new Case("Professeur Physique-Chimie",2000,"prof",$(".element9:nth-child(5)"),p0);
casee[21] = new Case("A202",3000,22,$(".element9:nth-child(4)"),p0);
casee[22] = new Case("A201",3000,23,$(".element9:nth-child(3)"),p0);
casee[23] = new Case("A200",3500,21,$(".element9:nth-child(2)"),p0);
casee[24] = new Case("Surveillant !!!",0,"surveillant",$(".element9:nth-child(1)"));
casee[25] = new Case("Labo SVT",5000,27,$(".element8:nth-child(1)"),p0);
casee[26] = new Case("Chance",0,"chance",$(".element7:nth-child(1)"));
casee[27] = new Case("Labo chimie",5000,25,$(".element6:nth-child(1)"),p0);
casee[28] = new Case("Professeur Informatique et Sciences du Numérique",2000,"prof",$(".element5:nth-child(1)"),p0);
casee[29] = new Case("Bureau du Proviseur",6500,31,$(".element4:nth-child(1)"),p0);
casee[30] = new Case("Cafétéria",1000,"pause",$(".element3:nth-child(1)"));
casee[31] = new Case("Salle Informatique",8000,29,$(".element2:nth-child(1)"),p0);

// Base Chance
function Chance(msg,action){
	this.msg = msg;
	this.action = action;
}

//On créer les cartes chances avec un message et une fonction
var chancee= [];
chancee[0] = new Chance("C'est votre anniversaire ! Chaque joueurs vous donnent 750$",function a1 (player){
	p1.capital = p1.capital-750;
	p2.capital = p2.capital-750;
	if (k2==2){
		player.capital = player.capital+1500;
	}
	if (k2==3){
		p3.capital = p3.capital-750;
		player.capital = player.capital+2250;
	}
	else if (k2==4){
		p3.capital = p3.capital-750;
		p4.capital = p4.capital-750;
		player.capital = player.capital+3000;
	}
});
chancee[1] = new Chance("Vous avez été absent, reculez de 3 cases !",function a2(player){
	player.cases=player.cases-3;
	if (player.cases<0){
		player.cases=player.cases+32;
	}
	deplacepion(player);
});
chancee[2] = new Chance("Vous avez un cours de maths à rattraper, avancez jusqu'à la case de M.Mabille !",function a3(player){
	if (player.cases>12){
		player.capital=player.capital+4000;	
	}
	player.cases=12;
	deplacepion(player);
});
chancee[3] = new Chance("Vous payez le café à vos amis, payez 250$ par ami(e)s",function a4(player){
	p1.capital = p1.capital+250;
	p2.capital = p2.capital+250;
	if (k2==2){
		player.capital = player.capital-500;
	}
	if (k2==3){
		p3.capital = p3.capital+250;
		player.capital = player.capital-750;
	}
	else if (k2==4){
		p3.capital = p3.capital+250;480
		p4.capital = p4.capital+250;
		player.capital = player.capital-1000;
	}
});
chancee[4] = new Chance("Vous venez de vous faire convoquer par le proviseur!",function a5(player){
	player.cases=29;
	deplacepion(player);
	
});
chancee[5] = new Chance("Vous vous êtes fait voir par un professeur,le téléphone à la main. Allez en colle !",function a6(player){
	player.prison=3;
	$(player.pion).css({
		position:"absolute",
		top:"34px",
		left:"552px",
		});
	player.cases=8;
});
chancee[6] = new Chance("Vous êtes un ami(e) des surveillants, vous pouvez sortir de prison.",function a7(player){
	player.prisoncard=1;
});
chancee[7] = new Chance("BONNE CHANCE POUR LE BAC. De Pierrick Adam et Théo",function a8 (player){
	});
/////////////////////////////////////////////////////Base.html////////////////////////////////////////////////////////////////////////////////////////////////////////
function setnombre(){ //Ici on affiche le nombre de joueur pour mettre leur nom
	NDJ = $("#nombre option:selected").html();
	if (NDJ=="2 joueurs"){
		$("#cacher").css("visibility","visible");
		$("#prenom3").css("visibility","hidden");
		$("#prenom4").css("visibility","hidden");	
		NDJ==2;
		sessionStorage.setItem("j",NDJ);
	}
	else if (NDJ=="3 joueurs"){
		$("#cacher").css("visibility","visible");
		$("#prenom4").css("visibility","hidden");
		NDJ==3;
		sessionStorage.setItem("j",NDJ);
	}
	else{
		$("#cacher").css("visibility","visible");
		NDJ==4;
		sessionStorage.setItem("j",NDJ);
	}
}
function lancer(){ //On fait passer au deuxième html les valeurs
		var nom1=document.getElementById("pl1").value;
		var nom2=document.getElementById("pl2").value;
		var nom3=document.getElementById("pl3").value;
		var nom4=document.getElementById("pl4").value;
		sessionStorage.setItem("nom1",nom1);
		sessionStorage.setItem("nom2",nom2);
		sessionStorage.setItem("nom3",nom3);
		sessionStorage.setItem("nom4",nom4);
		document.location.href = "./monopoly.html";
	}
	//////////////////////////////////////////////////////////HTML 2////////////////////////////////////////////////////////////////////////////////////////

function initialiser(){ // On recoit les valeurs du base.html
		$("#ini").css("visibility","hidden");
		var nom1 = sessionStorage.getItem("nom1");
		var nom2 = sessionStorage.getItem("nom2");
		var nom3 = sessionStorage.getItem("nom3");
		var nom4 = sessionStorage.getItem("nom4");
		k = sessionStorage.getItem("j");
		if (k=="2 joueurs"){
			k2=2;
		}
		else if (k=="3 joueurs"){
			k2=3;
		}
		else if (k=="4 joueurs"){
			k2=4;
		}
		if (nom3==""){
			p1 = new personnage(nom1,10000,0,"#p1",0,0,"180",0);
			p2 = new personnage(nom2,10000,0,"#p2",0,0,"60",0);
			$("#j3").css("visibility","hidden");
			$("#p3").css("visibility","hidden");
			$("#j4").css("visibility","hidden");
			$("#p4").css("visibility","hidden");
			$("#j1").html(p1.nom+":<br/>"+p1.capital+"$");
			$("#j2").html(p2.nom+":<br/>"+p2.capital+"$");
		}
		else if (nom4==""){
			p1 = new personnage(nom1,10000,0,"#p1",0,0,"180",0);
			p2 = new personnage(nom2,10000,0,"#p2",0,0,"60",0);
			p3 = new personnage(nom3,10000,0,"#p3",0,0,"284",0);
			$("#j4").css("visibility","hidden");
			$("#p4").css("visibility","hidden");
			$("#j1").html(p1.nom+":<br/>"+p1.capital+"$");
			$("#j2").html(p2.nom+":<br/>"+p2.capital+"$");
			$("#j3").html(p3.nom+":<br/>"+p3.capital+"$");
		}
		else{
			p1 = new personnage(nom1,10000,0,"#p1",0,0,"180",0);
			p2 = new personnage(nom2,10000,0,"#p2",0,0,"60",0);
			p3 = new personnage(nom3,10000,0,"#p3",0,0,"284",0);
			p4 = new personnage(nom4,10000,0,"#p4",0,0,"134",0);
			$("#j1").html(p1.nom+":<br/>"+p1.capital+"$");
			$("#j2").html(p2.nom+":<br/>"+p2.capital+"$");
			$("#j3").html(p3.nom+":<br/>"+p3.capital+"$");
			$("#j4").html(p4.nom+":<br/>"+p4.capital+"$");
		}
		$("#ini").delete;
	}
//Ici on voit le joueur qui joue et on definis p1 dans fonction dé
function joueurtour(){
	$("#boutondé").attr("disabled","disabled");
	setTimeout(function(){ $("#boutondé").removeAttr("disabled"); }, 1000);
	joueur = joueur + 1;
	var de1 = parseInt(Math.random() * 6)+1;
	var de2 = parseInt(Math.random() * 6)+1;
	if(joueur==k2+1){
		joueur = 1;
	}
	if (joueur==1){
		prison(p1,de1,de2);
	}
	else if (joueur==2){
		prison(p2,de1,de2);
	}
	else if (joueur==3){
		prison(p3,de1,de2);
	}
	else if (joueur==4){
		prison(p4,de1,de2);
	}
}
//Ici on vérifie que le joueur est en prison ou non et son aptitude a jouer
function prison(player,de1,de2){
	if (player.capital<=0){
		joueurtour();
	}	
	else {
	if (player.prison>0){
		if (player.prisoncard===1){
			if (confirm("Voulez-vous utiliser votre carte sortie de prison ?")) {
				player.prison=1;
				player.prisoncard=0;
				dé(player,de1,de2);
			}	
		}
		if (de1===de2){ //il fait un double donc il sort en gardant la valeur des dés
			player.prison=0
			alert("Vous sortez de prison !");
			$("#sortie").append(player.nom+" sort de prison grâce à un double "+de1+".");
			dé(player,de1,de2);
		}
		else if (de1!=de2){	//il fait pas de double donc reste
			var joueurplus2 = joueur+1;
			if (joueurplus2==k2+1){
				joueurplus2=1;
			}
			$("#dé").html("");
			$("#dé").html(de1+ " + "+de2);
			de3 = de1+de2;
			$("#dé").append(" = "+de3);
			player.prison=player.prison-1
			var jail=player.prison+1  //Ici faut changer les ligne comme ca pas 
			//besoin de la nouvelle variable jail.
			$("#sortie").append("<br/>Il reste "+jail+" tour(s) avant que "+player.nom+" puisse sortir de prison.");
			$("#sortie").append("<br/>Au joueur "+joueurplus2+" de jouer.");
			$("#sortie").scrollTop("999999");//descend la scrollbar
		}
	}
	else if (player.prison===0){ //je joueur n'est pas en prison
		dé(player,de1,de2);
	}
}
}
//On lance les dé avec le bouton puis on fait les fonctions qui suivent
function dé(player,de1,de2){
	$("#dé").html("");
	$("#dé").html(de1+ " + "+de2);
	de3 = de1+de2;
	$("#dé").append(" = "+de3);
	if (de1===de2){
		$("#sortie").append("<br/>"+player.nom+" a fait un double de "+de1+", rejouez !");
		joueur=joueur-1
	}
	player.cases=player.cases+de3;
	if (player.cases>=32){
		player.cases = player.cases-32;
		player.capital=player.capital+4000;
	}
	deplacepion(player);//fonction deplace le pion
	money(player);//fonction actualise la monnaie
	$("#sortie").scrollTop("999999");//descend la scrollbar
}

//Ici on déplace le pion dans la case sélectionnée et on affecte la fonction de la cases sur laquel on tombe
function deplacepion(player){
	var coor = $(casee[player.cases].position).offset();
	$(player.pion).css({
		position:"absolute",
		top:coor.top,
		left:coor.left,
	});
	if(player.cases===24){
		alert("Vous venez de croiser un surveillant, allez en colle!");
		player.prison=3;
		$(player.pion).css({
			position:"absolute",
			top:"34px",
			left:"552px",
		});
		$("#sortie").append("</br>"+"Vous êtes en colle, en face de la permanence");
		player.cases=8;
	}
	else if (player.cases===2 || player.cases===18 || player.cases===26){
		var chancealéa = parseInt(Math.random() * 8);
		alert(chancee[chancealéa].msg);
		chancee[chancealéa].action(player);
	}
	else if (player.cases===30){
	$("#sortie").append("<br/>Tournée générale, c'est "+player.nom+" qui paye !!");
	player.capital=player.capital-1000;
	}
	else if (player.cases===0 || player.cases===8 || player.cases===16){
	}
	else if (player.cases===4 || player.cases===12 || player.cases===20 ||  player.cases===28){
		if (casee[player.cases].proprietaire==p0){
			if (confirm(player.nom+",\n"+"voulez-vous acheter : "+ casee[player.cases].salle+" ?"+"\nPrix :"+casee[player.cases].prix)){
				player.capital=player.capital-casee[player.cases].prix;
				casee[player.cases].proprietaire=player;
				rgba = "hsl("+player.couleurcase+",100%,80%)";
				casee[player.cases].position.css("background-color",rgba);
				player.prof=player.prof+1;
				for(var c=4 ; c<=28 ; c=c+8){
					if (casee[c].proprietaire==player){
						casee[c].loyer=200*player.prof;
					}
				}
				if (verifierprof()){
					alert("GAGNER");//WIN
				}
			}
		}
		else if (casee[player.cases].proprietaire!=player){
			player.capital=player.capital-casee[player.cases].loyer;
			casee[player.cases].proprietaire.capital = casee[player.cases].proprietaire.capital+casee[player.cases].loyer;
		}
	}
	else {
	achat(player);
	}
}

//On verifie si le mec gagne avec les 4 cases des profs
function verifierprof(){
	if (casee[4].proprietaire==casee[12].proprietaire &&casee[4].proprietaire==casee[20].proprietaire &&casee[4].proprietaire==casee[28].proprietaire&& casee[4].proprietaire!=p0){
		return true;
	}
}

function achat(player){//ICI ON ACHETE LA MAISON : qd qqun tombe dessus ce sera terrain+terrain*maison(1,2 ou 3)*maison
	if (casee[player.cases].proprietaire==p0){
		if (confirm(player.nom+",\n"+"voulez-vous acheter : "+ casee[player.cases].salle+" ?"+"\nPrix :"+casee[player.cases].prix)){
			player.capital=player.capital-casee[player.cases].prix;
			casee[player.cases].proprietaire=player;
			casee[player.cases].position.css("background-color",player.couleurcase);
			casee[player.cases].loyer=casee[player.cases].prix/10;
			rgba = "hsl("+player.couleurcase+",100%,90%)";
			casee[player.cases].position.css("background-color",rgba);
			if(verifiercouleur(player)){
				casee[player.cases].loyer=2*casee[player.cases].prix/10;
				casee[casee[player.cases].couleur1].loyer=2*casee[casee[player.cases].couleur1].prix/10;
				casee[casee[casee[player.cases].couleur1].couleur1].loyer=2*casee[casee[casee[player.cases].couleur1].couleur1].prix/10;
				alert(player.nom+" possède le monopole !!");
			}
		}
	}
	else if (casee[player.cases].proprietaire!=player){
		player.capital=player.capital-casee[player.cases].loyer;
		casee[player.cases].proprietaire.capital = casee[player.cases].proprietaire.capital+casee[player.cases].loyer;
	}
	else if (casee[player.cases].proprietaire==player && casee[player.cases].maison != 4){
		if (verifiercouleur(player)){//On achète des maisons que lorsque l'on a les 3 cases de couleur
			$("#block").css("visibility","visible");
			$("#popup").css({
				visibility:"visible",
				position:"absolute",
				top:"0px",
			});
			$("#popup #enhaut").html("");
			if (casee[player.cases].maison==0){
				$("#popup #enhaut").append("<h3>Voulez vous acheter des maisons : "+casee[player.cases].salle+" ?<br/></h3><input type='radio' name='maison' value='0'>Non merci<br/><input type='radio' name='maison' value='1'> 1 maison<br/><p>Le prix de chaque maison est de "+casee[player.cases].prix/5+"<br/>");
			}
			else if (casee[player.cases].maison==1){
				if (maisonmax(player)){
					$("#popup #enhaut").append("<h3>Voulez vous acheter des maisons : "+casee[player.cases].salle+" ?<br/></h3><input type='radio' name='maison' value='0'>Non merci<br/><input type='radio' name='maison' value='2'> 2ème maison<br/><p>Le prix de chaque maison est de "+casee[player.cases].prix/5+"<br/>");
				}
				else {
					alert("Vous devez augmenter le nombre de maison sur une autre propriété de cette couleur");
					$("#popup").css({
						position:"absolute",
						top:"-5000px",
					});
					$("#block").css("visibility","hidden");
				}
			}
			else if (casee[player.cases].maison==2){
				if (maisonmax(player)){
					$("#popup #enhaut").append("<h3>Voulez vous acheter des maisons : "+casee[player.cases].salle+" ?<br/></h3><input type='radio' name='maison' value='0'>Non merci<br/><input type='radio' name='maison' value='3'> 3ème maison<br/><p>Le prix de chaque maison est de "+casee[player.cases].prix/5+"<br/>");
				}
				else {
					alert("Vous devez augmenter le nombre de maison sur une autre propriété de cette couleur");
					$("#popup").css({
						position:"absolute",
						top:"-5000px",
					});
					$("#block").css("visibility","hidden");
				}
			}
			else if (casee[player.cases].maison==3){
				if (maisonmax(player)){
					$("#popup #enhaut").append("<h3>Un hotel : "+casee[player.cases].salle+" ?</h3><br/><b>Pour l'instant vous avez : 3 maisons</b><br/><input type='radio' name='maison' value='0'>Non merci<br/><input type='radio' name='maison' value='4'> 1 hotel<br/><p>Le prix de l'hotel est de "+casee[player.cases].prix/2.5+"<br/>");			
				}
				else {	
					alert("Vous devez augmenter le nombre de maison sur une autre propriété de cette couleur");
					$("#popup").css({
						position:"absolute",
						top:"-5000px",
					});
					$("#block").css("visibility","hidden");
				}
			}			
			play=player;
		}
	}
}

//On part sur une fonction booleenne pour les propriétaire / on sait si player possède le monopole
function verifiercouleur(player){
	if (casee[player.cases].proprietaire==casee[casee[player.cases].couleur1].proprietaire && casee[player.cases].proprietaire==casee[casee[casee[player.cases].couleur1].couleur1].proprietaire && casee[player.cases].proprietaire!=p0){
		return true;
	} 
	else{
		return false
	}
}
//On voit combien de maison on peut acheter / pas possible d'avoir une différence de + de 1 avec les autres 
function maisonmax(player){
	if (player.cases==casee[casee[player.cases].couleur1].couleur1){//Il y a deux cases de la meme famille
		if (casee[casee[player.cases].couleur1].maison>=casee[player.cases].maison){
			return true;
		}
		else {
			return false;
		}
	}
	else {
		//Il y a trois cases de la meme famille et faut comparer
		//LE BUT DE CETTE FONCTION VA ETRE DE VOIR QUELLE EST LA PLUS GRANDE MAISON ET DE RETOURNER LA VALEUR
		//DE LA PLUS GRANDE MAISON SANS OUBLIER QU'IL NE FAUT PAS QUE CE SOIT LA MAISON SUR LAQUEL ON EST LA PLUS GRANDE
		if (casee[casee[player.cases].couleur1].maison>=casee[player.cases].maison && casee[casee[casee[player.cases].couleur1].couleur1].maison>=casee[player.cases].maison){
			return true;
		}
		else {
			return false;
		}
	}
}

//Ici on achete les maisons
function buy(){
	console.log(play);
	var pay = casee[play.cases].prix/5;
	var valeur = $("input:checked").val();
		if (valeur==0 || valeur==1 || valeur==2 || valeur==3 || valeur==4){
			if ($( "input:checked" ).val()==0){
				alert("vous prenez rien");
			}
			else if ($( "input:checked" ).val()==4){//x2 car un hotel coûte 2x plus cher qu'une maison
				play.capital=play.capital-pay*2;
				casee[play.cases].loyer = casee[play.cases].terrain+casee[play.cases].terrain*16;
				casee[play.cases].proprietaire==play;
				casee[play.cases].maison = 4
				rgba = "hsl("+play.couleurcase+",100%,30%)";
				casee[play.cases].position.css("background-color",rgba);
			}
			else{
					casee[play.cases].loyer = casee[play.cases].terrain*2+casee[play.cases].terrain*valeur*valeur;
					play.capital=play.capital-pay*valeur+pay*casee[play.cases].maison;	//Bug envisageable argent négatif
					casee[play.cases].proprietaire=play;
					casee[play.cases].maison = valeur;
					if (casee[play.cases].maison==1){
						rgba = "hsl("+play.couleurcase+",100%,80%)";
						casee[play.cases].position.css("background-color",rgba);
					}
					else if (casee[play.cases].maison==2){
						rgba = "hsl("+play.couleurcase+",100%,60%)";
						casee[play.cases].position.css("background-color",rgba);
					}
					else if (casee[play.cases].maison==3){
						rgba = "hsl("+play.couleurcase+",100%,40%)";
						casee[play.cases].position.css("background-color",rgba);
					}
				}
		$("#popup").css({
				position:"absolute",
				top:"-5000px",
			});
		$("#block").css("visibility","hidden");
		actualiser(play);	
		}
		else {
			alert("Veuillez selectionner un proposition");
		}
}

function money(player){ //Fonction màj du #sortie
	joueurplus = joueur+1;
	if (joueurplus==k2+1){
		joueurplus=1;
	}
	if (player.prison===3){
		$("#sortie").append("</br>" +player.nom+" est arrivé(e) à la salle : Colle <br/>Au joueur "+joueurplus+" de jouer.");
    }
	else{         //ICI ON saute le tour du joueur qui a perdu
	try{
		if (attribution(joueurplus).capital<=0){
			while(attribution(joueurplus).capital<=0){
				//------------------------------------ICI ON ELIMINE LE JOUEUR ET SES PROPRIETE
				$(attribution(joueurplus).pion).css("visibility","hidden");
				for(var d=0;d<32;d++){
					if (casee[d].proprietaire==attribution(joueurplus)){
						casee[d].proprietaire=p0;
						casee[d].position.css("background-color","hsl(143,46.5%,47.6%)");
					}
				}
				//------------------------------------
				joueurplus = joueurplus+1;
				if (joueurplus==k2+1){
					joueurplus=1;
				}
			}
			$("#sortie").append("</br>" +player.nom+" est arrivé(e) à la salle :"+casee[player.cases].salle+"<br/>Au joueur "+joueurplus+" de jouer.");
		}
		else {
		$("#sortie").append("</br>" +player.nom+" est arrivé(e) à la salle :"+casee[player.cases].salle+"<br/>Au joueur "+joueurplus+" de jouer.");
		}
	}
	catch(err){	
	}
	}
	victoire(player);
	actualiser(player);
}
//Ici on attribu joueurplus à un joueur
function attribution(joueurplus){
	if (joueurplus==1){
		return p1;
	}
	else if (joueurplus==2){
		return p2;
	}
	else if (joueurplus==3){
		return p3;
	}
	else if (joueurplus==4){
		return p4;
	}
}

function victoire(player){
	var compta = 0;
	var compta2 = "";
	for(var c=1;c<k2+1;c++){
		if (attribution(c).capital<=0){
			compta = compta+1;
		}
		else {
			compta2 = attribution(c).nom;
		}
		if (compta==k2-1){
			alert(compta2 + " à gagné(e) !!!!");
		}
		else {
			//compta = 0;
		}
	}
}
function actualiser (player){//Fonction màj de l'argent sur html
	if (k2==2){	
		$("#j1").html(p1.nom+":<br/>"+p1.capital+"$");
		$("#j2").html(p2.nom+":<br/>"+p2.capital+"$");
	}
	else if (k2==3){
	$("#j1").html(p1.nom+":<br/>"+p1.capital+"$");
	$("#j2").html(p2.nom+":<br/>"+p2.capital+"$");
	$("#j3").html(p3.nom+":<br/>"+p3.capital+"$");
	}
	else if (k2==4){
	$("#j1").html(p1.nom+":<br/>"+p1.capital+"$");
	$("#j2").html(p2.nom+":<br/>"+p2.capital+"$");
	$("#j3").html(p3.nom+":<br/>"+p3.capital+"$");
	$("#j4").html(p4.nom+":<br/>"+p4.capital+"$");
	}
}

function info(player){ //On donne les infos sur le personne
	$("#info").html("");
	$("#info").css({
		position:"absolute",
		top:"50px",
		left:"350px",
		});
	$("#block").css("visibility","visible");
	if (player.prison>0){
		$("#info").append("<em>"+player.nom+"est en prison</em>");
	}
	else{
		$("#info").append("<em>"+player.nom+" est sur la case : "+casee[player.cases].salle+"</em>");
	}
	$("#info").append("<br/>Carte sortie de prison: "+player.prisoncard);
	$("#info").append("<ul>");
	for (var e=0;e<32;e++){
		 if (casee[e].proprietaire==player){
			 $("#info").append("<li>"+casee[e].salle+"</li>");
		 }
	}
	$("#info").append("</ul>");
}
function info2(){ //On fait remonter les infos
	$( "#info" ).css({
		position:"absolute",
		top:"-6000px",
		left:"350px",
		});
	$("#block").css("visibility","hidden");
}

//Ici on donne les infos sur les cases 
function infocarte(a){
	$("#carte").html("");	
		$("#carte").append("<h3>"+casee[a].salle+"</h3><br/>");
		$("#carte").append("<h4>à "+casee[a].proprietaire.nom+"<br/></h4>");
		if (casee[a].maison <=3){
			$("#carte").append("<h4>"+casee[a].maison+" maison(s)<br/></h4>");
		}
		else{
			$("#carte").append("<h4>1 hôtel<br/></h4>");
		}
		if (casee[a].proprietaire!=p0){
			$("#carte").append("<h4>Loyer : "+casee[a].loyer+" $</h4>");
		}
		else{
			$("#carte").append("<h4>Prix : "+casee[a].prix+" $</h4>");
		}
}
function rules(){//renvoie aux règles du monopoly
	alert("Bien sur notre monopoly est personnalisé mais il respecte la plupart de ces règles !");
	window.open("https://www.regles-de-jeux.com/regle-du-monopoly/")
}

$("#regle").click(rules);
$("#boutondé").click(joueurtour);
$("#info").click(info2);
$("#confmaison").click(buy);

//------------	Communication ------------//
//ajout d'un timer, expropriation
//faire un truc spécial pour les cases prof/FAIT
//verifier la faillite et la victoire/fait
// différents niveau de transparence en fonction des maisons possédés /fait
//quand éliminer on a for(var i,allant de 0 à 31) et si il est propriétaire alors propriétaire =p0/fait
//Pour la victoire on a un div de la taille de 100% avec graphisme adam et ecrit en gros le nom du joueur et victoire
//Une sorte de carte qui donne les infos sur la propriété quand on survol la case voir morpion avec this
// onMouseOver="changeimage('rouge.jpg')" onMouseOut="changeimage('blanc.jpg')/fait avec un clique
//Codes de triche
//Appuyer sur entrée pour lancer les dés
//Morpion pour savoir qui commence
//Graphisme hors du monopoly ( arrière plan)
//Trades/expropier les maisons des autres
//Dés animation
