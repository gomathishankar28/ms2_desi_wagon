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

Please find attached Wireframe for all the 2 pages Home and Place Order for Large, medium and Small devices. 

Wirefame mockups
Surface
Colors

The color palette chosen, symbolically references to the Indian culture and its emphasis on the color yellow. Traditionally attributed to health and prosperity, this dominant color is chosen to represent a unique spice, turmeric, which is an irreplaceable ingredient in all the Indian curries. This aims to establish a connect with the target Indian clientele and serve as a metaphor for BVI’s offering, just like Turmeric, the Lunch is- Simple, rustic and healthy!
Typography

Two fonts were used for this project, Akaya Telivigala', cursive, and sans-serif with a sans-serif being fallback font. The cursive style fonts are a well-known typography choice, and are particularly popular on the web. Cursive writing fonts can give the website a more personal feel and approach
Media

The hero image displays a wide range of spices of India
All the other images used throughout the website are relative to our service.
All images have been resized and compressed in order to boost the UX flow.
Iconography

Icons have been used throughout the website to improve the efficiency of UX.

## Features
Each page in the website features a responsive navigation bar on the right with conventional placing of Brand Name on the top left. Each page has a footer with copyright information, contact details of the Desi Wagon and links to social media.

### Home
The Home page features 3 sections areas apart from the header and footer.
The first section (call out section)- which features a carousel of 3 images which talks about, what this Desi Wagon does, What they deliver and a call to action for placing the orders respectively.
The second section (Schedule Section) 
The third section(Location Section) t

### Schedule
This is a section of the Home page. As the wagon is scheduled to visit 1 city in a day, accounting to 5 different cities in a week. This section showcases a table that would detail the scheduled visits of th wagon on each week day. This also inlcudes timing details.

### Location
This is also a section of the Home page. The wagon visit 5 cities in a week. This section gives the address details of each location at which the wagon will be stationed. This is acheived with the help of Google Maps API.

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