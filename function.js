var question=new Array();
var answer=new Array();
var i=0;

answer=[0.74,'satisfactory'];
$(document).ready(function(){
    $('#ask').click(function(){
        document.getElementById('ans').value=answer[i];
        console.log(answer[i]);
        i++;

    });
});