/**
 * Created by lau on 16-11-24.
 */
function outer() {
    function inner1() {
        document.write("local Function 11111111<br />");
    }
    function inner2() {
        document.write("local Function 22222222<br />");
    }
    document.write("Start test local Function....<br />");
    inner1();
    inner2();
    document.write("End test local Function.....<br />");
}
document.write("Call ahead of outer..<br /> ");
outer();
document.write("Call after other..<br />");