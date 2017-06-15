// script.js

$(function () {
    $('#sortable').sortable({
        connectWith: "#sortableToo",
        placeholder: "placeholderBox"
    });
    $('#sortableToo').sortable({
        connectWith: "#sortable",
        placeholder: "placeholderBox"
    });
});
