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
                    $pid = $_GET['pid'];
                    $query = $db->query("SELECT * FROM post WHERE id = $pid");
                    $post = $query->fetch_object();
                    if ($_SESSION['suser_id'] != $post->author_id) {
                        $db->query("UPDATE post SET views = views + 1 WHERE id = $pid");
                    }
                ?>
                <div class="row row-cols-1">
                        <div class="col">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em"> <?= $post->title; ?></text>
                                </svg>

                                <div class="card-body">
                                    <p class="card-text">
                                        <?= $post->description; ?>
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                        </div>
                                        <small class="text-muted"><i class="fas fa-eye" style="margin-right:4px;"></i><?=$post->views?></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    </main>

    <?php include "components/body-libs.php"; ?>

</body>

</html>