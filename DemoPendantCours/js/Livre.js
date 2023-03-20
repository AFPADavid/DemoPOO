/**
 * Livre de la bibliothèque
 */
class Livre {
    /**
     * Création du Livre
     * @param {String} titre Titre du livre
     * @param {String} auteur Auteur du livre
     * @param {Boolean} pret Le livre est prêté
     * @param {Number} prix prix du livre
     */

    constructor(titre, auteur,pret=false, prix = 0){
        this.titre = titre;
        this.auteur = auteur;
        this.pret = pret;
        this.prix = prix;
    }

    emprunter(pret){
        this.pret = pret;
        console.log("Le livre "+this.titre+" de "+this.auteur+ " est prêté : "+pret);
    }

    getPret(){
        return this.pret;
    }

    setPret(pretEnvoye){
        this.pret = pretEnvoye;
    }

    augmentationPrix(augmentation){
        this.prix = this.prix + augmentation;
    }

    getPrix(){
        return this.prix;
    }






}