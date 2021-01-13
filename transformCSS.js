/*
   函数
   transformCSS

   作用
   1. 快速设置元素的 transform 变形 ele.style.transform = "translateX(100px)";
   transformCSS(ele, "translateX", 100);
   transformCSS(ele, "translateY", 100);
   transformCSS(ele, "rotate", 50);
   transformCSS(ele, "scale", 2);
   transformCSS(ele, "scaleY", 1);

   2. 读取元素 transform 变形值
   tranformCSS(ele, "translateX"); // 100
   tranformCSS(ele, "rotate"); // 50

   prop property 属性
   val value 属性值

*/

/**
 *
 * @param el   元素对象
 * @param prop 变形的样式
 * @param val  变形的样式值
 */
(function (w) {
    function transformCSS(el, prop, val) {
        if(el.store === undefined) {
            el.store = {}
        }
        // 设置
        if(arguments.length === 3) {
            // 向对象中存入参数
            el.store[prop] = val

            var str = ""
            for(var i in el.store) {
                // 判断 translateX scale rotate
                switch (i) {
                    case "translateX":
                    case "translateY":
                    case "translateZ":
                        str += i+"("+el.store[i]+"px)";
                        break;

                    case "rotate":
                    case "rotateX":
                    case "rotateY":
                    case "rotateZ":
                        str += i+"("+el.store[i]+"deg)";
                        break;

                    case "scale":
                    case "scaleX":
                    case "scaleY":
                    case "scaleZ":
                        str += i+"("+el.store[i]+")";
                        break;
                }
                // 设置变形样式
                el.style.transform = str
            }
        }

        // 获取
        if(arguments.length === 2) {
            // 判断 如果设置了 则返回设置的值
            if(el.store[prop]) {
                return el.store[prop]
            }
            // 如果没有设置 translate rotate 0
            // 判断样式是否以 scale 开头
            var start = prop.substr(0, 5)
            if(start === "scale") {
                return 1
            }else {
                return 0
            }
        }
    }

    w.transformCSS = transformCSS;
})(window)