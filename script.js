// fetch address fun
let userLocation=document.getElementById("location")
userLocation.addEventListener("click",()=>{
    userLocation.innerHTML="fetching location..."
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat=position.coords.latitude
        let lon=position.coords.longitude
        let locationApi=`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2`
        let fetchingArea=async()=>{
            let response=await fetch(locationApi)
            let {address:{suburb,city}}=await response.json()
            userLocation.innerHTML=`<i class="fa-solid fa-location-dot"></i> ${suburb}, ${city}`
        }
        fetchingArea()
    })
})



// fetch catagory
let fetCatagory=async()=>{

    let res=await  fetch('https://dummyjson.com/products/categories')
    let catagories = await res.json()
    console.log(catagories)
    let catagory_items=document.getElementById("catagory_items")
    catagories.forEach(catagory => {
        catagory_items.innerHTML+=`
        <div class="catagory-cary">
            <div class="catagory-img">💕</div>
            <p class="catagory-name">${catagory.name}</p>
        </div>
        `
        
    });
}
fetCatagory()






