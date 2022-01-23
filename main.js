/* js */
"use strict";

/* fonction perso */

/**
 * 
 * @param {*} sParam 
 * @returns 
 */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
//And this is how you can use this function assuming the URL is,
//http://dummy.com/?technology=jquery&blog=jquerybyexample.
//var tech = getUrlParameter('technology');
//var blog = getUrlParameter('blog');

/**
 * 
 * @param {*} param 
 * @returns 
 */
function decoupe_string(param) {
    var string_objet = $(param).prop('outerHTML');
    console.log('test: ', string_objet.anchor("src"));
    return (fields[0]);
}
/* fonction perso */

$(document).ready(function () {

    var scroolBool = false;

    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    //clic sur la selection des projet
    $("#target1").click();

    //si on clic sur une image
    $(".projet_get").on('click', function (event) {
        //creation du selecteur id
        let element = "#" + this.id;
        //clone de la card
        let popupData = $(element).parent().clone();
        //aplication dans la popup
        $(".contenu_popup").html(popupData);
        let popupTitre = $(".contenu_popup > div > div > div > h4").clone();
        $(".contenu_popup > div > div > div > h4").hide("slow");
        $("#exampleModalCenterTitle").html(popupTitre);
        
        //changement opacité
        //$(".contenu_popup > div > img").fadeTo( "slow" , 1, function() {});
        $(".contenu_popup > div > img").addClass("wopacity");
    })

    //affichage masquage des information avec la selection
    function tri_projet_perso() {
        $(".projet_pro").hide("slow");
        $(".projet_perso").show("slow");
    }
    $(".tri_projet_perso").on("click", tri_projet_perso);

    function tri_projet_pro() {
        $(".projet_perso").hide("slow");
        $(".projet_pro").show("slow");
    }
    $(".tri_projet_pro").on("click", tri_projet_pro);

    function tri_projet_tout() {
        $(".projet_perso").show("slow");
        $(".projet_pro").show("slow");
    }
    $("#target1").on("click", tri_projet_tout)

    //nav
    $(".navbar a").on('click', function (event) {

        if (this.link !== null) {

            event.preventDefault();
            var link = $(this).attr('href');

            $('html, body').animate({
                scrollTop: $(link).offset().top
            }, 600, function () {
                window.location.link = link;
            });
            setTimeout(function () {
                $('.navbar-toggler-icon').click();
            }, 600);
        }
    });

    //loader
    $('[data-col]:nth-child(5n)').removeClass('col-sm-3').addClass('data-col');
    $(".loader").fadeOut("1000");
    console.log('fadeOut loader');

    //quand le loader est ok
    //clic si ya des param
    //ex ?projet=plastea
    var getParam = getUrlParameter('projet');
    if (getParam != undefined) {
        console.log('getParam: ', getParam);
        var idParam = "#" + getParam;
        //$(idParam).click();
        setTimeout(() => {
            $(idParam).click();
            console.log("clic", idParam);
        }, 100);

    }

    //scroll nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            document.querySelector("nav").className = "navbar sticky-top navbar-expand-md navbar-dark bg-transparent";
        }

        if (window.scrollY < 200) {
            document.querySelector("nav").className = "navbar sticky-top navbar-expand-md navbar-dark bg-dark";
        }

    });

    //hover
    $(".projet_get").hover(function () {
        $(this).animate({
            opacity: 0.25
        }, 100, function () {
            //on grise l'image
        });
    }, function () {
        $(this).animate({
            opacity: 1
        }, 100, function () {
            //on dégrise (lol)
        });
    });

});