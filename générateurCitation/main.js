const Citation = [
    {
        citation : "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
        auteur : "Confucius"
    },
    {
        citation:"Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.",
        auteur:"Jean-Paul Sartre"
    },
    {
        citation:"La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
        auteur:"Gandhi"
    },
    {
        citation:"On passe une moitié de sa vie à attendre ceux qu'on aimera et l'autre moitié à quitter ceux qu'on aime.",

        auteur:"Victor Hugo"
    },
    {
        citation:"On passe une moitié de sa vie à attendre ceux qu'on aimera et l'autre moitié à quitter ceux qu'on aime.",

        auteur:"Albert Einstein"
    },
    {
        citation:"La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",

         auteur:"Coluche"
     },
];
var random =null;
let bouton = document.getElementById('generer');



bouton.addEventListener('click',()=>{
   random= Math.floor(Math.random()*Citation.length);
   document.querySelector('.phrase').innerHTML =Citation[random].citation;
   document.querySelector('.auteur').innerHTML=Citation[random].auteur;
})