<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'];
    $password = $_POST['password'];

    $valid_user = 'usuario'; 
    $valid_password = 'senha123';

    if ($username === $valid_user && $password === $valid_password) {
  
        session_start();
        $_SESSION['username'] = $username;
        header("Location: pagina_restrita.php");
        exit();
    } else {
    
        header("Location: login.php?erro=1");
        exit();
    }
} else {
   
    header("Location: login.php");
    exit();
}
?>