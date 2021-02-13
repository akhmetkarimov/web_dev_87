let category_id = 0
let searchVal = ''
let page = 1

getPosts(searchVal)

function getPosts(search, page) {
    search = !search ? '' : search
    page = !page ? 1 : page
    // res = 10 % 2 == 0 ? 'even' : 'odd'

    $.ajax({
        url: `api/posts/get.php?s=${search}&page=${page}`
    }).done(function(data) {
        data = JSON.parse(data)
        console.log(data)
        setPages(data.totalPages)
        showPosts(data.posts)
    })
}


function showPosts(posts) {
    const mainOutput = document.querySelector('#all-posts')

    let output = ''

    for (const post of posts) {
        post.rating = !post.rating ? '5' : post.rating
        post.cover = !post.cover ? 'images/template.png' : post.cover

        if (category_id == post.category_id) {
            output += `
            <div class="col" onclick="window.location.href='detail.php?pid=${post.id}'" style="cursor: pointer">
            <div class="card shadow-sm">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">${post.category}</a>
                    </li>
                    </ul>
                </div>
                <img class="card-img-top" src="${post.cover}" alt="Card image cap"  height="320" style="object-fit: cover;">

                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
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
            <div class="col" onclick="window.location.href='detail.php?pid=${post.id}'" style="cursor: pointer">
                <div class="card shadow-sm">
                <div class="card-header">
                <ul class="nav nav-pills card-header-pills">
                <li class="nav-item">
                    <a class="nav-link active" href="#">${post.category}</a>
                </li>
                </ul>
            </div>
            <img class="card-img-top" src="${post.cover}" alt="Card image cap" height="320" style="object-fit: cover;">
            
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>

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
    const image = document.querySelector('#addImg')

    const formData = new FormData()

    formData.append('title', title.value)
    formData.append('description', description.value)
    formData.append('uid', user.value)
    formData.append('category', category.value)
    formData.append('post-img', image.files[0])

    $.ajax({
        url: 'api/posts/save.php',
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData
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


function setPages(pages) {
    const all = document.querySelector('#all-pages')  
    let output = ''  

    for (let i = 1; i <= pages; i++) {
        output += `<li class="page-item" onclick="showNext(${i})">
                    <a class="page-link" href="#">${i}</a>
                  </li>`
    }

    all.innerHTML = output
}


function showNext(page) {
    getPosts(searchVal, page)
}