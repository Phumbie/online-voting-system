// $(document).ready(function(){
//     $('.header').height($(window).height());
//   })
// }

// // //  beginning of form
// // $(function () {
// //     $('.button-checkbox').each(function () {

// //         // Settings
// //         var $widget = $(this),
// //             $button = $widget.find('button'),
// //             $checkbox = $widget.find('input:checkbox'),
// //             color = $button.data('color'),
// //             settings = {
// //                 on: {
// //                     icon: 'glyphicon glyphicon-check'
// //                 },
// //                 off: {
// //                     icon: 'glyphicon glyphicon-unchecked'
// //                 }
// //             };

// //         // Event Handlers
// //         $button.on('click', function () {
// //             $checkbox.prop('checked', !$checkbox.is(':checked'));
// //             $checkbox.triggerHandler('change');
// //             updateDisplay();
// //         });
// //         $checkbox.on('change', function () {
// //             updateDisplay();
// //         });

// //         // Actions
// //         function updateDisplay() {
// //             var isChecked = $checkbox.is(':checked');

// //             // Set the button's state
// //             $button.data('state', (isChecked) ? "on" : "off");

// //             // Set the button's icon
// //             $button.find('.state-icon')
// //                 .removeClass()
// //                 .addClass('state-icon ' + settings[$button.data('state')].icon);

// //             // Update the button's color
// //             if (isChecked) {
// //                 $button
// //                     .removeClass('btn-default')
// //                     .addClass('btn-' + color + ' active');
// //             }
// //             else {
// //                 $button
// //                     .removeClass('btn-' + color + ' active')
// //                     .addClass('btn-default');
// //             }
// //         }

// //         // Initialization
// //         function init() {

// //             updateDisplay();

// //             // Inject the icon if applicable
// //             if ($button.find('.state-icon').length == 0) {
// //                 $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
// //             }
// //         }
// //         init();
// //     });


// // })


// // });

// //end of form
$(document).ready(function(){
    $('.header').height($(window).height());

    $("form").submit(function(e){
        e.preventDefault()
        var name = $("#name").val()
        var email = $("#email").val()
        var password = $("#password").val()
        
        $.post("http://localhost:3000/users", {name,email,password}).done(function(){
            console.log("Saved")
        })
    })
  });