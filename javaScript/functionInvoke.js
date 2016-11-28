/**
 * Created by lau on 16-11-28.
 */

var hello = function (name) {
    document.write(name + ",您好<br />");
}
window.hello("jack");
var p = {
    walk:function () {
        for(var i = 0; i < 2; i ++)
        {
            document.write("go away.....");
        }
    }
}
p.walk();