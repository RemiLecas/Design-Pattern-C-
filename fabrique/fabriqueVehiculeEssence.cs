public class FabriqueVehiculeEssence : Fabrique {
    public Automobile createAutomobile(){
        return new AutomobileEssence();
    }

    public Scooter createScooter(){
        return new ScooterEssence();
    }
}