/**
 * Created by lau on 16-11-28.
 */
function Person(national,age) {
    this.age = age;
    Person.national = national;
    var bb = 0;
}
var p1 = new Person('China',29);
document.writeln("Creating Your First Person object <br />");
document.writeln("p1 age of property is" + p1.age + "<br />");
document.writeln("p1 national of property is" + p1.national + "<br />");
document.writeln("pass person visit static state national property is " + Person.national + "<br />");
document.writeln("p1 bb of property is " + p1.bb + "<br /><hr />");
var p2 = new  Person('USA',32);
document.writeln("Creation Second Person object......<br />");
document.writeln("P1 age of property is" + p1.age + "<br />");
document.writeln("p1 national of property is" + p1.national + "<br />");
document.writeln("p2 age of property is" + p2.age + "<br />");
document.writeln("p2 national of property is" + p2.national + "<br />");
document.writeln("pass person visit static state national property is " + Person.national + "<br />");




