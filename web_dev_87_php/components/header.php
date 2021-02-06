<nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
  <div class="container-fluid">
    <a class="navbar-brand" href="main.php">Web Dev 87</a>
    <?php

    if (isset($_SESSION['suser_id'])) {
      echo '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addModal">
                Add New Post
            </button>';
    }

    ?>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>



    <div class="collapse navbar-collapse" id="navbarsExample01">
      <ul class="navbar-nav me-auto mb-2">
        <li class="nav-item active">
          <a class="nav-link" aria-current="page" href="<?= $BASE_URL ?>/main.php">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>

        <?php
        if (isset($_SESSION['suser_id'])) {
        ?>

          <li class="nav-item">
            <a class="nav-link" href="profile.php">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="api/auth/logout.php">Logout</a>
          </li>


        <?php
        } else {
        ?>
          <li class="nav-item">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#loginModal">
              Login
            </button>
          </li>
        <?php
        }

        ?>
      </ul>

      <form>
        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </div>
</nav>