var Body = {
    // 바디 글자색 바꾸기
    SetColor:function(color){
        document.querySelector('body').style.color = color;
    },
    // 바디 배경색 바꾸기
    SetBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
    },
    // 링크 색 바꾸기
    LinkSetColor:function(color){
    var alist = document.querySelectorAll('a');
    for(var i = 0; i < alist.length; i++)
        alist[i].style.color = color;
    }
}

// 주간, 야간모드
function day_night_handler(self) {
    var target = document.querySelector('body');
    if (self.value == 'day') {
        Body.SetBackgroundColor('RGB(26,36,54)');
        Body.SetColor('white');
        Body.LinkSetColor('powderblue')
        self.value = 'night';
    }
    else {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        Body.LinkSetColor('blue')
        self.value = 'day';
    }
}