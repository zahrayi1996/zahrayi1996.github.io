var typed;

$(document).ready(function(){

    // $(".email-copy-to-clipboard").click(function(){
    //     copyTextToClipboard();
    // });
    //
    // var options = {
    //     strings: ["z.asadi1375@gmail.com@J8@gmail.com"],
    //     typeSpeed: 60,
    //     backDelay:  1000,
    //     backSpeed: 50,
    //     loop: true,
    //     showCursor: true,
    //     cursorChar: '|',
    //     smartBackspace: false,
    // };
    //
    // typed = new Typed(".email-value", options);


    let links = {
        'fa-github' : 'https://github.com/zahrayi1996' ,
        'fa-instagram' : 'https://www.instagram.com/zahrayi.1996/' ,
        'fa-google' : 'mailto:z.asadi1375@gmail.com' ,
        // 'fa-linkedin' : '#' ,
        'fa-telegram' : 'https://t.me/zahrayi1996' ,
        // 'fa-stack-overflow' : '#' ,

    };

    for( let lnk in links){
        $('.' + lnk ).click(function(){

            console.log("click on " + lnk);

            openUrlInNewTab(links[lnk]);
        });
    }

});

function openUrlInNewTab(url) {
    window.open(url, '_blank');
}
