# Flipr_API_1

1. Make an API that will serve a Post Request. That API should accept three different
parameters in three different ways.
Body - MongoDB URL[1][2]
Params - 1st Collection Name[3]
Query - 2nd Collection Name[3]
* Using the above parameters make Mongo Connections to the 1st Collection and get
the latest 30 devices, for all these devices get the latest 50 locations from the 2nd
Collection using device ID.
* From the above-collected Data make an object with all the devices as separate keys
with an array of corresponding coordinates (array) which should be sequenced in a
way such that the 0th location of the array has oldest coordinates and the nth
location has the latest coordinates.
* Add some custom headers to the response of API call namely:
“Name” : “your_name”
“Contact”: “your_email”
* Return the above-created object as a response.
