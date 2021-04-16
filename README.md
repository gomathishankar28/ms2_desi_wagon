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

*   To display the location at which the wagon would be stationed.

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
