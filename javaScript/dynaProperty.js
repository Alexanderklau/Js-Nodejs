/**
 * Created by lau on 16-11-30.
 */

function Student(grade,subject) {
    this.grade = grade;
    Student.subject = subject;
}
s1 = new Student(5,'Java');
with(document) {
    writeln('s1 is grade type: ' + s1.grade + "<br />");
    writeln('s1 is subject type: ' + s1.subject + "<br />" );
    writeln('Student is subject type: ' + s1.subject + "<br />" );
}
s1.subject = 'Ruby';
with (document)
{
    writeln('<hr /> is s1 subject type <br />');
    writeln('s1 is subject type: ' + s1.subject + "<br />");
    writeln('Student is subject type: ' + Student.subject + "<br />" );
}