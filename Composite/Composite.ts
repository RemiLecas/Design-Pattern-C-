abstract class Societe {
    constructor(protected nom: string) { }


    abstract recupererInfosParc(): string;

    abstract afficher(): void;

};

class Filiale extends Societe {

    constructor(nom: string) {
        super(nom)
    }

    recupererInfosParc(): string {
        return `Informations du parc de la filiale ${this.nom}`;
    }

    afficher(): void {
        console.log(`Filiaire : ${this.nom}`);
        console.log(this.recupererInfosParc());
    }

};

class SocieteMere extends Societe {
    private filiales: Societe[] = [];

    constructor(nom: string) {
        super(nom)
    }
    recupererInfosParc(): string {
        return `Informations du parc de la société mère ${this.nom}`;
    }

    afficher(): void {
        console.log(`Société Mère : ${this.nom}`);
        console.log(this.recupererInfosParc());

        // Afficher les informations de chaque filiale
        this.filiales.forEach(filiale => {
            filiale.afficher();
        });
    }

    ajouterFiliale(Filiale: Societe): void {
        this.filiales.push(Filiale);
    }

}


const filiale1 = new Filiale("Filiale 1");
const filiale2 = new Filiale("Filiale 2");


const societeMere = new SocieteMere("Société Mère");

societeMere.ajouterFiliale(filiale1);
societeMere.ajouterFiliale(filiale2);

societeMere.afficher();