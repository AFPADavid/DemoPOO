/**
 * Compte épargne
 */
class CompteEpargne extends Compte{
    /**
     * Création du compte
     * @param {Titulaire} titulaire Titulaire du compte
     * @param {number} montant Montant de départ
     * @param {number} taux Taux d'intérêts
     * @param {number} rythme Rythme de versement des intérêts (en millisecondes)
     */

    /*
        la notation @param est utilisée dans les commentaires de type JSDoc pour documenter les paramètres d'une fonction. JSDoc est un système de documentation pour le code JavaScript qui permet de décrire les types, les paramètres, les valeurs de retour et d'autres informations sur les fonctions et les objets dans votre code.
    */


    constructor(titulaire, montant = 50, taux = 0.005, rythme = 1000){
        super(titulaire, montant);
        this.taux = taux;
        this.rythme = rythme;

        // Intérêts de taux toutes les "rythme" millisecondes (0.5% toutes les 5 secondes)
        setInterval(() => {
            this.solde *= 1+this.taux;
        }, this.rythme);
    }
}