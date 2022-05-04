//Dropzone.autoDiscover = false;
$(function() {
    $("#basic-example").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slide"
        }),
        $("#vertical-example").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slide",
            stepsOrientation: "vertical"
        })
});
//var newDropZone = new Dropzone(".dropzone");

// $(document).ready(function() {
//     $("#wizard").steps();
//     var newDropZone = new Dropzone("div#dropzoneForm", { url: "/your/url" });
// });