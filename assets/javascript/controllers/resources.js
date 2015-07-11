october.controllers['resources'] = function ($scope, $request) {

    setTimeout(function(){

        var $container = $('#resourceItems');

        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });

        $('#resourceFilters').on('click', 'a', function() {
            $(this).siblings().removeClass('active').end().addClass('active')
            var selector = $(this).attr('data-filter')
            $container.isotope({ filter: selector })
            return false
        })

    }, 0)

}