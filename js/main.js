
// WELCOME
// const drawWelcome = ()=> {
//     // Capturamos espacio donde vamos a pintar banner----------

//     const cajaWelcome = document.querySelector('.welcome');

//     // Creamos primer elemento del banner----------

//     const welcomeText = document.createElement('H1');
//     welcomeText.innerHTML = "Welcome";
//     cajaWelcome.append(welcomeText);

//     // Creamos imagen----------

//     const welcomeImage = document.createElement('IMG');
//     welcomeImage.src = ("assets/images/1.jpg");
//     cajaWelcome.append(welcomeImage);

// }
const drawWelcome = () => {
    // Capturamos espacio donde vamos a pintar banner
    const cajaWelcome = document.querySelector('.welcome');
    const bannerImg = document.querySelector('.welcome img')
    // Creamos primer elemento del banner


    bannerImg.src = "assets/images/1.jpg";



}


// TRIPS
// const drawTrips = ()=> {
//     const cajaTrips = document.querySelector('.tripCards');

//     const tripsText = document.createElement('H2');
//     tripsText.innerHTML = "Recommended Trips";
//     cajaTrips.append(tripsText);
// }

document.createElement(".recommended"); {

    const cajaTrips = document.createElement(".tripCards gridContainer"); {
        const photoTitles = document.createElement(".titles")
        photoTitles.innerHTML = "";
        cajaTrips.append(photoTitles);

        const photoDescription = document.createElement(".description")

    }



}





// DESTINATIONS
const drawDestination = () => {
    const cajaDestination = document.querySelector('.destination')
}




// const arrayImages = [
//     { 
//         url:'1.jpg',
//         alt: image1
//     }
// ]

// const drawTripCards

// pintarWelcome ()


// INVOCACIONES

drawWelcome();
drawTrips();