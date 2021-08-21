const url = "https://health-automation-application.herokuapp.com";
$("#prof").css("visibility", "hidden");

$.ajax({
  url: url + "/user/verify",
  method: "GET",
  crossDomain: true,
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },
  success: function (res) {
    if (res.status !== 200) {
      window.location = "../500.html";
    } else if (res.status === 200) {
      console.log("success");
    }
  },
  error: function (err) {
    console.log(err);
    alert(err);
  },
});

$.ajax({
  url: url + "/user/getUserData",
  method: "GET",
  crossDomain: true,
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },

  success: function (res) {
    if (res.status !== 200) {
      window.location = "../500.html";
    } else if (res.status === 200) {
      $("#patname").html(res.data.name);
      $("#patemail").html(res.data.email);
      $("#patuserid").html(res.data.userId);
      $("#prof").css("visibility", "visible");
      console.log(res.data);
    }
  },
  error: function (err) {
    console.log(err);
    alert(err);
  },
});

function logout() {
  localStorage.clear();
  window.location = "../index.html";
}
