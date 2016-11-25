/**
 * Created by lau on 16-11-25.
 */
var test = function (name) {

    return "Hello," + name;
}
var rval = test('leegang');
var obj = new test('leegang');
alert(rval + "\n" + obj);