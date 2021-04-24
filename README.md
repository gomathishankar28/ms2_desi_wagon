# Desi Wagon
## Introduction
Desi Wagon is a mobile grocery truck which delivers indian groceries, fruits, vegetables and spices to people in Netherlands.This Wagon aims to woo Indian expats who are searching for indian stuff in affordable price.

The reason to promote this business model in Netheralands is due to the scarce availability of indian stores with a large pool of expats, 
mostly from Indian origin.The mobility of the truck allows for outreach to multiple neighborhoods at a time.
Mobile grocery units are more effective to deploy than storefronts, especially in vulnerable neighborhoods,
and has lower barriers to entry and lower costs to maintain, retrofit and operate.

The Purpose of this website is to leverage on the familiarity of this kind of offering. This site provides information about our value proposition 
and what we deliver, their schedule, location at which the wagon is stationed.

## Business Goals
*   To target the growing Indian expat community who are looking for indian stuff.

*   To focus this offering to all indian people across Netherlands.

*   To evince interest in customers who prefer to have Indian groceries every week.

*   Build a brand image for a Indian mobile grocery store.

*   Showcase the Schedule that the wagon would follow every week.

*   To display the location information at which the wagon would be stationed.

*   To help customers place their orders online.

*   To receive an email from the customer for every order that they place.

## user Goals

As a customer, I would like 

*   To know what the wagon can deliver.

*   To know the schedule of the wagon.

*   To know the address where the wagon would be stationed.

*   Place my weekly orders online in advance.

##  User stories
*   As a prospective customer to the website, I want to easily navigate the site, so that I can easily find the required details.

*   As a prospective customer to the website, I want to precisely know what they offer so that I have enough infromation about their service.

*   As a new customer to the website, I want to know the schedule of the wagon so that i would know on what day is wagon in my city.

*   As a customer to the website, I want to know the location or address details where the wagon would be stationed.

*   As a customer to the website, I would like to make a list of the grocery items that i would like to buy in advance.

*   As a prospective customer to the website,, I also want a copy of my list in my personal mail for reference and future use.

## UX
### Ideal client
#### The ideal client for this business is:
*   English speaking.
*   Has a truck on his own to carry all the groceries
*   Lives in the Netherlands.
*   Has finances to buy big stock of indian groceries.

#### Visitors to this website are searching for:
*   A one-stop place where they can buy indian veggies, fruits, spices and other groceries
*   A place where they can make prior orders for the same.
*   An option in the website to place an order.
*   A specific time and place from where they could pick their orders.

#### This Website is the best way to help the user and the owner because:
The whole service is organised via watsapp group  wherein users message their grocery list in the group which invades privacy. 
Time and day of arrival is also posted in  the group, which requires  the users t keep checking on every message from the group being posted.
There will be lot of phone calls for information about their location, pick up points which can be avoided by creating a website and having a single source of information.

### **Strategy**
Build brand awareness for an Indian mobile grocery store..

Through this website , aim to increase the number of subscriber.

Provide an easy option for users to  send in their grocery list in advance

### **Scope**
Functional requirements:
*   A Navigation bar to guide the user experience across the website;
*   A section to show the schedule of the wagon displaying info about day, time and city.
*   A section to show th Location or address of the wagon where it would be stationed
*   An Option to send their grocery list online


Content requirements:

*   Content categorization based on offerings, Schedule, Location and Placing order.
*   Use of Text and images to make things easy to understand.
*   A truck icon to show where the wagon is on a particular day.

### **Structure**

The website was designed to deliver an intuitive experience with a consistent information flow.

**Interaction design**

The interface responds to the user actions as expected. The scroll behavior is standard and the buttons respond instantly when actioned.
In order to increase the sense of interaction, subtle effects of zooming in, highlighting and transition effects are used wherever appropriate.

**Information architecture**

The content is organized and segregated into sections from top to bottom
The navigation bar is also categorized accordingly.

### **Skeleton**

**Wireframe mockups**

Please find attached Wireframe for all the 2 pages Home , place order and acknowledgement page for Large, medium and Small devices. 

Wirefame mockups
Surface
Colors

