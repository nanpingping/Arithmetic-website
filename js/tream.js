$(document).ready(function(){

    $("#btn").click(function(){
        var people=$("#people");
        if($("#family").val()==""){
            alert("战队名称不能为空");
            return false;
        }
        else if($("#people5").val()==""){
            alert("组员不得少于五名");
            return false;
        }
        else{
            $.post("http://101.132.100.188：8080/finish",
            {
                family_name:$("#family").val(),
                people1:$("#people1").val(),
                people2:$("#people2").val(),
                people3:$("#people3").val(),
                people4:$("#people4").val(),
                people5:$("#people5").val()
            },
                function(data){
                //alert("data: " + data );
                if(data==="5"){
                    alert("注册战队成功");
                    window.location="http://101.132.100.188：8080/index";
                }else if(data==="6"){
                    window.location="http://101.132.100.188：8080/family";
                    alert("有成员已经加入了战队");
                }else if (data<5){
                    window.location="http://101.132.100.188：8080/family";
                    alert("有一个或多个账号不存在");
                }else if(data==="7"){
                    window.location="http://101.132.100.188：8080/family";
                    alert("战队名被注册");
                }
            });
        }
    });
    
});