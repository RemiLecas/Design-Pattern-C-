public abstract class Vendeur
{
    protected string nom;
    protected string matricule;

    public Vendeur(string nom, string matricule)
    {
        this.nom = nom;
        this.matricule = matricule;
    }

    public abstract void afficheVendeur();
}