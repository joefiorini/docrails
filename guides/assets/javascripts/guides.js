function guideMenu(){
  if (document.getElementById('guides').style.display == "none") {
    document.getElementById('guides').style.display = "block";
  } else {
    document.getElementById('guides').style.display = "none";
  }
}

guidesIndex = {
  bind: function(){
    $(".guidesIndex").on("change", "select", guidesIndex.navigate);
  },
  navigate: function(e){
    var $list = $(e.target);
    url = $list.val();
    window.location = url;
  }
}
