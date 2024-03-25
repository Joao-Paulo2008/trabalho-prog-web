const userName = document.getElementById("userName")
const userBio = document.getElementById("userBio")
const userImg = document.getElementById("imgUser")
const followers = document.getElementById("followers")
const reps = document.getElementById("reps")

document.addEventListener('keypress', async(event) => {if (event.key === 'Enter'){
    const user = document.querySelector(".search input").value

    const response = await fetch(`https://api.github.com/users/${user}`)
    const data = await response.json()

    console.log(data)
    
    userImg.setAttribute("src", data.avatar_url)
    userName.innerHTML = data.name
    userBio.innerHTML = data.bio
    followers.innerHTML = "Seguidores: " + data.followers
    reps.innerHTML = "Repositorios: " + data.public_repos

}});