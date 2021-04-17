<?php require('lib/print.php');?>
<!doctype html>
<html>

<head>
    <title><?php print_title() ?></title>
    <meta charset="utf-8">
</head>

<body>
    <h1><a href="index.php">WEB</a></h1>
    <ol>
        <?php
            print_list();
        ?>
    </ol>

    <a href="create.php">create</a>
    <form action="create_process.php" method ="post">
        <p>
            <input type="text" name = "title" placeholder = "Title">
        </p>
        <p>
            <textarea name="description" placeholder = "description" rows=10 cols=40></textarea>
        </p>
        <p>
            <input type="submit">
        </p>
    </form>

    <h2>
        <?php 
            print_title()
        ?>
    </h2>

    <?php 
        print_description();
    ?>

</body>

</html>