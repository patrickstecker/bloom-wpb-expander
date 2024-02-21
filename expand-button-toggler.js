jQuery(document).ready(function($) {
    $('.expand-button').click(function() {
        var expandClasses = $(this).attr('class').split(' ');
        var expandClass;
        for (var i = 0; i < expandClasses.length; i++) {
            if (expandClasses[i].startsWith('expand-button-id-')) {
                expandClass = expandClasses[i].replace('-id', '');
                break;
            }
        }
        var containerId = expandClass.replace('button', 'container');
        var closeClass = expandClass.replace('expand', 'close');
        $('#' + containerId).toggle();
        var closeButton = $('.' + closeClass)
        if (closeButton.length) {
            closeButton.eq(0).toggle();
            closeButton.click(function() {
                $('#' + containerId).hide();
                $(this).hide();
            });
        }
    });
});
