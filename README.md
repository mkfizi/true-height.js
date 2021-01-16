# true-height.js
Lightweight Javascript library that set an element's height to be equivalent to inner browser's height.<br>
[DEMO](https://mkfizi.github.io/trueHeightJS.html)

## What does it do
When you set a landing page's height to 100vh, it will stylize the landing page's height to device's screen size without taking the height of inner browser into account. This library will fix that issue so the landing page's height will consistently be set to inner browser's height.

## Usage
Call cdn link to true-height.js before your custom javascript as below:
> &lt;script src="https://<i></i>cdn<i></i>.jsdelivr.net/gh/mkfizi/true-height.js@1.0.1/true-height.min.js"> &lt;/script>

Add this function call below into your custom javascript file:
> &lt;script> trueHeightJS(); &lt;/script>

Add class name "true-height" to your landing page element. Example:

> &lt;div class="true-height"> &lt;/div>
