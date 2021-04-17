<?php

function print_title(){
    if(isset($_GET['id'])){
        echo htmlspecialchars($_GET['id']);
      }
      else{
        echo "Welcome!";
      }
}

function print_list(){
    $list = scandir('./data');
    
    for ($i = 0; $i < count($list); $i++) { 
        if($list[$i] != '.' && $list[$i] != '..'){
          $title = htmlspecialchars($list[$i]);
          echo "<li><a href = \"index.php?id=$title\">$title</a></li>";
        }
    }
}

function print_description(){
    if(isset($_GET['id'])){
      $basename = basename($_GET['id']);
        echo htmlspecialchars(file_get_contents("data/".$basename));
      }
      else{
        echo "Hello PHP!!";
      }
}
?>