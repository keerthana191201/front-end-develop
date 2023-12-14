// var a = 10;

// var b = 5;

// c = a + b;

// console.log(c);

// document.getElementById("header").innerText = "Hello World";

// document.getElementById("change").addEventListener("click", function () {
    // let data = document.getElementById("header");

// document.getElementById("header").classList.toggle("global");
// data.innerHTML = "<i>Hello World </i>";
// data.style.color = "red";
// data.style.fontSize = "52px";
// data.style.cssText = "color:red; font-size:52px; background-color:green";
// })

let a = 0;

document.getElementById("add").addEventListener("click", function(){
    let data = document.getElementById("head");

    a++;
    a;

    data.innerText = a;

})

document.getElementById("minus").addEventListener("click", function () {
    
    a--;
    a;

    document.getElementById("head").innerText = a;
})

// let result = ``;

// result += `<ul>`;

// result += `<li>kamal</li>`;

// result += `<li>karthi</li>`;

// result += `</ul>`;

// document.getElementById("output").innerHTML = result;

// let array_data = ["karthi", "kamal", "ramesh"];

// array_data.push("kamal");

// console.log(array_data);

// let result = ``;

// result += `<ul>`;

// for (let data of array) {
//     result += `<li>${data}</li>`;
// }
// result += `</ul>`;

// document.getElementById('output').innerHTML = result;
// let team_data = [
//     {
//         Mat: 6,
//         Won: 6,
//         Lost: 0,
//         Tied: 0,
//         NR: 0,
//         Points: 12,
//         NRR: 1.405
//     },
//     {
//         Mat: 6,
//         Won: 6,
//         Lost: 0,
//         Tied: 0,
//         NR: 0,
//         Points: 12,
//         NRR: 2.405
//     },
//     {
//         Mat: 6,
//         Won: 5,
//         Lost: 1,
//         Tied: 0,
//         NR: 0,
//         Points: 12,
//         NRR: 1.305
//     }
// ];

// let result_data = ``;

// result_data += `<table>
//             <thead>
//                 <th>S.No</th>
//                 <th>Mat</th>
//                 <th>Won</th>
//                 <th>Lost</th>
//                 <th>Tied</th>
//                 <th>NR</th>
//                 <th>Points</th>
//                 <th>NRR</th>
//             </thead>
//             <tbody>`;
// let i = 1;
// for (let data of team_data) {
    
//     result_data += `
//                 <tr>
//                     <td>${i++}</td>
//                     <td>${data.Mat}</td>
//                     <td>${data.Won}</td>
//                     <td>${data.Lost}</td>
//                     <td>${data.Tied}</td>
//                     <td>${data.NR}</td>
//                     <td>${data.Points}</td>
//                     <td>${data.NRR}</td>
//                 </tr>
//             `;
// }

// result_data += `</tbody>
//                 </table>`;

// document.getElementById("output").innerHTML = result_data;

$(document).ready(function () {
    
    // $("#head").hide();
    // $(".subheading").show(4000);

    // $(".subheading").css("color", "blue");
    // $("#head").css(
    //     {
    //         "color": "red",
    //         "background-color": "yellow",
    //         "font-size":"40px"
    //     }
    // )

    // $(".subheading").addClass("test");

    // $(".subheading").removeClass("wel");

    // $(".subheading").toggleClass("wel");

    // let data = $('.head').text();
    // $('.subhead').text(data);

    // $('.head').attr("id", "header");

    // let attrval = $('.head').attr("id");

    // $('.subhead').addClass(attrval);
    // $('.head').html("<i> Main heading</i>");

    // let htmlval = $('.head').html();
    
    // $('.subhead').html(htmlval);

    // $('.btn_add').on("click", function () {
    //     $('.container').append("<h2>Subheading</h2>");
    // });
    // $('.btn_remove').on("click", function () {
    //     $('.container h2').remove();
    // });

    // $('.add').on("click", function () {
    //     let data = Number($('.firstnumber').val()) + Number($('.secondnumber').val());
    //     console.log(data);
    // });

});

