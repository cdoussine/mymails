// PART 1 to 3

/* -------- CODING PART WITH NO JQUERY CODE --------------------------------------------------------------------*/

// // Number of messages 
// var messagesCount = document.getElementsByTagName('p').length

// // updating counter
// document.getElementById('count').textContent = messagesCount

// // Listening to the click of the trash
// for(var i=0; i<document.getElementsByTagName('p').length; i++) {

//       document.getElementsByClassName('trash')[i].addEventListener("click", 
//        function(){ 

//         // deleting the parent of the trash --> the entire Row 
//        this.parentNode.remove();

//         // acquisition of messages numbers again
//         messagesCount = document.getElementsByTagName('p').length

//         // updating counter
//         document.getElementById('count').textContent = messagesCount
//        }
//       );
//     };   

// // Click on Add button    
// document.getElementById('btn-add').addEventListener("click",function(){

//     // Creating the main division
//     var mainDiv  = document.createElement("div");
//     mainDiv.className ="row-added";
//     document.body.appendChild(mainDiv);

//     //creating the img
//     var image = document.createElement("img")
//     image.className = "avatar";
//     image.src = "avatar-1.jpg";
//     mainDiv.appendChild(image);

//     // Creating the second division containing the Name and the message
//     var nameMessageDiv  = document.createElement("div");
//     mainDiv.appendChild(nameMessageDiv);
//     nameMessageDiv.className = "content"

//     // Name part
//     var h6 = document.createElement('h6');
//     h6.textContent = "Arthur Gamby";
//     nameMessageDiv.appendChild(h6);

//     // Content part 

//         // 1)- extracting the message value
//         var newText = document.getElementById('add-message').value
//         console.log(newText)
        
//         // 2)- giving the message value to the new content text
//         var content = document.createElement('p');
//         content.textContent = newText   
        
//         // 3)- going inside the nameMessageDiv
//         nameMessageDiv.appendChild(content)

//     // creating the trash icon
//     var trash = document.createElement('img') 
//     trash.src = "trash.png";
//     trash.className = "trash"   
//     mainDiv.appendChild(trash)

//     trash.addEventListener("click", 
//        function(){ 

//         // deleting the parent of the trash --> the entire Row 
//         this.parentNode.remove();

//         // Number of messages 
//         var messagesCount = document.getElementsByTagName('p').length

//         // updating counter
//         document.getElementById('count').textContent = messagesCount

//         // cleaning after message posted
//         document.getElementById('add-message').value = ""
        
//       });

//     // cleaning after message posted
//     document.getElementById('add-message').value = ""

//     // Number of messages 
//     var messagesCount = document.getElementsByTagName('p').length

//     // updating counter
//     document.getElementById('count').textContent = messagesCount
// })

/* -------------------------------------------------------------------------------------------------------*/


// PART 4 

/* ---------------------------------- SAME PART WITH JQUERY CODE -----------------------------------------*/

// Number of messages 
var messagesCount = $('p').length

// updating counter
$('#count').text(messagesCount) 

// listening the click action on each trash pictogram
$('.trash').click( 

      function(){ 
         // deleting the parent of the trash --> the entire Row 
         this.parentNode.remove();

         // Updating Number of messages (on line code)
         $('#count').text($('p').length) 
      }
);

// listening the Add-button click
$('#btn-add').click(function(){

    var message = $('#add-message').val()
    console.log('test',message)


    $("body").append(`
    
    <div class="row-added">

    <img class="avatar" src="avatar-1.jpg">

    <div class="content">    
      <h6>Arthur Gamby</h6>
      <p>${message}</p>
    </div>
    
    <img class="trash" src="trash.png">

    </div>`)

     // trash click to delete 
     $('.trash').click(function(){
         
                  // deleting the parent of the trash --> the entire Row 
                  this.parentNode.remove();

                  // Updating Number of messages (on line code)
                  $('#count').text($('p').length) 
     })

     // Updating Number of messages (on line code)
     $('#count').text($('p').length) 

     //cleaning the input
     $('#add-message').val("") 

})

// Search-button
$('#btn-search').click(function(){
        
      //Save the last modifcation, so we can search everywhere in the dom and every row can be displayed
      $('.row').show(800);

      // we compare the user research with our messages base, if there is a match, we are fadding out the other messages box
      $('h6').each(function(){

        if($("#search-message").val().length > 0 && $("#search-message").val() != $(this).text() ){
          
          $(this).parent().parent().fadeOut().delay(500);

        }
        
      })

      // Cleaning the input after searching for a name
      $("#search-message").val(""); 
})