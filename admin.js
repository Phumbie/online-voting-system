$(document).ready(function(){

    $("form").submit(function(e){
        e.preventDefault()
        var name = $("#inputFullName").val()
        var slogan = $("#Slogan").val()
        var bio = $("#inputBio").val()
        var age = $("#inputAge").val()
        var party=$("#party").val()
        
        $.post("http://localhost:3000/candidates", {name,slogan,bio,age,party}).done(function(){
            console.log("Saved")
        })
    })


        $.getJSON('http://localhost:3000/candidates')
        .done(function(data){
            data.forEach((x,i) => {
                let li = document.createElement('li');
                li.innerHTML = `<button class='btn'><a href='#' class="presidentClass" id="${Number(i+1)}">${i+1}. ${x.name} (${x.party})
                <button type='button' class='btn btn-primary update' id="delete1">Update</button></button>  <button class="btn btn-danger delete" id="delete2">Delete</button>`;
                document.querySelector('#presidentul').appendChild(li);
            });
        })


        $.getJSON('http://localhost:3000/users')
        .done(function(data){
            let tbody = document.createElement('tbody');
            data.forEach((x,i) => {
               tbody.innerHTML = ` <tr>
               <th scope="row">${i+1}</th>
               <td>${x.name}</td>
               <td>${x.email}</td>
             </tr>`;

             document.querySelector('#tableUser').appendChild(tbody);
            });
        })

        $('#presidentul').click(function(e){
            e.preventDefault();
           if(e.target.classList.contains('delete')){
              const id = e.target.parentElement.id;

              $.ajax({
                  method: 'DELETE',
                  url: 'http://localhost:3000/candidates/'+id,
                  success: function(result){
                      console.log(result);
                  }
              })
           }
        })



  });

