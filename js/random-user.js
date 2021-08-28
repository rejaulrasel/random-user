const loadUsersData = () => {
    fetch('https://randomuser.me/api/?results=200')
    .then(res => res.json())
    .then(data => loaduserDetails(data.results))
}

const loaduserDetails = users =>{
    // window.scrollTo(0,80)
    window.scrollTo(0,50)
    users.forEach(user=>{
        console.log(user);
        const {title, first} = user.name;
        const {age,date} = user.registered; 
        const {city} =user.location;
        const {medium} = user.picture;
        const {email} = user
        document.getElementById('user-area').innerHTML=`
        <div class="card">
  <img src="${medium}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${title} ${first}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Email: ${email}</li>
    <li class="list-group-item">Age: ${age}</li>
    <li class="list-group-item">Date-of-Birth: ${date}</li>
    <li class="list-group-item">City: ${city}</li>
  </ul>
</div>
        `  
    })
}