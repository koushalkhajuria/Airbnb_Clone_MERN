Certainly! Here's an updated version of the Airbnb database schema, including examples and documentation for each key:


Users Collection:
{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "hashedPassword",
  "profilePicture": "https://example.com/profile.jpg",
  "dateOfBirth": "1990-01-01",
  "contactDetails": {
    "phone": "+1234567890",
    "address": "123 Main St",
    "country": "USA",
    "city": "New York",
    "state": "NY",
    "zipCode": "12345"
  },
  "verificationStatus": "verified",
  "preferences": {
    "language": "en",
    "currency": "USD"
  },
  "roles": ["user"],
  "createdAt": "2022-01-01T12:00:00Z",
  "updatedAt": "2022-01-02T08:30:00Z"
}

_id: Unique identifier for the user.
name: User's name.
email: User's email address.
password: User's password (hashed for security).
profilePicture: URL of the user's profile picture.
dateOfBirth: User's date of birth.
contactDetails: User's contact details including phone, address, country, city, state, and zip code.
verificationStatus: User's verification status (e.g., "verified", "unverified").
preferences: User's preferences such as language and currency.
roles: User's roles or permissions in the system.
createdAt: Timestamp indicating when the user document was created.
updatedAt: Timestamp indicating when the user document was last updated.



Listings Collection:
{
  "_id": "ObjectId",
  "title": "Luxurious Beachfront Villa",
  "description": "Experience luxury in this beautiful beachfront villa.",
  "propertyType": "villa",
  "capacity": 8,
  "bedroomCount": 4,
  "bathroomCount": 4,
  "size": 400,
  "rules": "No pets allowed.",
  "location": {
    "type": "Point",
    "coordinates": [-73.958998, 40.780766],
    "address": "123 Ocean View Dr",
    "country": "USA",
    "city": "New York",
    "state": "NY",
    "zipCode": "12345"
  },
  "pricing": {
    "basePrice": 300,
    "additionalFees": {
      "cleaningFee": 100,
      "serviceFee": 50
    },
    "seasonalPricing": [
      {
        "startDate": "2022-06-01",
        "endDate": "2022-08-31",
        "price": 400
      }
    ],
    "discounts": [
      {
        "description": "Early Bird Discount",
        "percentage": 10
      }
    ],
    "cancellationPolicy": "flexible"
  },
  "availability": [
    {
      "startDate": "2022-09-01",
      "endDate": "2022-09-30",
      "blocked": false,
      "minimumStay": 2,
      "maximumStay": 14,
      "customRules": "No smoking allowed."
    }
  ],
  "amenities": ["pool", "wifi", "parking"],
  "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
  "host": {
    "$ref": "users",
    "$id": "ObjectId"
  },
  "reviews": [
    {
      "$ref": "reviews",
      "$id": "ObjectId"
    }
  ],
  "bookings": [
    {
      "$ref": "bookings",
      "$id": "ObjectId"
    }
  ],
  "createdAt": "2022-02-01T10:00:00Z",
  "updatedAt": "2022-02-02T15:30:00Z"
}

_id: Unique identifier for the listing.
title: Title of the listing.
description: Description of the listing.
propertyType: Type of the property (e.g., "apartment", "house", "villa").
capacity: Maximum number of guests allowed in the listing.
bedroomCount: Number of bedrooms in the listing.
bathroomCount: Number of bathrooms in the listing.
size: Size of the listing in square meters.
rules: Rules or guidelines for guests staying in the listing.
location: Location details of the listing, including type, coordinates, address, country, city, state, and zip code.
pricing: Pricing information for the listing.
basePrice: Base price per night for the listing.
additionalFees: Additional fees such as cleaning fee and service fee.
seasonalPricing: Seasonal pricing information, including start date, end date, and price per night.
discounts: Discounts available for the listing, including description and percentage off.
cancellationPolicy: Cancellation policy for the listing.
availability: Availability details for the listing.
startDate: Start date of availability.
endDate: End date of availability.
blocked: Indicates if the listing is blocked for booking during this period.
minimumStay: Minimum number of nights required for booking.
maximumStay: Maximum number of nights allowed for booking.
customRules: Custom rules or restrictions for booking during this period.
amenities: Array of amenities available in the listing.
images: Array of image URLs for the listing.
host: Reference to the user (host) who owns the listing.
reviews: Array of references to reviews related to the listing.
bookings: Array of references to bookings made for the listing.
createdAt: Timestamp indicating when the listing document was created.
updatedAt: Timestamp indicating when the listing document was last updated.




Bookings Collection:
{
  "_id": "ObjectId",
  "guest": {
    "$ref": "users",
    "$id": "ObjectId"
  },
  "listing": {
    "$ref": "listings",
    "$id": "ObjectId"
  },
  "checkInDate": "2022-09-15",
  "checkOutDate": "2022-09-22",
  "guestCount": 4,
  "totalPrice": 2000,
  "bookingStatus": "confirmed",
  "paymentStatus": "paid",
  "createdAt": "2022-08-15T14:00:00Z",
  "updatedAt": "2022-08-22T10:30:00Z"
}

_id: Unique identifier for the booking.
guest: Reference to the user (guest) who made the booking.
listing: Reference to the listing being booked.
checkInDate: Date of check-in for the booking.
checkOutDate: Date of check-out for the booking.
guestCount: Number of guests included in the booking.
totalPrice: Total price for the booking.
bookingStatus: Status of the booking (e.g., "confirmed", "pending", "cancelled").
paymentStatus: Status of the payment for the booking (e.g., "paid", "pending", "failed").
createdAt: Timestamp indicating when the booking document was created.
updatedAt: Timestamp indicating when the booking document was last updated.



Reviews Collection:
{
  "_id": "ObjectId",
  "listing": {
    "$ref": "listings",
    "$id": "ObjectId"
  },
  "user": {
    "$ref": "users",
    "$id": "ObjectId"
  },
  "rating": 4.5,
  "comment": "The villa exceeded our expectations. Great experience!",
  "createdAt": "2022-08-25T12:00:00Z",
  "updatedAt": "2022-08-26T08:30:00Z"
}

_id: Unique identifier for the review.
listing: Reference to the listing being reviewed.
user: Reference to the user who wrote the review.
rating: Rating given for the listing.
comment: Comment or review text.
createdAt: Timestamp indicating when the review document was created.
updatedAt: Timestamp indicating when the review document was last updated.
Please note that this is an advanced database schema, and the design may vary depending on specific application requirements. It's crucial to thoroughly analyze your application needs and make appropriate adjustments to the schema accordingly.