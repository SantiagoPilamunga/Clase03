// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    alert("Estoy listo");

    $("#Boton_saluda").click(function () {
        Saluda();
    });

    $("#Boton_despidete").click(function () {
        Despidete();
    });
});
function Saluda() {
    alert("hola");
    document.getElementById("input1").value = "Hola Santiago";
    $("#input2").val("Hola SJPC Jquery");
}


function Despidete() {
    alert("adios");
    document.getElementById("input1").value = "Chao Santiago";
    $("#input2").val("Chao SJPC Jquery");
}


