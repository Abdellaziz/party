
 let x=$('.side').offset().left



$('.sid a').click(function(){
    let c= $('.side').innerWidth()
    
    if (x==-c)
    {
        $('.side').animate({left:`0px`},1000)
        $('#hhh').hide(500) 
    }
    
}
)
$('.lkl i').click(function()
{
    let c= $('.side').innerWidth()
    if (x==-c)
    {
        $('.side').animate({left:`-${c}px`},1000) 
        $('#hhh').show(500) 
    }
})


$("a[href^='#']").click(function(e)
{
    let aHref = $(e.target).attr('href')
    let secOffest = $(aHref).offset().top
    $("html,body").animate({scrollTop:secOffest} , 1000)
})



$('.open').next().slideDown()

$('h3').click(function()
{

$(this).next().slideToggle(500);
$("#Details #par").not($(this).next()).slideUp(500)
})


var month=["jan","feb","march","april","may","june","July","aug","sep","oct","nov","dec"]
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let dat=`${time.getDate()} ${month[time.getMonth()]}`;
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0-" + hour : hour;
    min = min < 10 ? "0-" + min : min;
    sec = sec < 10 ? "0-" + sec : sec;

    let currentTime = hour + ":" 
        + min + ":" + sec + am_pm;

    document.getElementById("clock")
        .innerHTML = sec+" s";
        document.getElementById("clock-m").innerHTML = min+" m";
        document.getElementById("clock-h").innerHTML = hour+" h "+am_pm;
        document.getElementById("clock-d").innerHTML = dat+" d";
}

showTime();

let text=document.getElementById("exampleFormControlTextarea1")
let count=document.getElementById("counter")
let max=text.getAttribute("maxlength")
let err=document.querySelector("#error")

text.oninput=function(){
    count.innerHTML=max-text.value.length
    if (count.innerHTML==0)
    {
        err.classList.replace('d-none','d-block')
        count.innerHTML=""
    }
    else
    {
        err.classList.replace('d-block','d-none')
    }
}

