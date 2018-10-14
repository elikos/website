// use plugins and options as needed, for options, detail see
// http://i18next.com/docs/
i18next.init({
  lng: 'fr', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
  resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
    fr: {
      translation: {
        nav: {
          about: "À propos",
          competitions: "Compétitions",
          team: "Équipe",
          partners: "Partenaires",
          contact: "Contact",
          language: "English"
        },
        video: {
          title: "Polytechnique Montréal"
        },
        about: {
          title: "Qui sommes-nous?",
          description1: "Élikos est une société technique de Polytechnique Montréal créée en novembre 2013 dont le but est de promouvoir les multirotors autonomes dans le milieu universitaire. Les étudiants membres de l'équipe proviennent de multiples programmes de génie et sont unis par une passion commune pour les multicoptères.",
          description2: "L'équipe a participé annuellement à l'",
          description3: " de 2014 à 2018 et a obtenu la première place en Amérique du Nord en 2014 et 2015, ainsi qu'une seconde position en 2016. En 2019, Élikos participera à la "
        },
        competitions: {
          title: "Compétitions",
          description: "Opérant depuis 1991, l’International Aerial Robotics Competition existe pour repousser les limites de la technologie en robotique aérienne. Des défis, aussi appelés des missions, sont posés à la communauté universitaire du monde entier dans le but de stimuler des avancées technologiques à un rythme rapide. En 2013, 33 équipes de partout dans le monde ont participé à la 6e mission de l’IARC.",
          2017: {
            content: "La délégation 2017 avec le prix de la meilleure présentation. De gauche à droite : Olivier St-Amour, Christophe Bédard, Pierre-Yves Lajoie, Justine Pepin, Eva Terriault, Arnaud Paré-Vogt."
          },
          2016: {
            content: "Lors de l'édition 2016 de l'IARC, Élikos a tenté en plus de faire un vol autonome, d'interagir avec les robots au sol ainsi que d'éviter les robots obstacles de manière automnome. Pour déterminer le positionnement, une intégration de l'algorithme de localisation visuelle et inertielle ainsi que de l'optical flow a été effectuée. Par la suite, la détection des robots cibles et des robots obstacles a été améliorée. Finalement, une intelligence artificielle a été développée afin de prendre les meilleures décisions possibles lors de la compétition, connaissant sa propre position ainsi que la position des robots cibles et obstacles.",
            photo: "La délégation 2016 avec le prix du design le plus inovateur. De gauche à droite : Eva Terriault, Max Colombié, Olivier St-Amour, Antonio Sanniravong, Pierre-Yves Lajoie, Alex Latulipe Loiselle, David Binet, Justine Pepin, Christophe Bédard."
          },
          2015: {
            content: "Lors de la compétition 2015, nous avons eu l'occasion de démontrer nos premiers pas vers l'interaction avec les robots au sol en suivant un robot en mouvement. La conception du véhicule a été revue pour intégrer une plateforme Intel NUC i5, plus de caméras ainsi qu'un altimètre laser.",
            photo: "La délégation 2015 avec les prix du meilleur t-shirt, la meilleur intégration de systèmes et la meilleure présentation orale. De gauche à droite : Jean-Alexandre Barszcz, André Phu-Van Nguyen, Eva Terriault, Antonio Sanniravong, Alexandre Borowczyck, Alex Latulipe Loiselle, Laurier Loiselle et Christophe Bédard."
          },
          2014: {
            content: "Lors de la compétition 2014, la première édition de la mission 7 de l'IARC et la première participation à une compétition pour Élikos, nous avons démontré un décollage et atterrissage autonome."
          }
        },
        team: {
          2018: {
            photo: "La nouvelle équipe pour 2018-2019!"
          },
          2017: {
            teamLead: "Directeur général",
            logisticsLead: "Directrice administrative",
            techLead: "Directeur technique",
            projectLead: "Chargé de projet",
            projectLeadF: "Chargée de projet",
            projectLeadTreasurer: "Chargé de projet et Trésorier",
            marketingCoordinator: "Responsable marketing",
            photo: "De gauche à droite : Riad Gahlouz, Félix Pepin, Olivier St-Amour, Eva Terriault, Max Colombié, Christophe Bédard, Arnaud Paré-Vogt, Justine Pepin, Pierre-Yves Lajoie"
          },
          2016: {
            photo: "De gauche à droite : Eva Terriault, Max Colombié, Olivier St-Amour, Antonio Sanniravong, Pierre-Yves Lajoie, Alex Latulipe Loiselle, David Binet, Justine Pepin, Christophe Bédard"
          },
          2015: {
            photo: "De gauche à droite : Jean-Alexandre Barszcz, Christophe Bédard, Constant Rietsch, Alexandre Borowczyck, Antoine Mignon, André Phu-Van Nguyen, Eva Terriault, Laurier Loiselle, Antonio Sanniravong, Alex Latulipe Loiselle"
          }
        },
        partners: {
          title: "Partenaires",
          platinum: "Platine",
          gold: "Or",
          silver: "Argent",
          bronze: "Bronze"
        },
        contact: {
          title: "Contact",
          description: "Pour toute question, n'hésitez pas à nous contacter!"
        }
      }
    }
  }
}, function(err, t) {
  // for options see
  // https://github.com/i18next/jquery-i18next#initialize-the-plugin
  jqueryI18next.init(i18next, $);
  // start localizing, details:
  // https://github.com/i18next/jquery-i18next#usage-of-selector-function
  $('body').localize();
  //$('.content').localize();
});