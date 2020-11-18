document.addEventListener("DOMContentLoaded", function () { new multable(); }, false);
var multable = /** @class */ (function () {
    function multable() {
        var i = 1;
        var j = 1;
        document.write("<table>");
        for (i = 1; i < 10; i++) {
            document.write("<tr>");
            for (j = 1; j < 10; j++) {
                document.writeln("<td width=70>" + i + "*" + j + "=" + i * j + "</td>");
            }
            document.writeln("</tr>");
        }
    }
    return multable;
}());
