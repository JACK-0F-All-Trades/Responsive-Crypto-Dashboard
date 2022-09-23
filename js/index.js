const chart = document.querySelector("#info-chart").getContext("2d");

new Chart(chart,{
    type: "line",
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets:[
            {
                label: 'BTC',
                data: [29543, 67584, 32109, 83742, 12345, 34567, 45987, 76543, 53298, 39876, 49000, 67986],
                borderColor: "red",
                borderWidth: 2

            },
            {
                label: 'ETH',
                data: [1121, 29543,38109, 11112, 34567, 12345, 49700, 56543, 43298, 69876, 19000, 60086],
                borderColor: "green",
                borderWidth: 2

            },
            {
                label: 'EUR',
                data: [82012, 67000, 78654, 9657, 38043, 18345, 5540, 96543, 3298, 59876, 21070, 36036],
                borderColor: "blue",
                borderWidth: 2

            }

        ]
    },
    options: {
        responsive: true
    }
})



// side bar
const menuBtn = document.querySelector("#menu-icon");
const closeBtn = document.querySelector("#close-sidebar");
const sidebar = document.querySelector(".left");

menuBtn.addEventListener("click",()=>{
    sidebar.style.display = "block";
})

closeBtn.addEventListener("click",()=>{
    sidebar.style.display = "none";
})


// Theme btn 

const themeBtn = document.querySelectorAll(".theme-option");
const themeChange = document.querySelector(".theme-btn");
// themeBtn.addEventListener("click",()=>{
//     document.body.classList.toggle("dark-theme");

//     themeBtn.querySelector('span:first-child').classList.toggle('active');
//     themeBtn.querySelector('span:last-child').classList.toggle('active');
// })

const removeActiveFromTheme = ()=>{
    themeBtn.forEach(btn=>{
        btn.classList.remove("active");
    })
}


const root = document.querySelector(":root");

themeBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        removeActiveFromTheme();
        btn.classList.add("active");
        if(btn.classList.contains("dark")){
            document.querySelector("html").style.color = "white";
        }
        else{
            document.querySelector("html").style.color = "black";
        }
        // if(btn.classList.contains("light")){

        // }else if(btn.classList.contains("dark")){
        //     document.body.classList.add("dark-theme");
        // }
    });
})

themeChange.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})

