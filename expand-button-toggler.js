jQuery(document).ready(function($) {
    $('.expand-button').click(function() {
        var expandId = $(this).attr('id');
        var containerId = expandId.replace('button', 'container');
        var closeId = expandId.replace('expand', 'close');
        $('#' + containerId).toggle();
        var closeButton = $('#' + closeId);
        if (closeButton.length) {
            closeButton.toggle();
        }
    });

    $('.close-button').click(function() {
        var closeId = $(this).attr('id');
        var containerId = closeId.replace('close', 'expand').replace('button', 'container');
        $('#' + containerId).hide();
        $(this).hide();
    });
});