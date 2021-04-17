<!doctype html>
<html>

<head>
    <title>title</title>
    <meta charset='utf-8'>
</head>

<body>

    <h1>while</h1>
    <?php
        $i = 0;
        while($i < 3)
        {
            echo "$i<br>";
            $i++;
        }
    ?>

    <h1>for</h1>
    <?php
        for ($i=0; $i < 3; $i++) { 
            echo "$i<br>";
        }
    ?>


</body>

</html>