let vote = document.querySelector('#vote').addEventListener('click', function(e){
    if(e.target.classList.contains('votebtn')){
        const ids = e.target.parentElement.id;

        $.getJSON('http://localhost:3000/candidates/'+ids)
        .done(function(data){
            let div = document.createElement('div');
            div.innerHTML=`  
            <div class="card cardcandidate" style="width: 18rem;">
            <div class="card-body">
              <h3 class="card-title">${data.name}</h3>
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">NAME: </li>
              <li class="list-group-item">PARTY:${data.party}</li>
              <li class="list-group-item">SLOGAN:${data.slogan}</li>
              <li class="list-group-item">BIO:${data.bio}</li>
            </ul>
            <button type="button" id="closedisplay" class="btn btn-secondary" data-dismiss="div">Close</button>
          </div>
            `;
            $('#displayhere').append(div);
            $('#closedisplay').click(function(){
                div.display ='hidden';
                div.remove();
            })
        })

    }
})

$(document).ready(function(){
    $.getJSON('http://localhost:3000/candidates/1')
        .done(function(data){
        document.querySelector('#pName1').innerText = data.name;
        document.querySelector('#pText1').innerHTML = `<ul class="list-group list-group-flush">
        <li class="list-group-item">PARTY: ${data.party}</li>
        <li class="list-group-item">SLOGAN: ${data.slogan}</li>
        <li class="list-group-item">BIO: ${data.bio}</li>
      </ul>`;
        })

    $.getJSON('http://localhost:3000/candidates/2')
    .done(function(data){
    document.querySelector('#pName2').innerText = data.name;
    document.querySelector('#pText2').innerHTML = `<ul class="list-group list-group-flush">
    <li class="list-group-item">PARTY: ${data.party}</li>
    <li class="list-group-item">SLOGAN: ${data.slogan}</li>
    <li class="list-group-item">BIO: ${data.bio}</li>
    </ul>`;
    })

    let vote1 = 0;
    let vote2 = 0;

    
})


