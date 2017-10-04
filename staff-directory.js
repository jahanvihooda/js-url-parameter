/**
 *
 *  Added by Jahanvi Hooda, 10/04/17
 *  This function returns the url parameter, 
 *  and deals with multiple parameters as well
 *  Parameter is set to a variable called urlParameter
 *  Credit: http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
 *
 */
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
console.log(url);

/**
 *
 *  Added by Jahanvi Hooda, 10/04/17
 *  If statements check value of urlParameter
 *  and change value of drop down menu accordingly
 *
 */
if (urlParameter == 'od') {
    $('#staff-filter').val('Office of the Dean').change();
}

if (urlParameter == 'apd') {
    $('#staff-filter').val('Academic & Program Directors').change();
}

if (urlParameter == 'it') {
    $('#staff-filter').val('Information Technology Services').change();
}

if (urlParameter == 'osas') {
    $('#staff-filter').val('Office of Student & Academic Services').change();
}