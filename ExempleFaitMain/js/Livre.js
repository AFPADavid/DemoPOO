/**
 * Livre de la bibliothèque
 */
class Livre{ // La class doit avoir le même nom que le fichier JS
    /**
     * Création du livre
     * @param {String} titre Titre du livre
     * @param {String} auteur Auteur du livre
     * @param {Boolean} pret Le livre est prêté
     * @param {Number} prix Le prix du livre
     */
        /*
        la notation @param est utilisée dans les commentaires de type JSDoc pour documenter les paramètres d'une fonction. JSDoc est un système de documentation pour le code JavaScript qui permet de décrire les types, les paramètres, les valeurs de retour et d'autres informations sur les fonctions et les objets dans votre code.
    */

       constructor(titre, auteur, pret = false, prix = 0 ){ // Par défaut un livre n'est pas prêté
        this.titre = titre;
        this.auteur = auteur;
        this.pret = pret;
        this.prix = prix;
    }

    /**
     * Prêter le livre
     * @param {Boolean} pret L'objet emprunt contenant les informations du prêt.
     */
    emprunter(pret){
        this.pret = pret;
        console.log('Le livre '+this.titre+' de '+ this.auteur +' est prêté : '+pret)
    }

    getPret(){
        return this.pret;
        // Le but est de ne donner que l'accès à la lecture de la valeur
    }

    setPret(pretEnvoye){
        this.pret = pretEnvoye;
    }

    augmentationPrix(augmentation){ //La signature est une valeur calculée en fonction du nom de la méthode, du type, du nombre et de l'ordre de ses paramètres.
        this.prix = this.prix+augmentation;
    }

    getPrix(){
        return this.prix;
        // Le but est de ne donner que l'accès à la lecture de la valeur
    }






}