The color palette chosen, symbolically references to the Indian Flag which emphasises on color orange, green, white and navy.
 This aims to establish a connect with the target Indian clientele and serve as a metaphor for Indian Grocery store, as this Wagon carries only ALL Indian stuff.
Typography

Two fonts were used for this project, Akaya Telivigala', cursive, and sans-serif with a sans-serif being fallback font. The cursive style fonts are a well-known typography choice, and are particularly popular on the web. Cursive writing fonts can give the website a more personal feel and approach
Media

The hero image displays carousel with an indian flag background and the wagon with wheels represents the ashok chakra of the flag.
All the other images used throughout the website are relative to our service.
All images have been resized and compressed in order to boost the UX flow.
Iconography

Icons have been used throughout the website to improve the efficiency of UX.

## **Features**
Each page in the website features a responsive navigation bar on the right with conventional placing of Brand Name on the top left. Each page has a footer with copyright information, contact details of the Desi Wagon and links to social media.

### Home
The Home page features 3 sections areas apart from the header and footer.
The first section (call out section)- which features a carousel of 3 images which talks about, what this Desi Wagon does, What they deliver and a call to action for placing the orders respectively.
The second section (Schedule Section) 
The third section(Location Section) t

### Schedule
This is a section of the Home page. As the wagon is scheduled to visit 1 city in a day, accounting to 5 different cities in a week. This section showcases a table that would detail the scheduled visits of th wagon on each week day. This also inlcudes timing details.
This is displayed in a table for large and medium screens. However table is not being advised as a good UX for smaller screens, this section is displayed as accordion in smaller screens for better reponsiveness, good UX and readability.

### Location
This is also a section of the Home page. The wagon visit 5 cities in a week. This section gives the address details of each location at which the wagon will be stationed. This is acheived with the help of Google Maps API.
This section contains 2 columns on large and medium screens(col-lg-6, col-md-6) on which one column displays the map with markers on 5 different cities this wagon would visit every week.
The second column displaying a card with details of address, landmark , timings and day when each marker is clicked for better usability.
This is done in smaller screen with 2 (col-12) columns.

### Place order
This page presents a frm to the user which helps them to send in their grocery list in advance. An email will be sent to desiwagon and copy of it will be sent to the user as well. 
the form has the folowing fields.
1.  Name - Text input field for the name of the user initiating the request.
2.  Email - Text input field for themaild of the user. a copy of their grocery list is sent to this mailID.
3.  Mobile - Text input field for the Mobile number of the user.
4.  Grocery List - A text area input for the grocery list with item name and quantity.
5.  Location -  A drop down box showing 5 cities the Wagon visits.
6.  Address  - Text Input field which auto populates the address on choosing a specific location from the above field.
7. Send Button - A send button which sends an email with the username and thier grocery list to desiwagon and a copy of it is send to the user as well.
    This is acheived by using EmailJs API.

### Acknowledgement
This page is seen on successful completion of placing the order. It displays a Thankyou image from Desi Wagon to the user for placing the order with them.
It also contains text to say that order has been received successfully and the user needs to check the schedule to pick his orders up. A link to the schedule is also provided for convenience.

### Footer
The footer displays the following:
*   copyright information 
*   additional details to say that they are closed on weekends and timings they ar availale on weekdays.
*   Contact Information - with mobilenumber, e-mail and country details.
*   links Social media like facebook, linkedln, twitter , instagram and pinInterest.

##  **Existing Features**

*   **Title** - Allows the user to easily recognise the brand of “Voyage”. If the user clicks on the logo, it will return the users to the “Home” section as they would expect.
*   **Navigation Bar** - Allows the user to easily navigate the website's sections and find what they are looking for with ease 
*   **Landing Page** - Allows the user to know about Desiwagon. carousel with 3 slides showing who they are, what they offer and a CTA button to place the order respectively.
*   **Schedule** - Allows user to know the Schedule of the wagon for a week.
*   **Location** - Allows the user to know the  the address details of the stationed wagon.
*   **Place Order** - Allows the user to place prior orders for their groceries. Also enables the user to send an email to desiwagon with their grocery list.
*   **Acknowledgement** - Provides the user with an acknowledgement message on successful placement of the order
*   **Footer**  -   Allows user to access contact info and Social links.

