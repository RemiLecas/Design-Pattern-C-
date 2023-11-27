public class FabriqueVehiculeElectrique : Fabrique{
    public Automobile createAutomobile(){
        return new AutomobileElectrique();
    }

    public Scooter createScooter(){
        return new ScooterElectrique();
    }
}