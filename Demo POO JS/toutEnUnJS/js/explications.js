/*
La programmation orientée objet est un paradigme de programmation qui permet de structurer et organiser le code en utilisant des objets.
Les objets sont des instances de classes, qui définissent des propriétés (attributs) et des comportements (méthodes).

Voici quelques concepts clés de la POO en JavaScript:
*/

/*
1/ Classes : Les classes sont des modèles pour créer des objets.
Elles définissent les attributs et les méthodes que les objets qui en sont issus posséderont.
*/

class Animal {
    constructor(nom) {
      this.nom = nom;
    }
  
    parler() {
      console.log(`${this.nom} fait un bruit.`);
    }
  }

/*
2/ Objets : Les objets sont des instances de classes.
Chaque objet possède ses propres attributs et méthodes définis par la classe à laquelle il appartient.
*/

const chien = new Animal("Rex");
chien.parler(); // Rex fait un bruit.

/*
Héritage : L'héritage permet à une classe d'étendre une autre classe et d'en hériter les attributs et méthodes.
*/
class Chien extends Animal {
    constructor(nom, race) {
      super(nom);
      this.race = race;
    }
  
    parler() {
      console.log(`${this.nom} dit Wouaf !`);
    }
  }
  
  const chien = new Chien("Rex", "Berger allemand");
  chien.parler(); // Rex dit Wouaf !


/*
4/ Encapsulation : L'encapsulation permet de masquer les détails de l'implémentation en restreignant l'accès à certaines parties d'un objet.
*/

class CompteBancaire {
    constructor(solde) {
      this._solde = solde;
    }
  
    get solde() {
      return this._solde;
    }
  
    deposer(montant) {
      this._solde += montant;
    }
  
    retirer(montant) {
      if (montant <= this._solde) {
        this._solde -= montant;
      } else {
        console.log("Fonds insuffisants.");
      }
    }
  }

/*
Polymorphisme : Le polymorphisme permet à des objets de différentes classes de partager une interface commune et
d'être traités comme s'ils appartenaient au même type.
*/
class Chat extends Animal {
    parler() {
      console.log(`${this.nom} dit Miaou !`);
    }
  }
  
  const animaux = [new Chien("Rex", "Berger allemand"), new Chat("Félix")];
  
  animaux.forEach((animal) => {
    animal.parler(); // Rex dit Wouaf ! Félix dit Miaou !
  });
  