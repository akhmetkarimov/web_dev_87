<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>

    <h2>Hello PHP</h2>
<!-- 
    <form action="test.php" method="GET">
        <h3>GET</h3>
        <input type="text" placeholder="Login" name="myLogin"> 
        <br>
        <br>
        <input type="password" placeholder="Password" name="myPassword">
        <br>
        <br>
        <button>Send</button>
    </form> 
    
-->

    <form action="signup.php" method="POST">
        <h3>POST</h3>
        <input type="text" placeholder="Name" name="myName"> 
        <br>
        <br>
        <input type="email" placeholder="Login" name="myLogin"> 
        <br>
        <br>
        <input type="password" placeholder="Password" name="myPassword">
        <br>
        <br>
        <button>Send</button>
    </form>

    <?php
        include "database.php";

        $posts = $db->query("SELECT * FROM post;");

        while ($row = $posts->fetch_object()) {
            echo "
            <h2>$row->title</h2>
            <p>$row->description</p>
            <hr>
            ";
        }
    
    ?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>

</body>
</html>
