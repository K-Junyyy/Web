<!doctype html>
<html>
<head>
<title>title</title>
<meta charset='utf-8'>
</head>
<body>
    <h1>function</h1>
    <h2>basic</h2>
    <?php
        function basic(){
            print("hello");
        }
        basic();
    ?> 

    <h2>parameter & argument</h2>
    <?php
        function sum($left, $right){
            print($left+$right."<br>");
        }
        sum(2,4);
        sum(4,6);
    ?>

    <h2>return</h2>
    <?php

    function sum2($left, $right){
        return $left + $right;
    }
    print(sum2(2,5));
    ?>
    
    
</body>
</html>