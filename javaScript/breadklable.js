/**
 * Created by lau on 16-11-23.
 */
outer:
for  (var i = 0; i < 5; i ++)
{
    for (var j = 0; j < 5; j ++)
    {
        document.writeln('j is :' + j);
        if (j > 2) break outer;
        document.writeln('i is :' + i);
        document.writeln('<br>');
    }
}
