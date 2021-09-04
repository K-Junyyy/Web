var http = require('http');
var url = require('url');


var app = http.createServer(function(request,response){
  
    var _url = request.url;
    if (_url == '/') {

        var title  = '상품목록';
        var html =
        `
        <html>
        <head>
            <title>커피캣 스토어</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <main class="App">
            <div class="ProductListPage">
                <h1>상품목록</h1>
                <ul>
        `;

        // var request=require('request');
        // request('https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products',function(error, response, body){
        //     if(!error&&response.statusCode==200)
        //         console.log(1);
        //     });
        




        html += 
        `
                </ul>
            </div>
            </main>
        </body>
        </html>
        `;

        /*
        fetch('https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products').then(response => {
            // response 처리
            console.log(response);
            // 응답을 JSON 형태로 파싱
            return response.json();
            }).then(data => {
              // json 출력
              console.log(data)

              document.write(
                `
                <html>
                <head>
                  <title>커피캣 스토어</title>
                  <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                  <main class="App">
                    <div class="ProductListPage">
                      <h1>상품목록</h1>
                      <ul>
                `
              );

              for(var i = 0; i < data.length; i++){
    
                document.write(
                  `<li class="Product">
                    <img src="${data[i].imageUrl}">
                    <div class="Product__info">
                      <div>${data[i].name}</div>
                      <div>${data[i].price}원~</div>
                    </div>
                  </li>`
                )
    
              }

              document.write(
                `
                      </ul>
                    </div>
                  </main>
                </body>
                </html>
                `
              );


            }).catch(err => {
              // error 처리
              console.log('Fetch Error', err);
            });
        */

        response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        //response.write(html);
        response.end(html);
    }

    if (_url == '/cart') {
        var title  = '상품정보';
        response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        response.end(title);
    }

    if (_url == '/products/:productId') {
        var title  = '상품장바구니';
        response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        response.end(title);
    }

    if (_url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
});

app.listen(3000, function(){
  console.log("server is running.")
});
