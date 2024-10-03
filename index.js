const d = new Date().getFullYear();

$(".year").text(d);

$(".do").on("click", function(){
    alert("Your Details Submitted Successfully");
});

$(".do").on("click", function(){
    $(".clicked").val(' ');
});