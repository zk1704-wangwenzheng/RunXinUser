var lineChartData = {
    //x坐标数据
    labels:["周一","周二","周三","周四","周五","周六","周日"]
    ,datasets:[
        {
            label:"my first",
            //统计表的背景颜色
            fillColor:"#ff0000",
            //统计表的画笔颜色
            strokeColor:"orange",
            //点的颜色
            pointColor:"green",
            //点边框的颜色
            pointStrokeColor:"#000",
            //鼠标触发时点的颜色
            pointHighlightFill:"#f00",
            //鼠标触发时点边框的颜色
            pointHighlightStroke:"blue",
            //Y坐标
            data:[100,200,300,400,505,655,1000]
        }
        ,{
            label:"my second",
            //统计表的背景颜色
            fillColor:"#ff0000",
            //统计表的画笔颜色
            strokeColor:"orange",
            //点的颜色
            pointColor:"green",
            //点边框的颜色
            pointStrokeColor:"#000",
            //鼠标触发时点的颜色
            pointHighlightFill:"#f00",
            //鼠标触发时点边框的颜色
            pointHighlightStroke:"blue",
            //Y坐标
            data:[311,241,144,477,268,477,589]
        }
    ]
}


window.onload = function(){
    //获取画布
    var ctx = this.document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true
        }
    });
}


