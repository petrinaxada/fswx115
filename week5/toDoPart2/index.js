var myId = []

//initial loadup
axios.get("http://api.bryanuniversity.edu/petrina/list/")
    .then(result =>{
        result.data.forEach(function(e){
            var myTask = document.createElement("h2")
            var myDesc = document.createElement("h3")
            var myPrice = document.createElement("h3")
            var myCheck = document.createElement("input")
            var myDiv = document.createElement("div")
            var myDelete = document.createElement("button")
            myTask.textContent = `title: ${e.name}`
            myDesc.textContent = `description: ${e.description}`
            myPrice.textContent = `price: ${e.price}`
            myDelete.textContent = "delete"
            myCheck.setAttribute("type", "checkbox")
            myDiv.setAttribute("class", "newTask")
            myDelete.setAttribute("class", "delete")
            if(e.isComplete == true){
                myDiv.setAttribute("style", "text-decoration: line-through")
                myCheck.checked = true
            }
            document.body.appendChild(myDiv)
            myDiv.appendChild(myTask)
            myDiv.appendChild(myDesc)
            myDiv.appendChild(myPrice)
            myDiv.appendChild(myCheck)
            myDiv.appendChild(myDelete)

            myId.push(e._id)
        })
    })
    .catch(err => console.log(err))

//new task button
document.querySelector("#flexContainer").addEventListener("submit", function(e){
    e.preventDefault();
    axios.post("http://api.bryanuniversity.edu/petrina/list/", {
        name: document.querySelector("#title").value, 
        description: document.querySelector("#description").value,
        price: document.querySelector("#price").value,
        isComplete: false
    })
        .then(result =>{
            var myTask = document.createElement("h2")
            var myDesc = document.createElement("h3")
            var myPrice = document.createElement("h3")
            var myCheck = document.createElement("input")
            var myDiv = document.createElement("div")
            var myDelete = document.createElement("button")
            myTask.textContent = `title: ${result.data.name}`
            myDesc.textContent = `description: ${result.data.description}`
            myPrice.textContent = `price: ${result.data.price}`
            myDelete.textContent = "delete"
            myCheck.setAttribute("type", "checkbox")
            myDiv.setAttribute("class", "newTask")
            myDelete.setAttribute("class", "delete")

            document.body.appendChild(myDiv)
            myDiv.appendChild(myTask)
            myDiv.appendChild(myDesc)
            myDiv.appendChild(myPrice)
            myDiv.appendChild(myCheck)
            myDiv.appendChild(myDelete)

            myId.push(result.data._id)
        })
        .catch(err => console.log(err))
    document.querySelector("#title").value = ""
    document.querySelector("#description").value = ""
    document.querySelector("#price").value = ""
})

//checkoff completed tasks
document.addEventListener("mouseover", function(){
    var checkBox = document.querySelectorAll("input[type=checkbox]")
    checkBox.forEach(function(e, i){
        e.addEventListener("change", function(){
            if (e.checked === true){
                e.parentElement.setAttribute("style", "text-decoration: line-through")
                axios.put(`http://api.bryanuniversity.edu/petrina/list/${myId[i]}`, {
                    isComplete: true
                })
                    .catch(err => console.log(err))
            }
            else {
                e.parentElement.setAttribute("style", "text-decoration: none")
                axios.put(`http://api.bryanuniversity.edu/petrina/list/${myId[i]}`, {
                    isComplete: false
                })
                    .catch(err => console.log(err))
            }
        })
    })
})

//remove task
document.addEventListener("mouseover", function(){
    var myDelete = document.querySelectorAll(".delete")
    myDelete.forEach(function(e, i){
        e.addEventListener("click", function(){
            axios.delete(`http://api.bryanuniversity.edu/petrina/list/${myId[i]}`)
                .catch(err => console.log(err))
            e.parentElement.remove() 
        })
    })
})

///assisted by: D. Caviness & E.Yarborough