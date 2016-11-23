/**
 * Created by lau on 16-11-23.
 */
function hello(name) {
    if (typeof name == 'string')
    {
        return name + ",hello";
    }
    return'name must is string'
}
alert(hello('yeeku!'))