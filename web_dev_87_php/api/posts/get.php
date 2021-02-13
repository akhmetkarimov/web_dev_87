<?php
    include "../../config/database.php";

    $s = $_GET['s'];

    $page = 0;
    $skip = 0;
    $limit = 12;

    if (isset($_GET['page'])) {
        $page = $_GET['page'];
        $skip = ($page - 1) * $limit;
    }


    $postlist = $db->query("SELECT post.id, post.title, post.description, post.views, 
    post.category_id, post.cover, category.category,
    AVG(review.mark) as rating, COUNT(review.id) as rev_count
    FROM post INNER JOIN category ON post.category_id = category.id 
    LEFT OUTER JOIN review ON post.id=review.post_id
    WHERE post.title LIKE '%$s%' OR post.description LIKE '%$s%' 
    GROUP BY post.id
    ORDER BY post.id DESC 
    LIMIT $skip, $limit;
    ");

    $pageQuery = $db->query("SELECT COUNT(post.id) as all_pro FROM post");
    $pageRes = $pageQuery->fetch_object();

    $totalPages = $pageRes->all_pro / 12;

    $result = [
        'posts'=>[]
    ];

    while ($post = $postlist->fetch_object()) {
        array_push($result['posts'], $post);
    }

    $result['totalPages'] = ceil($totalPages);

    echo json_encode($result);