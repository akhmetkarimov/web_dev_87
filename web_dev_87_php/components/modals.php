<!-- Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="api/auth/signin.php" method="POST">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="myLogin" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="myPassword" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <a href="#" data-toggle="modal" data-target="#registerModal">Not have an Account ?</a>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    </div>
</div>


<!-- Register Modal -->
<div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Registration</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="api/auth/signup.php" method="POST">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" name="myName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="myLogin" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="myPassword" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <a href="#" data-toggle="modal" data-target="#loginModal">Already have an Account ?</a>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
</div>


<!-- Add Modal -->
<div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add New Post</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="POST" onsubmit="addPost(event)" enctype="multipart/form-data">
                    <div class="form-group mb-3">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" name="title" class="form-control" id="addTitle" placeholder="Enter Title" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleInputEmail1">Description</label>
                        <textarea name="description" class="form-control" id="addDescription" rows="3" required></textarea>
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleFormControlSelect1">Category</label>
                        <select class="form-control" id="addCategory" name="category">
                            <?php
                            $categories = $db->query("SELECT * FROM category;");
                            while ($row = $categories->fetch_object()) {
                            ?>
                                <option value='<?= $row->id ?>'><?= $row->category ?></option>
                            <?php
                            }
                            ?>
                        </select>
                    </div>

                    <div class="form-group mb-3">
                        <label for="exampleFormControlFile1" class="mb-3">Upload your Image</label>
                        <input type="file" name="post-img" class="form-control-file" id="addImg">
                    </div>


                    <input type="hidden" name="uid" value="<?= $_SESSION['suser_id'] ?>" id="addUser">
                    <button type="submit" class="btn btn-primary">Add New Post</button>
                </form>
            </div>
        </div>
    </div>
</div>


<?php
if (isset($_GET['editid'])) {
    $pid = $_GET['editid'];
    $query = $db->query("SELECT * FROM post WHERE id = $pid");
    $post = $query->fetch_object();
?>
    <!-- Edit Modal -->
    <div class="modal fade show" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="display: block">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Edit Post</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="api/posts/update.php" method="POST">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Title</label>
                            <input type="text" name="newTitle" class="form-control" id="exampleInputEmail1" placeholder="Enter Title" value="<?= $post->title ?>">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Description</label>
                            <textarea name="newDescription" class="form-control" id="exampleFormControlTextarea1" rows="3">
                            <?= $post->description ?>
                            </textarea>
                        </div>
                        <input type="hidden" name="pid" value="<?= $post->id ?>">
                        <button type="submit" class="btn btn-primary">Edit Post</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

<?php
}
?>