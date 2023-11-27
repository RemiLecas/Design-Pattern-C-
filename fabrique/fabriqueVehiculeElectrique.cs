using System;

public class FabriqueVehiculeElectricite : FabriqueVehicule
{
  public Automobile creeAutomobile(string modele, string
    couleur, int puissance, double espace)
  {
    return new AutomobileElectrique(modele, couleur,
      puissance, espace);
  }

  public Scooter creeScooter(string modele, string
    couleur, int puissance)
  {
    return new ScooterElectrique(modele, couleur,
      puissance);
  }
}