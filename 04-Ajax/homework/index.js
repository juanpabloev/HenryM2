$("#boton").click(() => {
  $.get("http://localhost:5000/amigos", (response) => {
    if ($("#lista")) {
      $("#lista")[0].innerHTML = "";
    }
    for (const user of response) {
      $(`
          <li>Nombre: ${user.name}<br>
          Edad: ${user.age}<br>
          Email: ${user.email}<br>
           Id: ${user.id}</li>
          `).appendTo("#lista");
    }
  });
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
    success: function () {
      $("#success")[0].innerHTML = "<b>Tu amigo fue eliminado con exito<b>";
    },
  });
});
