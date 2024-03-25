const btn = document.querySelector("button")
const ul = document.querySelector("ul")
const tasks = []

btn.addEventListener("click", () => {
    const task = document.querySelector("input").value
    tasks.push(task)

    ul.innerHTML = ""

    tasks.map((task, i) => {
        const li = document.createElement("li") 
        li.innerHTML = task

        ul.appendChild(li)

        li.addEventListener("click" , () => {
            tasks.splice(i, 1)
            ul.removeChild(li)
            console.log(i)
        })

    })
})