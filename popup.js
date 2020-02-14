document.getElementById("myButton").addEventListener("click", prepare_link);

function prepare_link() {
     var url_param = document.getElementById('url_param');
     //var target_link = document.getElementById('target_link');

     if ( ! url_param.value ) {
          return false;  
     }

     //target_link.href = target_link.href + "?s=" + escape(url_param.value);
     var target_link = "https://www.snopes.com/?s="+ escape(url_param.value)
     window.open(target_link,'_blank');
}

//var url_param = document.getElementById('url_param');
//var target_link = document.getElementById('url_param');
//target_link.href = "https://www.snopes.com/?s=" + '/' + escape(url_param.value);
