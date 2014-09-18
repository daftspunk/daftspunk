october.controllers['blog/post'] = function ($scope, $request) {


    /*
     * Lazy load other posts
     */
    setTimeout(function(){
        $('#otherPostsContainer').on('inview', function(event, visible) {
            if (visible) loadOtherPosts()
        })
    }, 1000)

    var otherPostsLoaded = false,

    loadOtherPosts = function() {
        if (otherPostsLoaded) return
        $request('onGetOtherPosts', function(data) { $scope.otherPosts = data })
        otherPostsLoaded = true
    }

}