# **Testing**

## Table of Contents
  - [Smoke Testing](#smoke-testing)
  - [Code Testing](#code-testing)
  - [User stories Testing](#user-stories-testing)
  - [Functional Testing](#functional-testing)
  - [Responsiveness Testing](#responsiveness-testing)
  - [Performance Testing](#performance-testing)
  - [Accessibility Testing](#accessibility-testing)
  - [Best Practices and SEO Results](#best-practices-and-seo-results)
  - [Issues found and fixed during Coding](#issues-found-and-fixed-during-coding)
  - [Enhancements](#enhancements)

## **Smoke Testing**
Following testcases were tested as part of smoke testing.
1.	To  Check if the Website launches with a Home page when given the URL of the site. > Tested Pass
2.	To Check for broken links for all the navigation menus. –Tested Pass
3.	To Check if “Place order” button on the Jumbotron directs to the form page. –Tested Pass
4.	To check if the website launches with a home page on all  different devices as per the wireframe. –Tested Pass
5.	To check if the successful submission of the form displays an acknowledgement message. –Tested Pass
6.  To check if the mail was sent to desiwagon123@gmail.com with uername and grocery list.

##  **Code Testing**
Html was validated with [W3C Validator](https://validator.w3.org/) by direct input. 
CSS was validated with [W3C CSS](https://jigsaw.w3.org/css-validator/) by direct input. 
Js files were validated with [Jshint](https://jshint.com/)
Results came out as follows

### **Results from HTML Validator**
> ![HTML validator Results](https://github.com/gomathishankar28/ms2_desi_wagon/blob/bc862f648a4612c3046323ae65366070d20f7520/assets/images/Testing/HTMLValidationresults1.jpg?raw=true)

> ![HTML validator Results](https://github.com/gomathishankar28/ms2_desi_wagon/blob/bc862f648a4612c3046323ae65366070d20f7520/assets/images/Testing/HTMLValidatorresults2.jpg?raw=true)

### **Results from  W3C CSS**
> ![CSS validator Results](https://github.com/gomathishankar28/ms2_desi_wagon/blob/bc862f648a4612c3046323ae65366070d20f7520/assets/images/Testing/CSSValidationresults.jpg?raw=true)

### **Results from Jshint**
1. Unused variables for function names.

        Because jshint is only reading that file and doesn't know about the file which is calling this function. and it thinks the function is being unused and hence the error.
2. Warning: Do not use 'new' for side effects.
        
        No fix as the code has been copied for google maps documentation site.

3. Warnings for variables with let or const declaration according to ECMAScript 6 features

        Fixed by adding /*jshint esversion: 6 */ at the top of every js file.

##  **User Stories Testing**

##  **Functional Testing**
Functional testing was done by testing induvidual features of the website to see if they meet their intended purpose.

1. **Brand-Title**
    * Checked to see if the Click on the Title takes you to the Home page.

2. **Navigation Bar**

    * Checked to see if the navigation links are highlighted according to the active page.
    * At the launch, Home link of the nav bar has to be higlighted

3. **Home Page**

    ***Call out Section***
    * checked to see if each slide on the carousel gets displayed for the time that can help user to read the information on it.
    * Checked to see if prev button on the carousel takes to the desired slide.
    * Checked to see if next button on the carousel takes to the desired slide.

    ***Schedule section***
    * Checked to see if the truck icon appears on the row of the current day in large screen.
    * Checked to see if the truck appears on the accordion of the current day in small and medium screens.
    * Checked to see if the truck is blinking.
    * Checked to see if the accordion of the currnt day is collapsed.
    * Checked to see if the address button the accordion leads to Location section of the page

4.  ***Location Section***  
    * checked to see if the google map is displayed with 5 markers.
    * Checked to see if the clicking on each markers displays the city name, address, landmark and day and timing details.
    * Checked to see if there is image displayed for each city only on large and medium screens.
    * checked to see if the zooming out of the map creates clusters.
    * checked to see if hovering on each marker displays the city name.

5.   ***Place Order***
     * Checked to see if name field takes only alphabets and prompts an error when left empty or given an invalid input.
     * checked to see if there is an error for an invalid email field.
     * Checked to see if the mobile number field does not take more than 10 digits.
     * checked to see if the mobile number field takes only numbers.
     * Checked to see the if the form has an address field which gets auto-populated based on the Location field.
     * Checked to see when an item is chosen from Groceries drop down and Quantity from QTY dropdown and "Add to List" button is clicked an inputbox is created.
     * Checked to see if there is a delete button beside very new input element being added.
     * Checked to see if each item is being created in a new line.
     * checked to see if input item is not editable.
     * checked to see if clicking on the delete "X" button deletes the item.
     * Checked to see On successful submission of the form, an Acknowlegement message is displayed on the same page.
     * Checked to see if the mail has been sent to dw.orders123@gmail.com 
     * Checked to see if the mail contains the name and grocery List of the user.

## **Responsiveness Testing**
***Devices Testing***

 Website was tested using Chrome Dev tools in the following devices to check if the pages are rendered well.The results are satisfying<br>
    1. Galaxy Fold.<br>
    2. Moto G4<br>
    3. Pixel 2<br>
    4. Pixel 2xl<br>
    5. iphone5<br>
    6. iphone 6/7/8<br>
    7. iphone 6/7/8 plus<br>
    8. iphone x<br>
    9. surface Duo<br>
    10. ipad<br>
    11. ipad pro.<br>

***BrowserTesting***

Website was tested in browsers listed below and results were satisfying.
1. Chrome<br>
2. Edge.<br>
3. Opera<br>
4. Safari<br>
5. Firefox<br>

***Operating System Testing***

Website was tested in different OS listed below and results were satisfying.

1. Windows 10<br>
2. Mac OS.<br>
3. iOS.<br>
4. Android<br>

## **Performance Testing**

Performance has been tested using the Lighthouse tool of Google Chrome. The results are shown below.

>  ![Perfomance Results](https://github.com/gomathishankar28/ms1_bentovanindia/blob/e0a217198e887d5830e95666f5260264351b1a31/assets/images/testing/perfomance.jpg?raw=true)

## **Accessibility Testing**

The website's accessibility was also tested using Lighthouse. The result are shown below.
>  ![Accessibility](https://github.com/gomathishankar28/ms1_bentovanindia/blob/e0a217198e887d5830e95666f5260264351b1a31/assets/images/testing/Accessibility.jpg?raw=true)

## **Best Practices and SEO Results**
>  ![BestPractices](https://github.com/gomathishankar28/ms1_bentovanindia/blob/e0a217198e887d5830e95666f5260264351b1a31/assets/images/testing/bestPractices.jpg?raw=true)
>  ![SEO](https://github.com/gomathishankar28/ms1_bentovanindia/blob/e0a217198e887d5830e95666f5260264351b1a31/assets/images/testing/SEO.jpg?raw=true)

Spelling was checked thoroughly using [W3C Spell Checker](https://www.w3.org/2002/01/spellchecker). The results are satisfying.

## **Issues found and fixed during Coding**

1. Blinking Truck icon used in the schdule section was hugging the city name. Just Setting margin and padding did not help
    > **Solution** - Fixed by changing the Span element display property to inline block for the margin values to take effect.Span Element by default has display property set to inline.

2. Schedule table did not render well on small and medium screens
    > **solution** - Fixed by using accordions for smaller and medium screens.

3. Image of the city on map-info section did not render well on the small screen.
    >**solution** - Fixed by setting the "display: none; " for smaller screens

4. Every new groery item added was not added in the new line'.
    >**Solution**  - Fixed by creating a break element (BR) and appending it to the input element.

5. When a grocery item was deleted, an empty line would be created in its place
    >**solution** - Fixed by removing the break element(BR) along with input element.

6. All Markers on the map were not displayed when map was loaded.
    >**solution** - Fixed by changing the latitude value.

7. No alerts or error message generated when the form input doesn't match th required pattern.
    >**solution** - Fixed by adding an invalid event listener and adding the following code.
    
        name.addEventListener("invalid", function (event) {
            if ((!(name.value)) || (this.validity.patternMismatch)) {
                alert ("name cannot be empty and should only contain letters. e.g. John");
            }
            else {
             return false;
            }
        });
8.  There were lot of small issues related to margin,padding,width,height of the image,font-size etc
    >**solution** - Fixed by adding media queries accordingly.

## **Enhancements**
1. Initially the Schedule section was designed to have a table for all screens displayed. As my mentor Nishant kumar suggested that table is not a preferred UX design for small screens and I was asked to find an alternative.
    >**Enhancement** - Found accordion as an alternative from Bootstrap documentation .
2. Map-info  window would just show  cityname, address, landmark , timings and day of the visit of the wagon when clicked on each marker. As my mentor Nishant kumar suggested to have the ma-info window's height equal to the height of the map on large screens for better presentation
    >**Enhancement** - Added an image of the city to the map-info window so that the height of the map-window matches the height of the map on large screens.
3. Place order form initially had an text area which requires user to manually enter the grocery item and quantity in it. Nishant kumar advised to have more features in th form to increase the use javascript.
    >**Enhancement 1** - Created a drop down for grocery items and quantity and then created a list when the user clicks an "Add to List" button.
    >**Enhancement 2** - Added a delete button enabling the user to delete an item from the list.
