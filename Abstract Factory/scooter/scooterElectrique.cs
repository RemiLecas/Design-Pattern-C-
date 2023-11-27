public class ScooterElectrique : Scooter
{
    public ScooterElectrique(string modele, string couleur,
  int puissance) : base(modele, couleur, puissance) { }

    public override void afficheCaracteristiques()
    {
        Console.WriteLine("Scooter électrique de modèle : " +
          modele + " de couleur : " + couleur +
          " de puissance : " + puissance);
    }
}
