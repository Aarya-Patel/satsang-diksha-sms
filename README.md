# Satsang Diksha Daily Shlok Text

As part of my Coding Challenge submission, I have created an app that sends you a daily Satsang Diksha shlok via SMS. I used express.js to serve my application, MongoDB to store phone numbers and Vonage API to send SMS.

**Disclaimer**: I worked with the free version of Vonage API which severely limited what I can do with the application.

# Prerequisites

To run this application please make sure you have the following:

- Node.js (I was using v12.16.1)
- MongoDB account
- Vonage API account (this is the SMS service)

# Getting Started

To begin using the application:

1. Create a MongoDB cluster and copy its connection url. The connection URL can be found on MongoDB dashboard and should look something like this:

```
mongodb+srv://<username>:<password>@cluster0.sakog.mongodb.net/<database_name>?retryWrites=true&w=majority
```

Replace the information within `<>` with your account information.

2.  Create a `.env` file. Put the following line of code and replace `YOUR_MONGO_DB_URL` with the connection url from step 1.

```
MONGO_DB_URL=YOUR_MONGO_DB_URL
```

3. Now create a Vonage API account and retrieve your API_KEY and API_SECRET and put them into your `.env` file as well.

```
API_KEY=YOUR_API_KEY
API_SECRET=YOUR_API_SECRET
```

**IMPORTANT**: If you are using the free version of Vonage API, then you must register the numbers you wish to text on their website. You cannot send a text to external numbers that you haven't manually added ono Vonage's website with the free trial.

4. Now install all the dependencies and run the program. Type the following in the terminal:

```
npm i
npm start
```

You can now view the application at `localhost:8000` or whichever `PORT` you have defined in the `.env` file.

# Caveats

If you use the free version of the Vonage API, you can only send text messages to those you manually add in Vonage's website. This defeats the purpose of the application. However, if you were to upgrade your Vonage API account, then this application will work as expected.

To receive the text you need to keep the cron job running which means that you must keep the server running as well. This isn't elegant, however you can deploy this application to heroku to solve this problem. (I have chosen against it primarily because the Vonage API will charge you after your free credit is completely used)
