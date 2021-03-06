// Map pin svg change color when hovered
$(".mappinfooter").on("mouseover", function() {
    $("#mappinfooterID").attr( 'fill','white');
    }).on("mouseleave", function() {
    $("#mappinfooterID").attr( 'fill','red');
    });
    
    
// Profile svg change color when hovered
$(".userprofile").on("mouseover", function() {
    $("#userProfileCircle").attr( 'fill','white');
    $("#userProfileUser").attr( 'fill','#DD5600');
    }).on("mouseleave", function() {
    $("#userProfileCircle").attr( 'fill','#DD5600');
    $("#userProfileUser").attr( 'fill','white');
    });
    
    
// Image link
function goTo(url) {
    window.location.href = url;
}

// Nav link
function goToNavbar(url) {
    if ($(window).width() > 767) {
      window.location.href = url;
    }
    else {
      ;
    }
}



// Go back button
function goBack() {
        window.history.back();
    }
    
// Filters feature

let filtersCitiesArray          = [];
let filtersDaysArray            = [];
let filtersPeriodArray          = [];
let filtersAnimationTypeArray   = [];


function FilterActivities(value,filter,category) {
            
    value  = value.toLowerCase()
    filter = filter.toLowerCase()
    timer  = 500;
    
    if($('#FilterToggle_'+value+'_input').is(':checked')) {
        
        // change style applied to the toggle switch
        $('#FilterToggle_'+value+'_label').addClass("bg-filter-on");
        $('#FilterToggle_'+value+'_label').removeClass("bg-filter-off");
        
        if (category == "city") { 
            
            // Hide all elements (reset)
            $("[data-filter-city]").hide(timer);
            // Add new filter
            filtersCitiesArray.push(filter);
            
        };
        
        if (category == "day") { 
            
            // Hide all elements (reset)
            $("[data-filter-day]").hide(timer);
            // Add new filter
            filtersDaysArray.push(filter);
            
        };
        
        if (category == "time") {
            
            // Hide all elements (reset)
            $("[data-filter-time-start]").hide(timer);
            // Add new filter
            filtersPeriodArray.push(filter);
    
        };
        
        if (category == "animation_type") {
            
            // Hide all elements (reset)
            $("[data-filter-animation_type]").hide(timer);
            // Add new filter
            filtersAnimationTypeArray.push(filter);
            
            // Show only those with filters
            let blocks = $("*").filter(dataFilterOR(filtersAnimationTypeArray,"data-filter-animation_type"))
            blocks.finish();
            blocks.show(timer);
        };
        
        
    }
        
    else {
        
        // change style applied to the toggle switch
        $('#FilterToggle_'+value+'_label').addClass("bg-filter-off");
        $('#FilterToggle_'+value+'_label').removeClass("bg-filter-on")

        if (category == "city") { 
            
            // Hide all elements (reset)
            $("[data-filter-city]").hide(timer);
            // Remove filter from array
            filterRemove(filtersCitiesArray, filter);
            
        };
        
        if (category == "day") { 
            
            // Hide all elements (reset)
            $("[data-filter-day]").hide(timer);
            // Remove filter from array
            filterRemove(filtersDaysArray, filter);
            
        };
        
        if (category == "time") {
            
            // Hide all elements (reset)
            $("[data-filter-time-start]").hide(timer);
            // Add new filter
            filterRemove(filtersPeriodArray, filter);
            
        };
        
        if (category == "animation_type") { 
            
            // Hide all elements (reset)
            $("[data-filter-animation_type]").hide(timer);
            // Remove filter from array
            filterRemove(filtersAnimationTypeArray, filter);
            // Show only the elements with filters in the array ("OR")
            
            // Show only those with filters
            let blocks = $("*").filter(dataFilterOR(filtersAnimationTypeArray,"data-filter-animation_type"))
            blocks.finish();
            blocks.show(timer);
        };

    }

        // select and show
        let lines =  $("*").filter(dataFilterOR(filtersCitiesArray, "data-filter-city"))
              .filter(dataFilterOR(filtersDaysArray, "data-filter-day"))
              .filter(timeFilterOR(filtersPeriodArray, "data-filter-time-start" , 5));
        
        lines.finish();
        lines.show(timer);
    
}

// function dataFilterAND(array) {
    
//     // Show only those with all listed filters
//     let filtersString = "";
//     let l = array.length
    
//     for (i=0 ; i < l ; i++) {
        
//         // jQuery selector ("AND")
//         filtersString += "[data-filter*=" + array[i] + "]"
        
//     };
    
//     return filtersString
    
// }

function dataFilterOR(array, attribute) {
    
    // Show only those with listed filters
    let filtersString = "";
    
    let l  = array.length;
    
    for (i=0 ; i < l ; i++) {
        
        // jQuery selector
        filtersString += "[" + attribute + "*=" + array[i] + "]";
        
        // OR : add a "," if more than one filter (and not the last one)
        if (l > 1 && i != (l-1) ) {
            filtersString += ",";
        };
    };
    
    return filtersString
    
}

function timeFilterOR(array, attribute, range) {
    
    // Show only those with listed filters
    let filtersString2 = "";
    
    let l  = array.length;
    
    for (i=0 ; i < l ; i++) {
        
        for (j=0 ; j < range ; j++) {
            n = parseInt(array[i]) + j;
            // jQuery selector
            filtersString2 += "[" + attribute + "*=" + n + "]";
            
            // OR : add a "," if more than one filter (and not the last one)
            if (j != range-1 ) {
                filtersString2 += ",";
            };
            
        };
        
        // OR : add a "," if more than one filter (and not the last one)
        if (l > 1 && i != (l-1) ) {
            filtersString2 += ",";
        };
        
    };
    
    return filtersString2
    
}

// Remove one filter from the array
function filterRemove(array, filter) {
    
    var index = array.indexOf(filter);
    if (index > -1) {
      array.splice(index, 1);
    };
};

// function TimeStartfilterShow(time, timer) {
    
//     $('[data-filter-time-start]').filter(function() {
//         return $(this).attr("data-filter-time-start") <= (parseInt(time)+4);}).filter(function() {
//         return $(this).attr("data-filter-time-start") >= parseInt(time);}).show(timer);

    // $('[data-filter-time-start]').filter(function() {
    //     return $(this).attr("data-filter-time-start") <= parseInt(time)+4;}).show(timer);
//  }

// function TimeStartfilterHide(time, timer) {
        
//     $('[data-filter-time-start]').filter(function() {
//         return $(this).attr("data-filter-time-start") <= (parseInt(time)+4);}).filter(function() {
//         return $(this).attr("data-filter-time-start") >= parseInt(time);}).hide(timer);
        
    // $('[data-filter-time-start]').filter(function() {
    //     return $(this).attr("data-filter-time-start") <= parseInt(time)+4;}).hide(timer);
// }



function Initialisation() {
      $('.filter-initialisation').hide(); 
  }

window.onload = Initialisation() 


// Custom function to append a string to an attribute
// $.fn.appendAttr = function(attrName, suffix) {
//     this.attr(attrName, function(i, val) {
//         return val + ' ' + suffix;
//     });
//     return this;
// };
// $('[data-filter*='+filter+']').appendAttr('data-filter-activated', filter);