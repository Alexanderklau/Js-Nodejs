/**
 * Created by lau on 16-12-1.
 */
function changeAge(person) {
    person.age = 10;
    document.write("function deal with person is age :" + person.age + "<br />");
    person = null;
}
var person = {age : 5};
document.write("function deal with is age :" + person.age + "<br />");
changeAge(person);
document.write("function deal with is person age :" + person.age + "<br />");
document.write("person type is :" + person);

