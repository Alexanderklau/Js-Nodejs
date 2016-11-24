/**
 * Created by lau on 16-11-24.
 */
function outer() {
    function inner1() {
        document.write("Local Function 111111<br />");
    }
    function inner2() {
        document.write("Local Function 222222<br />");
    }
    document.write("Start test function.....<br />");
    inner1();
    inner2();
    document.write("End test function....<br />");
}
document.write("Call ahead of outer.....<br />");
outer();
inner1();
document.write("Call afyer outer......<br />");
