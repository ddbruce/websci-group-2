//Javascript object imported by Angular to call functions init, addSection, etc.
var menuBuilderFunctionality = (function () {
    return {
        //All initial JQuery behavior for the menu-builder goes here
        init: function () {
            $(function () {
                //Packery Initialization
                var $container = $('.packery');

                $container.packery({
                    itemSelecter: '.item',
                    columnWidth: 90
                });

                // bind draggabilly events to item elements
                var $items = $container.find('.item').draggable({
                    containment: '#menu-builder'
                }).resizable({
                    containment: '#menu-builder'
                });
                $container.packery('bindUIDraggableEvents', $items);
                $container.find('.item').resizable().each(makeEachDraggableAndClickable);

                //Goes through each item found in the menu and binds right-click event and draggability
                function makeEachDraggableAndClickable(i, itemElem) {
                    // make element draggable with Draggabilly
                    /*var draggie = new Draggabilly(itemElem);
                    // bind Draggabilly events to Packery
                    $container.packery('bindDraggabillyEvents', draggie);*/
                    //Right-click context menu binding
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

                // add more items - NOT WORKING, need to move outside of init
                $('#add-items').click(function () {
                    var items = '<div class="item w2 h2"></div>' +
                        '<div class="item w2 h2"></div>' +
                        '<div class="item w4 h2"></div>' +
                        '<div class="item h4 w4"></div>' +
                        '<div class="item w2 h2"></div>' +
                        '<div class="item w2 h4"></div>' +
                        '<div class="item w2 h2"></div>';
                    var $items = $(items);
                    // add to packery layout
                    $container.append($items)
                        .packery('appended', $items)
                    // make item elements draggable
                    $items.each(makeEachDraggable);
                });

            });
        }
    }
})(menuBuilderFunctionality|| {});
// JavaScript source code
