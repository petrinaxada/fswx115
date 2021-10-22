var flexBox = document.querySelector('#toDoFlex');
axios.get("http://api.bryanuniversity.edu/petrina/list")
    .then(result => {
        console.log(result.data)
       result.data.forEach(function(e, i){
            var theTask = document.createElement('h1')
            var theDesc = document.createElement('h2')
            theTask.textContent = result.data[i].name
            theDesc.textContent = result.data[i].description
            if(result.data[i].isComplete == true){
                theTask.setAttribute('style', 'text-decoration: line-through')
                theDesc.setAttribute('style', 'text-decoration: line')
            }
            flexBox.appendChild(theTask)
            flexBox.appendChild(theDesc)

        })
    })
    .catch(error => console.log(error))