//Javascript object imported by Angular to call functions init, addSection, etc.
var menuBuilderFunctionality = (function () {
    return {
        init: function () {
            $(function () {
                var $container = $('.packery');

                $container.packery({
                    columnWidth: 80,
                    rowHeight: 80
                });

                // bind draggabilly events to item elements
                $container.find('.item').each(makeEachDraggable);

                function makeEachDraggable(i, itemElem) {
                    // make element draggable with Draggabilly
                    var draggie = new Draggabilly(itemElem);
                    // bind Draggabilly events to Packery
                    $container.packery('bindDraggabillyEvents', draggie);
                }

                // add more items
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
