/**
 * @param {Function} fn 防抖函数
 * @param {Number} delay 延迟时间
 */
export function debounce(fn, delay) {
  var timer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

/**
 * @param {date} time 需要转换的时间
 * @param {String} fmt 需要转换的格式 如 yyyy-MM-dd、yyyy-MM-dd HH:mm:ss
 */
export function formatTime(time, fmt) {
  if (!time) return '';
  else {
    const date = new Date(time);
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds(),
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  }
}

export function timeForMat(count) {
  // 拼接时间
  let time1 = new Date()
  time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
  let Y1 = time1.getFullYear()
  let M1 = ((time1.getMonth() + 1) > 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
  let D1 = (time1.getDate() > 10 ? time1.getDate() : '0' + time1.getDate())
  let timer1 = Y1 + '-' + M1 + '-' + D1 // 当前时间
  let time2 = new Date()
  time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
  let Y2 = time2.getFullYear()
  let M2 = ((time2.getMonth() + 1) > 10 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
  let D2 = (time2.getDate() > 10 ? time2.getDate() : '0' + time2.getDate())
  let timer2 = Y2 + '-' + M2 + '-' + D2 // 之前的7天或者30天
  return {
    t1: timer1,
    t2: timer2
  }
}

//时间戳转日期
function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  return M + D
};

//获取指定天数内所有日期
export function getDaysArray(count) {
  var dateTime = Date.parse(new Date()) / 1000;; //获取当前日期
  var dateList = [];
  for (var i = count; i >= 0; i--) {
    dateList[i] = timestampToTime(dateTime);
    dateTime = dateTime - 86400;
  }
  return dateList
}
