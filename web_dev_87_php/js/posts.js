let category_id = 0
let searchVal = ''

getPosts(searchVal)

function getPosts(search) {
    search = !search ? '' : search
    // res = 10 % 2 == 0 ? 'even' : 'odd'

    $.ajax({
        url: `api/posts/get.php?s=${search}`
    }).done(function(data) {
        data = JSON.parse(data)
        showPosts(data)
    })
}


function showPosts(posts) {
    const mainOutput = document.querySelector('#all-posts')

    let output = ''

    for (const post of posts) {
        post.rating = !post.rating ? '5' : post.rating

        if (category_id == post.category_id) {
            output += `
            <div class="col">
            <div class="card shadow-sm">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">${post.category}</a>
                    </li>
                    </ul>
                </div>
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">${post.title}</text>
                </svg>
            
                <div class="card-body">
                    <p class="card-text">
                     ${post.description.substring(0, 50)}...
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a href="detail.php?pid=${post.id}" type="button" class="btn btn-sm btn-outline-secondary">View</a>
                            <!-- <a type="button" class="btn btn-sm btn-outline-secondary">Edit</a> -->
                        </div>
                        <small class="text-muted"><i class="fas fa-eye" style="margin-right:4px;"></i>${post.views}</small>
                        <small class="text-muted" style="margin-right:8px;"><i class="fas fa-comment" style="margin-right:8px;"></i>${post.rev_count}</small>
                        <small class="text-muted" style="margin-right:8px;"><i class="fas fa-star" style="margin-right:8px;"></i>${Number(post.rating).toFixed(1)}</small>
                    </div>
                </div>
            </div>
            </div>
            `
        }
        if (category_id == 0) {
            output += `
            <div class="col">
                <div class="card shadow-sm">
                <div class="card-header">
                <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                    <a class="nav-link active" href="#">${post.category}</a>
                </li>
                </ul>
            </div>
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">${post.title}</text>
                </svg>
            
                <div class="card-body">
                    <p class="card-text">
                     ${post.description.substring(0, 50)}...
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a href="detail.php?pid=${post.id}" type="button" class="btn btn-sm btn-outline-secondary">View</a>
                            <!-- <a type="button" class="btn btn-sm btn-outline-secondary">Edit</a> -->
                        </div>
                        <small class="text-muted"><i class="fas fa-eye" style="margin-right:4px;"></i>${post.views}</small>
                        <small class="text-muted" style="margin-right:8px;"><i class="fas fa-comment" style="margin-right:8px;"></i>${post.rev_count}</small>
                        <small class="text-muted" style="margin-right:8px;"><i class="fas fa-star" style="margin-right:8px;"></i>${Number(post.rating).toFixed(1)}</small> </div>
                </div>
            </div>
            </div>
            `
        }

    }

    mainOutput.innerHTML = output
}


function addPost(e) {

    e.preventDefault()

    const title = document.querySelector('#addTitle')
    const description = document.querySelector('#addDescription')
    const user = document.querySelector('#addUser')
    const category = document.querySelector('#addCategory')


    $.ajax({
        url: 'api/posts/save.php',
        method: 'POST',
        data: {
            title: title.value,
            description: description.value,
            uid: user.value,
            category: category.value
        }
    }).done(function(data) {
        data = JSON.parse(data)
        if (data.success) {
            const modal = document.querySelector('#addModal')
            modal.style.display = 'none'
            modal.classList.remove('show')
            document.querySelector('body').classList.remove('modal-open')
            document.querySelector('.modal-backdrop').classList.remove('modal-backdrop')


            title.value = ''
            description.value = ''

            getPosts(searchVal)
        }
    })

}


getCategories()

function getCategories() {
    $.ajax({
        url: 'api/categories/get.php'
    }).done(function(data) {
        data = JSON.parse(data)
        showCategories(data)
    })
}

function showCategories(categories) {
    const mainOutput = document.querySelector('#all-categories')

    let output = `
        <li class="nav-item active">
            <a class="nav-link" href="#" onclick="setCategory(0)">All</a>
        </li>`

    for (const category of categories) {
        output += `
        <li class="nav-item active">
            <a class="nav-link" href="#" onclick="setCategory(${category.id})">${category.category}</a>
        </li>`
    }

    mainOutput.innerHTML = output
}


function setCategory(id) {
    category_id = id
    getPosts(searchVal)
}

function searchPosts(e) {
    e.preventDefault()
    const search = document.querySelector('#search')
    searchVal = search.value
    getPosts(search.value)
}