<!doctype html>
<html>
<head>
<title>title</title>
<meta charset='utf-8'>
</head>
<body>
    <h1>Cross Site Scripting</h1>
    <?php echo htmlspecialchars('<script>alert("hi")</script>');?>
</body>
</html>