let array_data = [
    {
        imageurl: "image/fee-service.png",
        title: "Fee for Service",
        content: "Integrated tools and automation options streamline and simplify patient engagement, encounter data capture and billing."
    },
    {
        imageurl: "image/quality-incentives.png",
        title: "Quality Incentives",
        content: "Reporting and analytics insights help make it easy to meet quality measures and maximize returns."
    },
    {
        imageurl: "image/pay-performance.png",
        title: "Pay for Performance",
        content: "Analytics and EMR integration helps you focus care on patients who need it most, optimizing incentive returns and health comes."
    },
    {
        imageurl: "image/value.png",
        title: "Value/Risk-Based Payments",
        content: "Scalable population health tools help you efficiently guide impactful, quality care to exceed benchmarks and avoid downside risk."
    }
];

let resultdata = ``;

for (let result of array_data) {
    resultdata+=`<div class="child">
            <img src="${result.imageurl}" alt="">
            <h3>${result.title}</h3>
            <p>${result.content}</p>
        </div>`
}

document.getElementById(`output`).innerHTML = resultdata;