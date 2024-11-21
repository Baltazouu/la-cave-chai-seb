import {Review} from "../model/Review";


export default function ReviewsStub() : Review[] {
        return [
        {
            description:
                'Toujours à l\'écoute, la responsable du magasin vous offre une vraie experience du vin. Vous êtes invités occasionnellement à des dégustations conseils que je vous invite à experimenter. "La Cave Chai Seb et ses amis" est décidément un lieu à fréquenter.',
            author: { name: 'Samuel Allard', avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXc-qVCp1fTlGCr98ULqfNRam68q_NrmRHgEQHT58NEGWA63gSL=w120-h120-p-rp-mo-br100' },
            stars:5
        },
        {
            description:
                'Client régulier , je viens chercher des conseils et je ne suis jamais déçu. Il y en à pour tout les goûts et tout les budgets. Agréable aussi que le caviste se rappel des goûts et préfèrence de son client. Si vous cherchez un caviste avec un certain savoir faire , ne cherchez plus sa se passe chai Seb !',
            author: { name: 'Adri Adri' },
            stars:5
        },
        {
            description:
                'Je conseille vivement cette boutique !!\n' +
                'J\'avais passé commande d\'une planche de charcuterie et de fromages. Un vrai délice ! Belle présentation et très copieuses. Le choix du vin parfait.\n' +
                'Accueil sympathique et beau magasin !\n',
            author: { name: 'Valérie Chapdelaine' },
            stars:4
        },
        {
            description:
                'Accueil sympa. Seb est de très bon conseil sur tous ses produits qu\'il connait parfaitement. Le magasin est agréable . Une proposition de nombreux whiskies : les classiques écossais, américain, japonais, français. Parfait pour des cadeaux de qualité.',
            author: { name: 'Lili BALTHUS', avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXS8YrMq9z-WWv4jSCgy29NCuBO3YS45384yPzFAe7OIIDZMjDM=w72-h72-p-rp-mo-ba3-br100' },
            stars:4.5
        },
    ];
}