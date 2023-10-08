function toggle() {
    var button = document.getElementById("toggleButton");
    var status = document.getElementById("status");

    if (button.innerHTML === "On") {
        button.innerHTML = "Off";
        status.innerHTML = "LED is Off";
        button.style.backgroundColor = "#ccc";
    } else {
        button.innerHTML = "On";
        status.innerHTML = "LED is On";
        button.style.backgroundColor = "green";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    var brightnessInput = document.getElementById("brightness");
    var colorInput = document.getElementById("color");
    var lightBox = document.getElementById("light-box");

    brightnessInput.addEventListener("input", function () {
        updateLight();
    });

    colorInput.addEventListener("input", function () {
        updateLight();
    });

    function updateLight() {
        var brightnessValue = brightnessInput.value;
        var colorValue = colorInput.value;
        var rgbColor = hexToRgb(colorValue);

        // Adjust brightness
        var adjustedColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${brightnessValue / 100})`;
        
        // Apply color and brightness to the light box
        lightBox.style.backgroundColor = adjustedColor;
    }

    // Function to convert hex color to RGB
    function hexToRgb(hex) {
        // Remove the hash character if it exists
        hex = hex.replace(/^#/, '');

        // Parse the hex value to RGB components
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;

        return { r: r, g: g, b: b };
    }
   
});
