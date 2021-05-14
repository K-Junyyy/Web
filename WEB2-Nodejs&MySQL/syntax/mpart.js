var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

// 모듈 바깥에서 사용이 가능하도록 exports 함
module.exports = M;