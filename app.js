document.getElementById("submitBtn").addEventListener('click',loadJokes)

function loadJokes(e){


  let no=document.getElementById("input1").value
  let type=document.querySelector('input[type=radio]:checked').value

  fetch(`https://v2.jokeapi.dev/joke/${type}?amount=${no}`).
    then(function(res){
      return res.json();
    }).then(function(data){

      let output='';
      data.jokes.forEach(function(joke){
        if(joke.type==="twopart"){
          output+=`<li>Setup : ${joke.setup}
            <br> &emsp;Delivery : ${joke.delivery}
          </li>`
        }
        else{
          output+=`<li>${joke.joke}</li>`
        }

      })
      document.getElementById('joke-list').innerHTML=output
    }).catch(function(err){
      console.log(err)
    })


  e.preventDefault()
}

/*
const xhr=new XMLHttpRequest();

xhr.open('GET',`https://v2.jokeapi.dev/joke/${type}?type=single&amount=${no}`,true)


let output=''

xhr.onload=function(){
  if(this.status===200){
    const jokes=JSON.parse(this.responseText)
    console.log(jokes)
    if(jokes.error===false){
      jokes.jokes.forEach(function(joke){
        output+=`<li> ${joke.joke} </li>`
      })
    }
    else{
      output+=`Sorry, we ran out of jokes !`
    }
  }


  document.getElementById('joke-list').innerHTML=output

}

xhr.send();*/
