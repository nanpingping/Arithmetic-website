$(document).ready(function(){
    $get("/",

        function(data,status){
            //判断是传统技艺还是传统文化，控制视频播放的有无
            if(data){
                //如果是传统技艺
                $('.video-btn').attr('display','none');
            }else{
                //如果是传统文化
                $('.video-btn').attr('display','block');
            }
            //判断是否受控制，若受控且为学生则除了发送以外的按钮失效无法跳转其他页面。
            if(!data.teacher&&data.control===''){
                //受控制
                $('#back').attr('href','#');
                $('.video-btn a').attr('href','#');
                $('.game-btn a').attr('href','#');
            }else{
                //不受控制    
                $('#back').attr('href','Skills_map.html');
                $('.video-btn a').attr('href','video.html');
                //游戏部分判断本页面是什么内容选择进入的游戏界面。
                $('.game-btn a').attr('href','/');
            }
    })
})