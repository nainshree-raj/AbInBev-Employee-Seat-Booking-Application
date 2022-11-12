# AbInBev-Employee-Seat-Booking-Application

                                        Case Study 2: Employee Seat Booking Application
                                                       
BACKGROUND :
Employees are returning to the ABI office as the government has lifted the WFH rules with
the decrease in the number of Covid cases in India. The company needs to set up a system which would
help the employees successfully book a seat/desk in the office for any day in advance and allow the
company to keep a track on the count of employees WFH and WFO.


PROBLEM STATEMENT :
To create a user-friendly tool accessible by all employees which would let them
booka seat/desk in the office in advance for up to 5 working days.


REQUIREMENTS :
• Include a registration step which would check whether the employee is double vaccinated along
with the validation of employee details. If not, the employee must upload a negative RTPCR
reportwith validity till 72 hours prior to the date of booking.
• Employee must input the log-in and log-out time along with the date for every booking. The 
seatis only booked for that duration.
• The tool must store/have a repository of all the vaccination certificates and RTPCR reports


EXPECTATIONS :
• A detailed technical architecture & feature list
• A high-level project implementation plan
• Working prototype (optional – for bonus points)

SOLUTION : -

1) Login/Registration Web page for the employee.

    * Implemented using HTML, CSS, JAVA SCRIPT.
    * Features: Authenticating the Employee using the credentials (Phone Number, Email ID, Password, RTPCR Report).
    * Option to Choose & Upload RTPCR Test.
    * Properly interconnected Multi-Page Web Application Design.
    
    <br>
    
    ![](https://github.com/nainshree-raj/AbInBev-Employee-Seat-Booking-Application/blob/main/Screenshot%20(7).png)
 
2) Selecting a seat from the availability shown with the help of UI.

    * Implemented using HTML5, CSS3, JAVA SCRIPT, BOOTSTRAP 5.
    * Created a navigation bar at the top, containing details about the employee trying to Log-In The System.
    * Implemented a Responsive Web Design using Media Queries for the Application.
    * Choose a Day (Mon /Tues /Wed / Thurs / Fri / Sat) to view available seats.
    * Implemented a dynamically changing presentable format for the EMPTY, SELECTED, NOT SELECTED seats.
    * Hovering feature to select a seat.
    * Different colors to show empty, selected, not selected seats.
    
    <br>
    
    ![](https://github.com/nainshree-raj/AbInBev-Employee-Seat-Booking-Application/blob/main/Screenshot%20(9).png)
  
3) Firebase Google 

    * Made use of the Firebase Database Services provided by Google to store the credentials of the Employee (Name, Email, Password For Authentication and RTPCR
      reports).
    * Effectively merged the Database in the backend with the application.
    * Provided an interface to authenticate the given credentials (Working on the same)...
    
    <br>
    
    ![](https://github.com/nainshree-raj/AbInBev-Employee-Seat-Booking-Application/blob/main/Screenshot%20(13).png)
   

