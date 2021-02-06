<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.79.0">
    <title>Album example · Bootstrap v5.0</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/album/">

    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }
    </style>

    <?php include "components/head.php"; ?>

</head>

<body>
    <?php include "components/header.php"; ?>

    <main>

        <div class="album py-5 bg-light">
            <div class="container">
                <?php
                    $uid = $_SESSION['suser_id'];
                    $query = $db->query("SELECT * FROM account WHERE id = $uid");
                    $userDb = $query->fetch_object();
                ?>
                <div class="row row-cols-3">
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="card-img-top" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="">
                                <div class="card-body">
                                    <p class="card-text">
                                        <?=$userDb->name?>
                                    </p>
                                    <p class="card-text">
                                    <?=$userDb->email?>
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>



                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-4">
                    <?php

                    $posts = $db->query("SELECT * FROM post WHERE author_id=$uid;");
                    while ($row = $posts->fetch_object()) {
                    ?>

                        <div class="col">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em"><?=$row->title;?></text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        <?= substr($row->description, 0, 50) . ' ...'; ?>
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <a href="detail.php?pid=<?=$row->id?>" type="button" class="btn btn-sm btn-outline-secondary">View</a>
                                            <a href="profile.php?editid=<?=$row->id?>" type="button" class="btn btn-sm btn-outline-secondary">Edit</a>
                                            <a href="api/posts/delete.php?pid=<?=$row->id?>" type="button" class="btn btn-sm btn-outline-secondary">Delete</a>
                                            <!-- <a type="button" class="btn btn-sm btn-outline-secondary">Edit</a> -->
                                        </div>
                                        <small class="text-muted"><i class="fas fa-eye" style="margin-right:4px;"></i><?=$row->views?></small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <?php } ?>
                </div>




            </div>
        </div>

    </main>

    <?php include "components/body-libs.php"; ?>

</body>

</html>