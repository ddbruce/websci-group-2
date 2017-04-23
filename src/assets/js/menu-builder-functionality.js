//Items initialization, items is the list of sections
var $items;
var $grid;

//Goes through each item found in the menu and binds right-click event and draggability
function makeEachClickable(i, itemElem){
    $(itemElem).bind("contextmenu", function (event) {

        // Avoid the real one
        event.preventDefault();

        // Show contextmenu
        $(".custom-menu").finish().toggle(100).

            // In the right position (the mouse)
            css({
                top: event.pageY + "px",
                left: event.pageX + "px"
            });
    });
    $(itemElem).bind("mousedown", function (e) {

        // If the clicked element is not the menu
        if (!$(e.target).parents(".custom-menu").length > 0) {

            // Hide it
            $(".custom-menu").hide(100);
        }
    });
}

function initPackery(){
    $grid = $('.packery').packery({
        itemSelector: '.item',
        columnWidth: 90
    });
    // bind draggabilly events to item elements
    $items = $grid.find('.item').draggable({
        containment: '#menu-builder'
    }).resizable({
        containment: '#menu-builder',
        minWidth: 89.5,
        grid: [90,1.5],
        resize: function(event, ui) {
            ui.size.width = Math.round(ui.size.width/90)*90-0.5
        }
    });
    $grid.packery('bindUIDraggableEvents', $items);
    $grid.find('.item').each(makeEachClickable);
}

function addItem(newSection){
    $(function () {
        var item = $("<div class='item'></div>");
        $grid.append(item).packery('appended',item);
        item.draggable({
            containment: '#menu-builder'
        }).resizable({
            containment: '#menu-builder',
            minWidth:89.5,
            grid: [90,1.5],
            resize: function(event, ui) {
                ui.size.width = Math.round(ui.size.width/90)*90-0.5
            }
        });
        $grid.packery('bindUIDraggableEvents',item);
        if(newSection){
            makeEachClickable(0,item);
        }
    });
}

//Javascript object imported by Angular to call functions init, addSection, etc.
var menuBuilderFunctionality = (function () {
    return {
        //All initial JQuery behavior for the menu-builder goes here
        init: function () {
            $(function () {
                initPackery();
            });
        },
        addSection: function(){
            $(function () {
                addItem(true);
            });
        },
        addSpacer: function(){
            $(function(){
                addItem(false);
            })
        }
    }
})(menuBuilderFunctionality|| {});
// JavaScript source code
