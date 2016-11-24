/**
 * Created by lau on 16-11-24.
 */

var factorial = function (n) {
    if (typeof (n) == "number") {
        if (n == 1) {
            return 1
        }
        else {
            return n * factorial(n - 1);
        }
    }
    else
        {
            alert("type not be recognition");
        }

}
alert(factorial(5));
