1. Describe the difference between padding & margin.
* Padding is the space between the content and the border  on all four sides, where as the margin is the space between the border and the next element.
   * Both padding and margin can be changed as one value for all four sides, the same for top and bottom and different for left and right. Or it can be set differently for each side.
2. In your own words describe the CSS3 box model.
* The box model is the key to understanding layout, sizing etc of elements in CSS. Components of the Box model are:
   * content,
   * Padding,
   * Border, and finally
   * Margin - although technically this is not part of the box model it is relevant to it.
3. How to vertically centre a h1 inside a div - extra points for less lines of CSS.
The answer to this is at [codepen.io](https://codepen.io/heb264/pen/bamYvJ)
4. Explain how media queries work.
* media-queries are used when you want to apply styles on a devices general type i.e. print vs screen. They tend to be used to target different screen sizes to produce responsive CSS designs for mobile devices. In fact before Flex-box and Grid CSS became standards these were used extensively and each media-query looked at a specific breakpoint for a device.
* Media-queries are essentially logical _"if" statements_. This means that the enclosed CSS will be processed, "if" the statement is true in the browser. As it is a logical if statement you can also refine the query by using the _And_ keyword for a width range where both statements are true, the _OR comma_ to have an either/or width range. _Not_ keyword to reverse the logic.
* Media-queries should be __exclusive__ so only one query is in effect at a time. Although this does not prevent >1 media query being true at any one time, __overriding__ of styles should be avoided.
* With the use of media-queries you can either design mobile first or desktop first. It really comes down to Front-end developers preference and workflow.
