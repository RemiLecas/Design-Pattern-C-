abstract class Societe {
    constructor(protected nom: string, protected voiture: number) { }

    abstract afficher(): void;

    abstract voitureDansLeParc(): void;

};

class Filiale extends Societe {

    constructor(nom: string, voiture: number) {
        super(nom, voiture)
    }

    afficher(): void {
        console.log(`Filiale : ${this.nom}`);
    }

    voitureDansLeParc(): void {
        console.log(`Voiture dans le parc de ${this.nom}:  ${this.voiture}`);
    }

};

class SocieteMere extends Societe {
    private filiales: Societe[] = [];

    constructor(nom: string, voiture: number) {
        super(nom, voiture)
    }


    afficher(): void {
        console.log(`Société Mère : ${this.nom}`);

        // Afficher les informations de chaque filiale
        this.filiales.forEach(filiale => {
            filiale.afficher();
        });
    }

    voitureDansLeParc(): void {
        this.filiales.forEach(filiale => {
            filiale.voitureDansLeParc();
        });
    }

    ajouterFiliale(Filiale: Societe): void {
        this.filiales.push(Filiale);
    }

}


const filiale1 = new Filiale("Filiale 1", 15);
const filiale2 = new Filiale("Filiale 2", 3);


const societeMere = new SocieteMere("Société Mama", 500);

societeMere.ajouterFiliale(filiale1);
societeMere.ajouterFiliale(filiale2);

societeMere.afficher();
societeMere.voitureDansLeParc();