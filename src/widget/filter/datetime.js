
export function datetime (date) {
    var now = +new Date;
    var text='';
    var distance = now - date;
    if(distance <= 86400*1000 ){
        text = "大约" + Math.round((now - date)/3600000)+ "小时以前";
    }else if(distance < 86400000*30){
        text = Math.round((now - date)/86400000)+ "天以前";
    }else if(distance < 86400000*30*12){
        text = Math.round((now - date)/86400000/30)+ "个月以前";
    }else{
        text = "一年以前";
    }
    return text;
}

export function fmtDate(_date, fmt) {
    var date = new Date(_date)
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}