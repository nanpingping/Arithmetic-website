$(document).ready(function(){
    $get("/",

        function(data,status){
            //判断是否为教师，如果是老师显示控制按钮，如果是学生则显示发送框。
            if(data.teacher){
                //教师端
                $(".control-btn").css('display', 'block');
                $(".chat_bot").css('display', 'none');
            }else{
                //学生端
                $(".control-btn").css('display', 'none');
                $(".chat_bot").css('display', 'block');
                
                //判断是否受控制，若受控且为学生则除了发送以外的按钮失效无法跳转其他页面。
                if(data.control===''){
                    //受控制
                    $('#back').attr('href','#');
                }else{
                    //不受控制
                }
            }
    })
})