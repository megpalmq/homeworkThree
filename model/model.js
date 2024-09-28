export function changePage(pageName){
    console.log("pageName:",pageName);
    if(pageName== ""){
    $.get("pages/home.html", (data)=>{ $("#app").html(data);

    }).fail((error)=>{
        console.log("error", error);
        Swal.fire({
            title: 'Error',
            text: `${error.statusText}`,
            icon: "error",
            confirmButtonText: 'yes'
          })
    })
    $("#app").html(`<h1>home</h1>`)
    }else{
        $.get(`pages/${pageName}.html`, (data)=>{ $("#app").html(data);

        }).fail((error)=>{
            console.log("error", error);
            Swal.fire({
                title: 'Error',
                text: `${error.statusText}`,
                icon: "error",
                confirmButtonText: 'yes'
              })
        })
    $("#app").html(`<h1>${pageName}</h1>`)
    }
   
}

