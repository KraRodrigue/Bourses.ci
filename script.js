const toggleBtn = document.getElementById("toggleBtn");
const iconUp = document.getElementById("iconUp");

toggleBtn.addEventListener("click", () => {
    iconUp.classList.toggle("show");
});





document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner l'icône, le menu et la boîte
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const boxMenu = document.querySelector('.box-menu');
    
    // Ajouter un écouteur d'événement sur l'icône
    menuIcon.addEventListener('click', function(event) {
        // Empêcher la propagation pour que le clic sur l'icône ne déclenche pas la fermeture
        event.stopPropagation();
        
        // Ouvrir/fermer le menu
        menu.classList.toggle('menu-active');
        
        // Faire apparaître/disparaître la boîte
        boxMenu.classList.toggle('box-active');
    });
    
    // Empêcher que les clics à l'intérieur du menu ferment celui-ci
    menu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // Fermer tout quand on clique sur la boîte
    boxMenu.addEventListener('click', function() {
        // Fermer le menu et la boîte
        menu.classList.remove('menu-active');
        boxMenu.classList.remove('box-active');
    });
    
    // Ajouter un écouteur d'événement sur tout le document
    document.addEventListener('click', function() {
        // Fermer le menu et la boîte si ouverts
        if (menu.classList.contains('menu-active')) {
            menu.classList.remove('menu-active');
        }
        if (boxMenu.classList.contains('box-active')) {
            boxMenu.classList.remove('box-active');
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    const bourseHorsLink0 = document.getElementById('pop');
    const pop11Div0 = document.getElementById('pop1-1');
    
    bourseHorsLink0.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le lien de naviguer
        
        // Bascule l'affichage du div
        if (pop11Div0.style.display === 'block') {
            pop11Div0.style.display = 'none';
        } else {
            pop11Div0.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bourseHorsLink = document.getElementById('bourse-hors');
    const pop11Div = document.getElementById('pop11');
    
    bourseHorsLink.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le lien de naviguer
        
        // Bascule l'affichage du div
        if (pop11Div.style.display === 'block') {
            pop11Div.style.display = 'none';
        } else {
            pop11Div.style.display = 'block';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const bourseHorsLink1 = document.getElementById('bourse-ci');
    const pop11Div1 = document.getElementById('pop12');
    
    bourseHorsLink1.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le lien de naviguer
        
        // Bascule l'affichage du div
        if (pop11Div1.style.display === 'block') {
            pop11Div1.style.display = 'none';
        } else {
            pop11Div1.style.display = 'block';
        }
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const Resultat = document.getElementById('pop2');
    const Result = document.getElementById('cont');
    
    Resultat.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le lien de naviguer
        
        // Bascule l'affichage du div
        if (Result.style.display === 'block') {
            Result.style.display = 'none';
        } else {
            Result.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const Resultat1 = document.getElementById('bours1');
    const Result1 = document.getElementById('pop22');
    
    Resultat1.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le lien de naviguer
        
        // Bascule l'affichage du div
        if (Result1.style.display === 'block') {
            Result1.style.display = 'none';
        } else {
            Result1.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const Resultat2 = document.getElementById('bours2');
    const Result2 = document.getElementById('pop23');
    
    Resultat2.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le lien de naviguer
        
        // Bascule l'affichage du div
        if (Result2.style.display === 'block') {
            Result2.style.display = 'none';
        } else {
            Result2.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const Resultat3 = document.getElementById('bours3');
    const Result3 = document.getElementById('pop24');
    
    Resultat3.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le lien de naviguer
        
        // Bascule l'affichage du div
        if (Result3.style.display === 'block') {
            Result3.style.display = 'none';
        } else {
            Result3.style.display = 'block';
        }
    });
});
