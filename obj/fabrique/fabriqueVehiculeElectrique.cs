public class FabriqueVehiculeElectrique : Fabrique(){
    public createAutomobile(){
        return new AutomobileElectrique();
    }

    public createScooter(){
        return new ScooterElectrique();
    }
}