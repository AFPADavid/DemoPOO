let animal = function(){
    this.nom;
    this.pattes;
    this.cri;
    this.crier = function(){
        return this.nom + ' fait le cri : '+this.cri;
    }
}

var chat = new animal();
chat.nom = "Mattou";
chat.pattes = 4;
chat.cri = "MIAOU";
chat.crier();
/*
Ce code définit une fonction animal qui agit comme un constructeur pour créer des objets représentant des animaux.
Ensuite, il crée un nouvel objet chat à l'aide de ce constructeur et définit les propriétés de cet objet.
Voici une explication détaillée de chaque partie du code :

let animal = function() { ... } : cette ligne définit une fonction appelée animal.
Cette fonction agit comme un constructeur pour créer des objets représentant des animaux.

this.nom, this.pattes et this.cri : ces trois lignes définissent des propriétés pour les objets créés à l'aide du constructeur animal.
Chaque objet aura ces trois propriétés avec leurs valeurs respectives.

this.crier = function() { ... } : cette ligne définit une méthode appelée crier pour les objets créés à l'aide du constructeur animal.
Cette méthode renvoie une chaîne de caractères qui décrit le nom de l'animal et son cri.

var chat = new animal(); : cette ligne crée un nouvel objet chat en utilisant le constructeur animal.
L'objet chat héritera des propriétés et des méthodes définies dans le constructeur animal.

chat.nom = "Mattou";, chat.pattes = 4; et chat.cri = "MIAOU"; : ces trois lignes définissent les valeurs des propriétés nom, pattes
et cri pour l'objet chat.

chat.crier(); : cette ligne appelle la méthode crier de l'objet chat, qui renvoie la chaîne de caractères "Mattou fait le cri : MIAOU".

Dans cet exemple, un objet chat est créé avec les propriétés nom, pattes et cri, ainsi qu'une méthode crier.
L'objet chat représente un chat nommé "Mattou" avec 4 pattes et un cri "MIAOU".
Lorsque la méthode crier est appelée, elle renvoie la chaîne de caractères décrivant le nom du chat et son cri.

*/