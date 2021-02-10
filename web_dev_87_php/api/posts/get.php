<?php
    include "../../config/database.php";

    $s = $_GET['s'];

    $postlist = $db->query("SELECT post.id, post.title, post.description, post.views, 
    post.category_id, category.category,
    AVG(review.mark) as rating, COUNT(review.id) as rev_count
    FROM post INNER JOIN category ON post.category_id = category.id 
    LEFT OUTER JOIN review ON post.id=review.post_id
    WHERE post.title LIKE '%$s%' OR post.description LIKE '%$s%' 
    GROUP BY post.id
    ORDER BY post.id DESC ");
    
    $result = [];

    while ($post = $postlist->fetch_object()) {
        array_push($result, $post);
    }

    echo json_encode($result);