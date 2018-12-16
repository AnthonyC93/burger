document.addEventListener('DOMContentLoaded', function() {
    var options={};
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
});

$(".secondary-content").on('click',function(){
    console.log(this.id);

    let objectToSend={
        id:this.id
    }
    console.log(objectToSend)

    $.ajax('/'+objectToSend.id, {
        type: "PUT"
        // data:objectToSend
    }).then(function(){
        console.log('burger eaten!');
        location.reload();
    })
})

$('#add').on('click',function(){
    event.preventDefault();

    let burgerNameEntered=$('#burger').val();
    console.log(burgerNameEntered)
    
    let objectToSend={
        burgerNameEntered:burgerNameEntered
    }

    if(burgerNameEntered!=''&&burgerNameEntered!=undefined){
        $.ajax('/',{
            type:'POST',
            data: objectToSend
        }).then(
            function(){
                console.log('burger added!');
                location.reload();
            }
        )
    }
})
