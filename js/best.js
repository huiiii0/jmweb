$.ajax({

    url: "./js/best.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var name = data[i].name;
                var price = data[i].price;		
                var url = data[i].url;

                $(".bbox3").eq(i).append( '<a href="sub.html" target="_self">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 
                $(".bbox3").eq(i).append('<h6><a href="sub.html" target="_self">'+data[i].name+'</a></h6>');      
                $(".bbox3").eq(i).append('<button><a href="sub.html" target="_self">'+data[i].price+'</a></button>'); 

            }

        }

    }

});