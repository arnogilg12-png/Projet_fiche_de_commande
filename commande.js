const nom_du_client = "awa";
const nom_produit = "ordinateur";
let prix_unitaire = 250000;
let quantite = 2;
let frais_livraison = 5000;
let tva_convertie = 18;
let montant_total_produit = prix_unitaire*quantite;
let montant_tva_sur_produit = (tva_convertie*montant_total_produit)/100;
let montant_total_ttc = montant_total_produit+montant_tva_sur_produit
let montant_final_a_payer = montant_total_ttc+frais_livraison;
let prix_moyen_produit_et_tva = montant_total_ttc/3
console.log( "")
console.log("====RECU DE COMMANDE====")
console.log("nom_client :",nom_du_client);
console.log("nom_produit :",nom_produit,);
console.log("")
console.log("prix_unitaire :",prix_unitaire,"FCFA");
console.log("quantite :",quantite);
console.log("frais_livraison :",frais_livraison,"FCFA");
console.log("tva_converti :",tva_convertie);
console.log("montant_total_produit :",montant_total_produit,"FCFA");
console.log("montant_tva_sur_produit :",montant_tva_sur_produit,"FCFA");
console.log("montant_total_ttc :",montant_total_ttc,"FCFA");
console.log("montant_total_a_payer :",montant_final_a_payer,"FCFA")
console.log("type_du_nom :",typeof nom_du_client)
console.log("type_nom_du_produit :",typeof nom_produit)
console.log("type_prix_unitaire :",typeof prix_unitaire)
console.log("type_de_la_quantite :",typeof quantite)
console.log("type_frais_de_la_livraison :",typeof frais_livraison)
console.log("typeé_de_la_tva_convertie :",typeof tva_convertie)
console.log("")
console.log("====RECU DE COMMANDE====")