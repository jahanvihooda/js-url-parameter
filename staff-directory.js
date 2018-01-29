function getURLParameter(Param) {
    var pageURL = window.location.search.substring(1);
    var variablesURL = pageURL.split('&');
    for (var i = 0; i < variablesURL.length; i++) {
        var parameterName = variablesURL[i].split('=');
        if (parameterName[0] == Param) {
            return parameterName[1];
        }
    }
}

var urlParameter = getURLParameter('aff');


if (urlParameter == 'ftf') {
    $('#faculty-filter').val('Full-time Faculty').change();
}

if (urlParameter == 'it') {
    $('#staff-filter').val('Information Technology Services').change();
}

if (urlParameter == 'osas') {
    $('#staff-filter').val('Office of Student & Academic Services').change();
}
