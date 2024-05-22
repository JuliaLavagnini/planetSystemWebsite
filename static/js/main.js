const link = document.getElementById('link');
const text = document.getElementById('text');
const image = document.getElementById('image');
const image03 = document.getElementById('image03');
let button1 = document.getElementById("01");
let button2 = document.getElementById("02");
let button3 = document.getElementById("03");

const buttons = [ button1, button2, button3];
console.log(buttons);

//Mercury buttons
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        event.target.classList.add('active');

        // Hide image03 by default
        image03.classList.add('hidden');

        switch(event.target.id) {
            case "01":
                text.innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
                link.setAttribute('href', 'https://en.wikipedia.org/wiki/Mercury_(planet)');
                break;
            case "02":
                text.innerHTML = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3, only slightly less than Earth's density.";
                link.setAttribute('href', 'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure');
                image.setAttribute('src', '/static/assets/planet-mercury-internal.svg');
            break;
            case "03":
                text.innerHTML = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
                link.setAttribute('href', 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology');
                image03.setAttribute('src', '/static/assets/geology-mercury.png');
                image03.classList.remove('hidden');
                break;
            default:
                text.innerHTML = "";
                link.getAttribute("href");
                link.setAttribute('href', '');
        }
    });
});
