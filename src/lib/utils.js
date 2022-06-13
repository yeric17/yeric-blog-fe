export const DateFormat = function(date,locale,options){
    if(!date) return '';
    return new Intl.DateTimeFormat(locale,options).format(new Date(date));
}
export const ParseCookie = function(str){
    const result = {};
    for(const cookie of str.split(";")){
        const [key,value] = cookie.split("=");
        result[key.trim()] = value;
    }
    return result;
}
export const TransformCookie = function(obj){
    const result = [];
    for(const key in obj){
        result.push(`${key}=${obj[key]}`);
    }
    return result.join(";");
}

