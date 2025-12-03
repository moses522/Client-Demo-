$("#btn").on("click", (e) => {
  e.preventDefault();

  let name = $("#name").val();
  let lastname = $("#lastname").val(); // <-- שם משתנה תואם לשרת

  $.ajax({
    method: "POST",
    url: "/submit",
    data: { name: name, lastname: lastname }, // <-- תואם ל-server
    success: function (response) {
      console.log("Data received:", response);
    },
  });
});
