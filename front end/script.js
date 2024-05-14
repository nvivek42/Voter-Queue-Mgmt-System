
const url = 'http://localhost:3000'

// $(document).ready (function selectConstituency () {  
//     $("#constituency").change (function () {  
//         var selectedConstituency = $(this).children("option:selected").text();  
//     });  
// });  
$(document).ready(function() {
    $('#constituency').on('change', function() {
        
    $.ajax({
        url: url + '/'+$('#constituency').val(),
        method: 'get',
        // data:{
            
        //      id: selectedConstituency
        // },
        success: (response) => {
            console.log(response)
            if(response['status'] == 'success'){
                 //console.log('welcome to my application: '+response['data'][0]['votingCentreName'])
                 for (var i = 0; i < response['data'].length; i++) {
                    console.log(response['data'][i] )   
                     }
                
            }
            else{
                alert(response['error'])
            }
        },
        error: (response) => {
            console.log(response)
        },
    })
})
})

// $(document).ready(function() {
//     $("#constituency").change (function () {
//         var selectedConstituency = $(this).children("option:selected").text();  
//         $.ajax({
//             url: url + '/',
//             method: 'GET',
//             data:{
                 
//             },
//             success: (response) => {
//                 console.log(response)
//                 if(response['status'] == 'success')
//                     alert('welcome to my ecommerce application')
//                 else{
//                     alert(response['error'])
//                 }
//             },
//             error: (response) => {
//                 console.log(response)
//             },
//         })
//     });
//   });


$(document).ready (function selectVotingCentre () {  
    $("#votingCentre").change (function () {  
        var selectedVotingCentre = $(this).children("option:selected").text();  
    }); 
});  

function reset() {
    $("#constituency").val('select')
    $("#votingCentre").val('select')
 }
