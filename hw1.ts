document.addEventListener("DOMContentLoaded",function(){new multable();},false);
class multable{
    constructor(){
        var i:number=1;
        var j:number=1;
        document.write("<table>");
        for(i=1;i<10;i++){
            document.write("<tr>");
            for(j=1;j<10;j++){
                document.writeln("<td width=70>"+i+"*"+j+"="+i*j+"</td>");
            }
            document.writeln("</tr>");
        }
    }
}