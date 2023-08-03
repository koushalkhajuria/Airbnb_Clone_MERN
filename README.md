# Airbnb_Clone_MERN

This is an Airbnb clone with full functionality including room booking, host management, and user authentication using JWT token,

Created a user-friendly interface for users to easily register, login, and view their bookings

Successfully designed and deployed a fully functional room rentingand booking web application.





Download the zip file

Run npm install for the React front End
Run npm install for the Node Backend





Environment variable Names - Add these values and Viola You have a fully working MERN stack project ready
NODE_ENV 
PORT
DATABASE
DATABASE_PASSWORD 
JWT_ACCESS_TOKEN 
JWT_REFRESH_TOKEN 





API Docs - 



Listing -

Api - https://main--mern-stack-clone.netlify.app/api/v1
Method - Get
Description - This api returns the list of all the exisitng lisiting in the database.

Api - https://main--mern-stack-clone.netlify.app/api/v1/:id
Method - Get
Description - This api an individual lisiting based on the Id provided.




Search - 

Api - https://main--mern-stack-clone.netlify.app/api/v1?title=National parks
Method - Get
Description - This api an searches the database based on the title provided, quick search filter,

Api - https://main--mern-stack-clone.netlify.app/api/search?location=Jammu&startDate=2023/07/16&endDate=2023/07/19&guestCapacity=1
Method - Get
Description - This api an searches the database based on the search query provided




Upload Image - 

Api - https://main--mern-stack-clone.netlify.app/api/v1/upload
Method - Post
Description - This api is used to upload the hosted listing images.




Bookings - 

Api - https://main--mern-stack-clone.netlify.app/api/v1/room/booking
Method - Post
Description - This api is used to book a room.

Api - https://main--mern-stack-clone.netlify.app/api/v1/mybookings/:id
Method - Post
Description - This api is used to view a user's bookings



Hosting - 

Api - https://main--mern-stack-clone.netlify.app/api/v1?userId=sdkvdskdsvndjsvk
Method - Get
Description - This api is used to get all the hostings of a particular user

Api - https://main--mern-stack-clone.netlify.app/api/v1/
Method - Post
Description - This api an creates a new hosting based on the host details provided.

Api - https://main--mern-stack-clone.netlify.app/api/v1/
Method - Patch
Description - This api an updates the host Listing based, a user can only update its own listing.

Api - https://main--mern-stack-clone.netlify.app/api/v1/
Method - Delete
Description - This api an deletes its own hosted listing.




Auth -

Api - https://main--mern-stack-clone.netlify.app/api/v1/auth/login
Method - Post
Description - This api is used to login the user which returns a refresh token cookie and an access token

Api - https://main--mern-stack-clone.netlify.app/api/v1/auth/register
Method - Post
Description - This api is used to register the user which returns a refresh token cookie and an access token

Api - https://main--mern-stack-clone.netlify.app/api/v1/auth/refresh
Method - Get
Description - This api is used to refresh the access token

Api - https://main--mern-stack-clone.netlify.app/api/v1/auth/logout
Method - Get
Description - This api is used to clear the token cookie and access token, basically log out the user.




















