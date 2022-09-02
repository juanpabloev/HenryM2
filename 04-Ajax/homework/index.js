const createListItems = function (response) {
  response.forEach((element) => {
    $(`<li><b>${element.name}</b></li>`).appendTo("#lista");
  });
};

$("#boton").click(() => {
  $("#lista").empty();
  $.get("http://localhost:5000/amigos", createListItems); //(response) => {
  //   $("#lista").empty();
  //   // for (const user of response) {
  //        $(`<li><b>${element.name}</b></li>`).appendTo("#lista");
  //   // }
  // });
});

$("#search").click(() => {
  const id = $("#input")[0].value;
  $.get(`http://localhost:5000/amigos/${id}`, (response) => {
    $("#amigo")[0].innerHTML = `<b>${response.name}<b>`;
  });
});

$("#delete").click(() => {
  const id = $("#inputDelete")[0].value;
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success: function (response) {
      $("#success")[0].innerHTML = "<b>Tu amigo fue eliminado con exito<b>";
      $("#lista").empty();
      createListItems(response);
    },
  });
});
