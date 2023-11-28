class Liasse {

    private static instance: Liasse;
    private constructor() { }

    public static LiasseVierge(): Liasse {
        if (!Liasse.instance) {
            Liasse.instance = new Liasse();
        }
    
        return Liasse.instance;
    }
}
