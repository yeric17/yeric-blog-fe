export const DateFormat = function(date,locale,options){
    if(!date) return '';
    return new Intl.DateTimeFormat(locale,options).format(new Date(date));
}