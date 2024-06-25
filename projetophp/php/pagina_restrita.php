<?php

session_start();


if (!isset($_SESSION['username'])) {

    header("Location: login.php");
    exit();
}

$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Restrita</title>
</head>
<body>
    <h2>Bem-vindo, <?php echo $username; ?>!</h2>
    <p>Esta é a página restrita do site.</p>
    <a href="logout.php">Sair</a>
</body>
</html>