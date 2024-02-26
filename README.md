## Environment

- Angular CLI: Angular CLI: 16.2.12
- Node: 20.11.0
- npm: 10.4.0
- Bootstrap: 5.2.3

## Setup

1. Create your own breakpoints definition file in the root directory of your project. For example, create a file named customize-breakpoint.scss and add the following code:
```scss
$grid-breakpoints: (
  xs: 0,
  mobile: 327px,
  sm: 576px,
  md: 768px,
  tablet: 799px,
  lg: 992px,
  desktop: 1024px,
  xl: 1200px,
  xxl: 1400px
);

$container-max-widths: (
  mobile: 327px,
  sm: 540px,
  md: 720px,
  tablet: 768px,
  lg: 960px,
  desktop: 1024px,
  xl: 1140px,
  xxl: 1320px
);
```

2. In the root directory, open style.css and add the following line to the top of the file:
```css
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables"; // The the bootstrap breakpoint variables are defined here
@import "customize-breakpoint.scss"; // Your custom breakpoints
@import "../node_modules/bootstrap/scss/mixins"; 
@import "../node_modules/bootstrap/scss/bootstrap"; // This has to be the last import
```
3. Then you can use the new breakpoints in your html and scss files. For example:
```html
<div class="col-desktop-4 col-tablet-4 col-mobile-12">
  <p>Content</p>
</div>
```
```scss
@media (min-width: $tablet) {
  .col-tablet-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}
```
4. Restart the server let it compile the changes.
