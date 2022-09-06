$.ajax({

    url: "./js/event.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var name = data[i].name;
                var subname = data[i].subname;		
                var url = data[i].url;

                $(".bbox1").eq(i).append( '<a href="sub.html" target="_self">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 
                $(".bbox1").eq(i).append('<h6><a href="sub.html" target="_self">'+data[i].name+'</a></h6>');      
                $(".bbox1").eq(i).append('<h5><a href="sub.html" target="_self">'+data[i].subname+'</a></h5>'); 

            }

        }

    }

});