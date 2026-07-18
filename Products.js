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