## **Features to be implemented in future**
*   A google sign in to place the  order for user validation.
*   Autocomplete option for form fields in place_order form.
*   Specific data validation for all the input fields in the form.

## **Technologies used**
### **Languages**
*   HTML
*   CSS
*   Javascript

### **Libraries & Frameworks**
* [Bootstrap](https://getbootstrap.com/) was used for its incredible responsiveness ,carousels and accordions..

* [Font Awesome](https://fontawesome.com/) icons were used to improve aesthetics and UX

* [Google Fonts](https://fonts.google.com/) was also used to enhance the user experience

* [Emailjs API](https://www.emailjs.com/) was used for place order form for sending orders to desiwagon.

* [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) was used in Location section for the map interaction and map markers

### **Tools**
* **[Gitpod](https://www.gitpod.io/)** - This is the **IDE** used for building the website.
* **[Github](https://github.com/)** - The project uses Github for **hosting and version control**.
* **[Balsamiq](https://balsamiq.com/wireframes/desktop/docs/intro/)** for creating the **wireframes**.
* **[Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)** - This project used developer tools to **test responsiveness** across different sized devices and to add new styles.
* **[W3C Markup Validator](https://validator.w3.org/)** - For **testing HTML code.**
* **[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)** - For **testing CSS code.**
* **[JSHint Validator](https://jshint.com/)** - For detecting errors and potential problems in your **JavaScript code.**
* **[Lighthouse](https://developers.google.com/web/tools/lighthouse)** - For testing the **performance of the website.**
* **[Am I Responsive](http://ami.responsivedesign.is/)** - The project used Am I Responsive to create a **Demo image of the website**.
### **Media**
* **[BeFunky](https://www.befunky.com/ )** for **resizing and editing images**. 
* **[unsplash](https://unsplash.com/)** for **carousel image** in Home page.

## **Testing**
Please find the testing document in testing.md file.

## **Deployment**

* 	**GitHub Pages**

    The project is hosted by GitHub Pages. To deploy it, follow the below steps.

	1. Log in to GitHub and locate your project Repository.
    2. At the top of the Repository, click on the "Settings" Button on the menu.
    3. Scroll down the Settings page and find the "GitHub Pages" Section.
	4. Under "Source", click on the dropdown called "None" and select "main" branch and subsequently choose the next folder as root and click on Save.
	  The page will automatically refresh.""
	5. Scroll back down through the page to locate the now published site link In the "GitHub Pages" section, you should see  ""Your site is published at"with the link highlighted in green.

*	**To fork the GitHub Repository**

    By forking the GitHub Repository we make a copy of the original repository
    on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

    1. Log in to GitHub and locate your project Repository.
    2. At the top right of the Repository just above the "Settings" Button on the menu, locate and click the "Fork" Button.
    3. You should now have a copy of the original repository in your GitHub account.

*	**To make a Local Clone**

    1.	Log in to GitHub and locate your project Repository.

    2.	Alternatively, to clone your repository in Desktop, click Set up in Desktop and follow the prompts to complete the clone.

    3.	To clone the repository using HTTPS, under "Clone", make sure "HTTPS" is selected and copy the link.

    4.	Open Git Bash.

    5.	Change the current working directory to the location where you want the cloned directory to be made.

    6.	Type git clone, and then paste the URL you copied in Step 3.

                $ git clone https://github.com/gomathishankar28/ms2_desiwagon.git

    7.	Press Enter. Your local clone will be created.

## **How to access Google Maps API**
Google requires you to register and to get an API key which is like a unique identifier that authorizes your website to use the API.
Every API has documentation about how to use it and google maps is no exception.The main thing that we need to do is to
get what's called an API key as you must have at least one API key associated with your project. 

### **To create an API key**
 1. Go to [google maps documentation] https://developers.google.com/maps/gmp-get-started#quickstart
 2. In the Google Cloud Console, on the project selector page, click Create Project to begin creating a new Cloud project.
 3. click on create and give a project name and hit create.
 4. Make sure that billing is enabled for your Cloud project.
 5. Go to Maps API library page to see Google provides a lot of API's. but here we would just enable the Maps javascrip API. 
 6. Go to the APIs & Services > Credentials page.
 7. On the Credentials page, click Create credentials > API key.The API key created dialog displays your newly created API key.
 8. Click Close.The new API key is listed on the Credentials page under API keys.(Remember to restrict the API key before using it in production.) 

### **Restricting API keys**
1. Go to the APIs & Services > Credentials page from the given URL(https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Select the API key that you want to set a restriction on. The API key property page appears.
3. Under Key restrictions, set the following restrictions

*   **Application restrictions**

1.  To accept requests from the list of website that you supply, select HTTP referrers (web sites) from the list of Application restrictions.
2.  Specify one or more referrer web sites. For example, *.google.com accepts all sites ending in google.com, such as https://developers.google.com.

*   **API restrictions**
1.  Click Restrict key.
2.  Select Maps JavaScript API from Select APIs dropdown.
3.  If the Maps JavaScript API is not listed, you need to enable it.
4.  If your project uses Places Library, also select Places API. Similarly, if your project uses other services in the JavaScript API (Directions Service, Distance Matrix Service, Elevation Service, and/or Geocoding Service), you must also enable and select the corresponding API in this list.

* **Adding the API key to your request**
You must include an API key with every Maps JavaScript API request. In the following example, replace YOUR_API_KEY with your API key.
paste the below script file in your html file before the closing body tag.
    
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
        type="text/javascript"></script>

## **How to use EmailJS API**
To use a service called EmailJS, we need to Set up an EmailJS account. Go to [Emailjs](https://www.emailjs.com/)
and Create an EmailJS account.Then it involves the following steps.
1.  **Add an email service** - An email service provides integration between EmailJS and your email server. First open the Email Services (opens new window)tab where you will see two sections: Transactional email services and Personal email services.
    Personal email services allow connecting personal email providers that offer basic email functionality – an email address and an inbox. These include providers like Gmail, Fastmail, Outlook 365, etc'. 
    we choose to use the Gmail service. The name we are giving is send_list, and the service ID is desi_wagon. We then need to connect our account with Gmail by hitting the "Connect account" button and then pressing the Add Service button to complete the process.

2.  **Create an email template**
*   Click Create new template up at the top
*   Choose the blank template 
*   Fill in the subject, from , to and message fields with dynamic variables.
*   save the email template by pressing the Save button

3.  **Create a form in HTML** 
Use the code from the given url(https://www.emailjs.com/docs/tutorial/creating-contact-form/) as reference.

4.  **Connecting to EmailJS**
*   Go to the EmailJS website then documentation
*   Click on installation and copy the EmailJS SDK
*   Copy the code and paste the code in before the closing/head tag
*   Get your user ID - you can get this from the Instructions page in the EmailJS dashboard.
*   Paste it into your emailjs.init(). You can copy your custom EmailJS code (relating to parameters) and paste it into your JavaScript.

### **Credits**
* **Content**

	* [popupcity](https://popupcity.net/observations/this-startup-brings-a-mobile-grocery-store-to-your-neighborhood/)  as a general inspiration.

* **Media**

    * [unsplash](https://unsplash.com/) for the carousel image.

* **Code**

	* [Bootstrap](https://getbootstrap.com/) for navbar, carousel and accordions.

	* [W3Schools](https://www.w3schools.com/) as a general source.

    * [tutorialrepublic](https://www.tutorialrepublic.com/) as a general source.

    * [stackoverflow](https://stackoverflow.com/) for displaying marker information for google maps location.

    * [code Institute](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/3b2af8636ea54a4d9dc45126f7498633/) for Google maps and emailJS as general reference

    * [Google maps markers](https://developers.google.com/maps/documentation/javascript/markers) as code reference for Location section.

    * [emailJs](https://www.emailjs.com/docs/tutorial/overview/) for sendMail.js.

	
### **Acknowledgements**
    
* **My mentor: Nishant kumar** by giving lot of inputs and useful tips to improve.
* **The Slack community** of Code Institute for a peer code review
* **My partner Shankar** for creating the text content for the website.
* **My Family and Friends** who provided their honest feedback by testing the website across different devices and different OS.