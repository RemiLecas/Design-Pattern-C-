public class FabriqueVehiculeEssence : Fabrique(){
    public createAutomobile(){
        return new AutomobileEssence();
    }

    public createScooter(){
        return new ScooterEssence();
    }
}