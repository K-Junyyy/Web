<!doctype html>
<html>

    <head>
        <title>title</title>
        <meta charset='utf-8'>
    </head>
    <body>

        <h1>coworkers</h1>
        <?php
            $coworkers = array('cocoon', 'henna', 'jimy');

            for ($i=0; $i < count($coworkers); $i++) { 
                echo $coworkers[$i].'<br>';
            }

            array_push($coworkers,'frank');

            for ($i=0; $i < count($coworkers); $i++) { 
                echo $coworkers[$i].'<br>';
            }
        ?>

        <h1>coworkers</h1>
        <?php
            $coworkers = array('cocoon', 'henna', 'jimy');
            print_r($coworkers);
        ?>

    </body>

</html>