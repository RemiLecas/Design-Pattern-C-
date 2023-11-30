class Vehicule {
    constructor(public model: string, public make: string, public year: number) { }
}

class VehiculeIterator implements Iterator<Vehicule> {
    private index = 0;

    constructor(private vehicules: Vehicule[]) { }

    next(): IteratorResult<Vehicule> {
        if (this.index < this.vehicules.length) {
            const value = this.vehicules[this.index++];
            return { value, done: false };
        } else {
            return { value: null as any, done: true };
        }
    }
}

interface Catalogue {
    recherche(): Iterator<string>;
}

class VehiculeCatalog {
    private vehicules: Vehicule[] = [];

    // Méthode pour ajouter un véhicule au catalogue
    addVehicule(vehicule: Vehicule): void {
        this.vehicules.push(vehicule);
    }

    // Méthode pour obtenir l'itérateur du catalogue
    getIterator(): Iterator<Vehicule> {
        return new VehiculeIterator(this.vehicules);
    }
}

const catalog = new VehiculeCatalog();

catalog.addVehicule(new Vehicule('Civic', 'Honda', 2022));
catalog.addVehicule(new Vehicule('GTR', 'Nissan', 2023));
catalog.addVehicule(new Vehicule('Supra', 'Toyota', 1999));

const iterator = catalog.getIterator();

console.log('Véhicules dans le catalogue:');
let result = iterator.next();
while (!result.done) {
    console.log(`Modèle: ${result.value.model}, Marque: ${result.value.make}, Année: ${result.value.year}`);
    result = iterator.next();
}