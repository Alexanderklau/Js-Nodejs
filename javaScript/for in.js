/**
 * Created by lau on 16-11-23.
 */
for (var i = 0; i < 5; i ++)
{
    for (var j = 0; j < 5; j ++ )
    {
        document.writeln('j is :' + j);
        if (i >= 2) break;
        document.writeln('i is :' + i);
        document.writeln(['<br />']);
    }
}
