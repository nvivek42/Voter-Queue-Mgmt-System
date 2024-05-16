
const url = 'http://localhost:3000'

// $(document).ready (function selectConstituency () {  
//     $("#constituency").change (function () {  
//         var selectedConstituency = $(this).children("option:selected").text();  
//     });  
// });  
$(document).ready(function() {
    const selectElement = $('#votingCentre');
    $('#constituency').on('change', function() {
        
    $.ajax({
        url: url + '/'+$('#constituency').val(),
        method: 'post',
        // data:{    
        //      id: selectedConstituency
        // },
        success: (response) => {
            //console.log(response)
            if(response['status'] == 'success'){
                
                selectElement.empty();
                $.each(response['data'], function(index, optionData) {
                    selectElement.append($('<option></option>').attr('value', optionData['votingCentreId']).text(optionData['votingCentreName']));
                  });
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

$(document).ready(function() {
$('#votingCentre').on('change', function() {
    var optionSelected = $("option:selected", this);
    console.log(optionSelected.val())
    $.ajax({
        url: url + '/votingCentre/'+ optionSelected.val(),
        method: 'post',
        // data:{    
        //      id: selectedConstituency
        // },
        success: (response) => {
            if(response['status'] == 'success'){
                console.log("tasting success")
                // selectElement.empty();
                
                    $('#ajaxTableBody').empty(); // Clear existing rows
                    console.log("response['data']: "+response['data'])

                    $.each(response['data'], function(index, item) {
                        console.log(item.id)
                        const row = $('<tr>');
                        row.append($('<td>').text(item.id));
                        row.append($('<td>').text(item.votingCentreName));
                        row.append($('<td>').text(item.queueLength));
                        row.append($('<td>').text(item.expectedTime));
                        row.append($('<td>').text(item.lastUpdated));
                        $('#ajaxTableBody').append(row);
                    });
                
                
            }
            else{
                console.log(response['error'])
            }
        },
        error: (response) => {
            console.log(response)
        },
    })
})
})


function reset() {
    $("#constituency").val('select')
    $("#votingCentre").val('select')
 }
