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
        <?php print_list();?>
    </ol>

    <a href="create.php">create</a>

    <?php if(isset($_GET['id'])) { ?>
        <a href="update.php?id=<?=$_GET['id']?>">update</a>
    <?php }?>

    <h2>
        <?php print_title();?>
    </h2>

    <?php print_description();?>

    <form action="update_process.php" method ="post">
        <input type="hidden" name ="old_title" value = "<?=$_GET['id']?>">
        <p>
            <input type="text" name = "title" placeholder = "Title" value = "<?php print_title();?>">
        </p>
        <p>
            <textarea name="description" placeholder = "description" rows=10 cols=40><?php print_description();?></textarea>
        </p>
        <p>
            <input type="submit">
        </p>
    </form>

</body>

</html>