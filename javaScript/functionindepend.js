/**
 * Created by lau on 16-12-1.
 */

function Person(name) {
    this.name = name;
    this.info = function () {
        alert("My name is :" + this.name);
    }

}
var p = new Person("yeeku");
p.info();
var name = "test name";
p.info.call(window);
