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
                $query = $db->query("SELECT post.id, post.title, post.description, post.views, post.cover, AVG(review.mark) as rating, COUNT(review.id) as rev_count FROM post LEFT OUTER JOIN review ON post.id=review.post_id WHERE post.id=$pid GROUP BY post.id");

                $queryCom = $db->query("SELECT * FROM review INNER JOIN account ON review.uid = account.id WHERE post_id=$pid");

                $post = $query->fetch_object();
                if ($_SESSION['suser_id'] != $post->author_id) {
                    $db->query("UPDATE post SET views = views + 1 WHERE id = $pid");
                }
                $post->cover = !$post->cover ? 'images/template.png' : $post->cover;
                
                ?>
                <div class="row row-cols-1">
                    <div class="col">
                        <div class="card shadow-sm" >
                            <img class="card-img-top" src="<?=$post->cover?>" alt="Card image cap" height="620" style="object-fit: cover;">

                            <div class="card-body">
                                <h5 class="card-title"><?=$post->title?></h5>

                                <p class="card-text">
                                    <?= $post->description; ?>
                                </p>
                                <div class="d-flex justify-content-end align-items-center">
                                    <small class="text-muted" style="margin-right:8px;"><i class="fas fa-eye" style="margin-right:8px;"></i><?= $post->views ?></small>
                                    <small class="text-muted" style="margin-right:8px;"><i class="fas fa-comment" style="margin-right:8px;"></i><?= $post->rev_count ?></small>
                                    <small class="text-muted" style="margin-right:8px;"><i class="fas fa-star" style="margin-right:8px;"></i><?php echo $post->rating == 0 ? 5 : number_format($post->rating, 1) ?></small>
                                </div>
                            </div>
                            <div class="card-footer">

                                <?php
                                while ($review = $queryCom->fetch_object()) {
                                ?>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p><?= $review->name ?></p>
                                        <p><?= $review->date ?></p>
                                    </div>
                                    <p><?= $review->content ?></p>
                                    <hr>
                                <?php
                                }
                                if (isset($_SESSION['suser_id'])) {
                                ?>
                                    <form class="mb-5" action="api/review/save.php" method="POST">
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Your Review</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="content"></textarea>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Your Grade</label>
                                            <select name="mark" class="form-control" id="exampleFormControlSelect1">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        <input type="hidden" name="uid" value="<?= $_SESSION['suser_id'] ?>">
                                        <input type="hidden" name="pid" value="<?= $pid ?>">
                                        <button class="btn btn-primary mt-4">Save</button>

                                    </form>

                                <?php } ?>
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