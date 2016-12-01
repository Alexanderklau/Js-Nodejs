/**
 * Created by lau on 16-12-1.
 */
    function Dog(name,age,bark) {
    this.name = name;
    this.age = age;
    this.bark = bark;
    this.info = function () {
        return this.name + " age is: " + this.age + ", bark is :" + this.bark;
    }
}
    var dog = new Dog("jack",3,'wowowoow');

    function Cat(name,age) {
        this.name = name;
        this.age = age;
    }
    var cat = new Cat("kittle",2);
    alert(dog.info.call(cat));



