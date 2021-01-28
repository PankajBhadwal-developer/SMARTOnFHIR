$(function () {
  $("#patientId").on("click", function () {
    // e.preventDefault();

    FHIR.oauth2.ready()
      .then(client => {
        client.request("Patient").then((docs) => {
          $("#patient-view").append(JSON.stringify(docs, null, 4));
        })
          .catch((err) => {
            console.log(err)
          })
      }).catch((error) => {
        console.log(error)
      })














    $("#provider-view").addClass("hide");
    $("#patient-view").removeClass("hide");
    $("#main-view").addClass("hide");





  });


  $("#providerId").on("click", function () {
    // e.preventDefault();
    $("#provider-view").removeClass("hide");
    $("#patient-view").addClass("hide");
    $("#main-view").addClass("hide");
  });


  $(".backToMain").on("click", function () {
    // e.preventDefault();
    $("#provider-view").addClass("hide");
    $("#patient-view").addClass("hide");
    $("#main-view").removeClass("hide");
  });
});

