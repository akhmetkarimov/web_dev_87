<?php
    include "../../config/database.php";

    $postlist = $db->query("SELECT post.id, post.title, post.description, post.views, post.category_id, category.category 
    FROM post INNER JOIN category ON post.category_id = category.id ORDER BY post.id DESC");
    
    $result = [];

    while ($post = $postlist->fetch_object()) {
        array_push($result, $post);
    }

    echo json_encode($result);