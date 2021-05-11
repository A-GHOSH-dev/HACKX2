$(document).ready(function(){
    setInterval(function() { Timer(); }, 1);
    hide_all();
    $('#page1').show();
    $('#page1').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page2').fadeIn('fast');
        }
    });
    $('#page2').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page3').fadeIn('fast');
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page1').fadeIn('fast');
        }
    });
    $('#page3').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page4').show();
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page2').fadeIn('fast');
        }
    });
    $('#page4').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page5').fadeIn('fast');
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page3').show();
        }
    });
    $('#page5').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page6').fadeIn('fast');
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page4').fadeIn('fast');
        }
    });
    $('#page6').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page7').show();
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page5').fadeIn('fast');
        }
    });
    $('#page7').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page8').fadeIn('fast');
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page6').show();
        }
    });
    $('#page8').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page9').fadeIn('fast');
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page7').fadeIn('fast');
        }
    });
    $('#page9').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page10').fadeIn('fast');
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page8').fadeIn('fast');
        }
    });
    $('#page10').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page11').fadeIn('fast');
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page9').fadeIn('fast');
        }
    });
    $('#page11').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page12').fadeIn('fast');
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page10').fadeIn('fast');
        }
    });
    $('#page12').on('wheel', function(s) {
        if (s.originalEvent.deltaY > 0 || s.originalEvent.deltaX > 0){
            hide_all();
            $('#page13').fadeIn('fast');
        }
        else if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page11').fadeIn('fast');
        }
    });
    $('#page13').on('wheel', function(s) {
        if (s.originalEvent.deltaY < 0 || s.originalEvent.deltaX < 0){
            hide_all();
            $('#page12').fadeIn('fast');
        }
    });
    $('#b1').click(function(){
        hide_all();
        $('#page2').show();
    });
    $('#b2').click(function(){
        hide_all();
        $('#page3').show();
    });
    $('#b3').click(function(){
        hide_all();
        $('#page5').show();
    });
    $('#b4').click(function(){
        hide_all();
        $('#page8').show();
    });
    $('#b5').click(function(){
        hide_all();
        $('#page10').show();
    });
    $('#b6').click(function(){
        hide_all();
        $('#page13').show();
    });

});

function hide_all(){
    $('#page1').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').hide();
    $('#page6').hide();
    $('#page7').hide();
    $('#page8').hide();
    $('#page9').hide();
    $('#page10').hide();
    $('#page11').hide();
    $('#page12').hide();
    $('#page13').hide();
}

function Timer() {
    var eT = new Date("16 May 2021 14:30:00 GMT+05:30");
    eT = (Date.parse(eT) / 1000);

    var nw = new Date();
    nw = (Date.parse(nw) / 1000);

    var tL = eT - nw;

    var d = Math.floor(tL / 86400);
    var h = Math.floor((tL - (d * 86400)) / 3600);
    var m = Math.floor((tL - (d * 86400) - (h * 3600 )) / 60);
    var s = Math.floor((tL - (d * 86400) - (h * 3600) - (m * 60)));

    if (h < "10") { h = "0" + h; }
    if (m < "10") { m = "0" + m; }
    if (s < "10") { s = "0" + s; }

    $("#dys").html(d + "<span>\n\n Days</span>");
    $("#hrs").html(h + "<span>\n\n Hours</span>");
    $("#mns").html(m + "<span>\n\n Minutes</span>");
    $("#sec").html(s + "<span>\n\n Seconds</span>");

}

