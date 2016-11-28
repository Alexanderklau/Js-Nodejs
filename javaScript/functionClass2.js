/**
 * Created by lau on 16-11-28.
 */
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.info = function () {
        document.writeln("My name is: " + this.name + "<br />");
        document.writeln("My age is: " + this.age + "<br />");
    };
}
var p = new Person('yeeku',29);
p.info();
