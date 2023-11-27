using System;

public class AutomobileElectrique : Automobile
{
    public AutomobileElectrique(string modele, string couleur,
   int puissance, double espace) : base(modele, couleur,
   puissance, espace)
    { }

    public override void afficheCaracteristiques()
    {
        Console.WriteLine(
          "Automobile électrique de modèle : " + modele +
          " de couleur : " + couleur + " de puissance : " +
          puissance + " d'espace : " + espace);
    }
}

