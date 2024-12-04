import {HomeCardData} from "../model/HomeCardData";


export function HomeCards() : HomeCardData[]{
    return [
        {
            img: '/cave/cave_1.webp',
            tag: 'La cave',
            title: 'Revolutionizing software development with cutting-edge tools',
            description:
                'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
        },
        {
            img: '/cave/cave_2.webp',
            tag: 'Product',
            title: 'Innovative product features that drive success',
            description:
                'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
        },
        {
            img: '/cave/whiskies.webp',
            tag: 'Spiritueux',
            title: 'Notre Sélection de Whiskies',
            description:
                'Découvrez notre products exceptionnelle de whiskies, soigneusement sélectionnés pour ravir les palais les plus exigeants. Que vous soyez amateur de single malts écossais, curieux des blends japonais raffinés ou en quête de saveurs inédites, nous avons de quoi vous séduire.',
        },
        {
            img: '/the-room/qg_2.webp',
            tag: 'La Salle',
            title: "L'endroit parfait pour vos récéptions",
            description:
                "La Salle Chai Seb, situé au premier étage de la cave, offre un espace de 80m² pour des événements privés et professionnels. Au rez-de-chaussée, découvrez \"La Cave Chai Séb\" avec une sélection de vins et bières. Des partenariats avec des traiteurs locaux permettent de proposer des repas sur place."
        },
        {
            img: '/cave/calvados.webp',
            tag: 'Spiritueux',
            title: "Calvados d'exception, soigneusement sélectionnés",
            description:
                'Découvrez l\'excellence des calvados de Normandie avec le Père Magloire, symbole de tradition, et le Domaine du Château du Breuil, alliant finesse et savoir-faire. Ces eaux-de-vie d\'exception capturent l\'âme du terroir normand.',
        },
    ];
}