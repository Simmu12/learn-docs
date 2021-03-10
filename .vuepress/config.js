
module.exports = {
    lang: "et",
    title: "Tere, Mees/naine!",
    description: "See on mu esimene Vuepressi leht! Tegelt teine",
    base: "/learn-docs/",
    dest: "gh-pages",

    themeConfig: {
        logo: "https://vuejs.org/images/logo.png",
        navbar: [
            // esileht
            {
                text: "Kodu",
                link: "/",
            },
            // teine leht teises folderis
            {
                text: "igavus",
                link: "/vpdocs/",
            },
            // kolmas leht kolmandas folderis jne
            {
                text: "Prototüüpimine",
                link: "/prototyypimine/",
            },
            {
                text: "inf",
                link: "/cvi/",
            },
        ],
        sidebar: "auto",
    },
};