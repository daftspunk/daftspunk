/*
 * Application
 *
require services/services
require directives/directives
require filters/filters

 *
 * Angular
 *
=require ../vendor/angular-moment/moment
=require ../vendor/angular-moment/angular-moment

 *
 * Bootstrap
 *
=require ../vendor/bootstrap/js/transition
=require ../vendor/bootstrap/js/alert
=require ../vendor/bootstrap/js/button
=require ../vendor/bootstrap/js/carousel
=require ../vendor/bootstrap/js/collapse
=require ../vendor/bootstrap/js/dropdown
=require ../vendor/bootstrap/js/modal
=require ../vendor/bootstrap/js/tooltip
=require ../vendor/bootstrap/js/popover
=require ../vendor/bootstrap/js/scrollspy
=require ../vendor/bootstrap/js/tab
=require ../vendor/bootstrap/js/affix

 *
 * Flat UI
 *
=require ../vendor/flat-ui/js/balloon-selector
=require ../vendor/flat-ui/js/bootstrap-select
=require ../vendor/flat-ui/js/jasny-offcanvas

 *
 * Misc
 *
=require ../vendor/inview/jquery.inview.js
=require ../vendor/isotope/jquery.isotope.js
=require ../vendor/prettify/prettify.js

 */

$(document).tooltip({
    selector: "[data-toggle=tooltip]"
})

$('.select-block').selectpicker({style: 'btn-hg btn-default', menuStyle: 'dropdown'});

/*
 * Prettify code snippests
 */

function applyPrettyPrint() {

    var codeBlocks = $('div.content pre:not(.prettyprint)')

    if (codeBlocks.length > 0) {
        codeBlocks.addClass('prettyprint')
        prettyPrint()
    }
}

//
// Jumbotron
//


$(window).on('resize', function(){
    var jumbotron = $('.jumbotron-home'),
        surplus = ($(window).height() - jumbotron.height()) / 2

    jumbotron.css({ paddingTop: surplus, paddingBottom: surplus })
    jumbotron.addClass('loaded')
})

$(document).ready(function(){
    $(window).triggerHandler('resize')
})

//
// Angular
//

app.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {

    $rootScope.$on('$viewContentLoaded', function(scope) {
        setTimeout(applyPrettyPrint, 0) // Let the animations finish
        // setTimeout(applyPrettyPrint, 1000) // Let the animations finish
    })

    $rootScope.$on('$routeChangeStart', function() {
        $('div.content pre').hide()
    })

    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        $rootScope.bodyClass = $location.path() == '/' ? 'home' : 'default'
    })

    $rootScope.$on('$cmsBlocksReplceContent', function(e, name) {
        $(window).triggerHandler('resize')
    })

}])
