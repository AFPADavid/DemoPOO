/* Pour montrer que le fichier est bien chargé */

console.log("Début de mon fichier JS");


/* Création d'un objet livre */
myLivre = new Livre("Jurassic Park", "Michael Crichton"); // On donne les attirbuts de l'objet

/* on enmprunte le livre */
myLivre.emprunter(true);

/* Que contient l'objet Livre */
console.log(myLivre)

myLivre.getPret(); // Savoir si le livre a été emprunté ou non, on pourrait alle plus loin avec de l'encapsulationmy
myLivre.setPret(true); // Dire que le livre a été emprunté ou non, on pourrait alle plus loin avec de l'encapsulation

myLivre.augmentationPrix(15);
myLivre.augmentationPrix(15); // J'utilise la méthode d'augmentation

myOtherLivre = new Livre("Le monde perdu","Sir ZArthur Conan Doyle",false,50);
