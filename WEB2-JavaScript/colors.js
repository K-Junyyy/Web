var Links = {
    // 링크 색 바꾸기
    SetColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // for (var i = 0; i < alist.length; i++){
        //     alist[i].style.color = color;
        // }
        $('a').css('color', color)
    }
    
}

var Body = {

    // 바디 글자색 바꾸기
    SetColor: function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color)
    },
    // 바디 배경색 바꾸기
    SetBackgroundColor: function (color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color)
    }

}

// 주간, 야간모드
function day_night_handler(self) {
    var target = document.querySelector('body');
    if (self.value == 'day') {
        Body.SetBackgroundColor('RGB(26,36,54)');
        Body.SetColor('white');
        Links.SetColor('powderblue')
        self.value = 'night';
    }
    else {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        Links.SetColor('blue')
        self.value = 'day';
    }
}