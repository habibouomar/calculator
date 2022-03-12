// JE CREE UN TABLEAU DANS LAQUELLE JE RECUPRE LES ELLEMENTS DU DOM (Element qui se trouve dans mon html) ET JE LES TRIE GRACE "[...]"
const clavier = [...document.querySelectorAll(".touche")];

// JE CREE UN NOUVEAU TABLEAU QUI VA RECUPERER LES INFORMATIONS DE MON PREMIER TABLEAU "CLAVIER" (outil de recherche.map) SUR CHAQUE TOUCHE JE RECUPERE LES INFORMATION DATA VIA DATASET AVEC LE NOM QUE J'AI DETERMINER "KEY"
const listeKeycode = clavier.map(touche => touche.dataset.key);

const ecran = document.querySelector(".ecran");

// MAINTENANT ON CREER DEUX EVENEMENTS "EVENT" que l'on va appeler (e) LE KEYDOWN EVENT LORSQUE LA TOUCHE EST PRESSEE SUE LE CLAVIER ET LE CLICK EVENT LORSQUE ON UTILISE LA SOURIS. ET ENSUITE CREER UN TABLEAU AVEC UNE FONCTION {} OU L'ON VA CIBLER LA VALEUR

document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();

    calculer(valeur);
})

document.addEventListener("click", (e) => {
    const valeur = e.target.dataset.key;

    calculer(valeur);
})

// APRES  AVOIR DETERMINER LES VALEURS AU CLICK ET A LA TOUCHE, ON VA CREER UNE FONCTION DE CALCULE QUI VA RECUPERER CES MEMES VALEURS ( dans le cas ou celle-ci appartienne à mon tableau "listekeycode")

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {

        switch (valeur) {

            case "8": ecran.textContent = ""; break;

            case "13": const calcul = eval(ecran.textContent);
                ecran.textContent = calcul; break;

            default: const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = clavier[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }

}

window.addEventListener("error", (e) => {
    alert("Salut l'ami c'est Rick & Morty.. Ta saisie est incorrect, nous t'invitons à recommencer 👽 ")

})

const bouton = document.querySelector("#planet");
const emojis = ["🌎", "🌏", "🌍"];

bouton.addEventListener("mouseover", () => {
    bouton.innerText = emojis[Math.floor(Math.random() * emojis.length)]

})