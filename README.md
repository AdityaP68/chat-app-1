# Chat Application using a 3rd party chat engine facilitator

This is a chat application built using React, Node.js, and Vite, which leverages the advanced-react-chat-engine library for socket connections to enable real-time messaging.

## Technology Stack

The following technologies were used to build this chat application:

- **React**: A popular JavaScript library for building user interfaces.
- **Node.js**: A runtime environment for building server-side applications using JavaScript.
- **Vite**: A build tool that enables fast and efficient development.
- **advanced-react-chat-engine**: A 3rd party library that simplifies the process of setting up and managing sockets for real-time messaging.

## Getting Started

Follow these steps to get started with the chat application:

1. Clone the repository:

&nbsp;```git clone https://github.com/username/chat-app.git```


2. Install dependencies:

&nbsp; ``` cd chat-app ```
&nbsp; ```npm install```


3. Create an account on [Chat Engine](https://chatengine.io/) and retrieve your API key.


4. Create a `.env` file in the root directory of the project and store your API key as follows:

&nbsp; ``` REACT_APP_CHAT_ENGINE_API_KEY=your_api_key_here ```


&nbsp; > **Note:** The `REACT_APP_` prefix is required in order for the API key to be accessible in the React code.


5. Start the development server:

&nbsp; ``` npm run dev ```


6. Open the application in your browser at `http://localhost:3000`.


## Features

The chat application offers the following features:

- **Real-time messaging**: Users can communicate with each other in real-time using sockets, which ensures that messages are delivered immediately.
- **User authentication**: The chat application uses advanced-react-chat-engine to authenticate users and ensure that only authorized users can access the messaging feature.
- **Message delivery confirmation**: The application provides confirmation to users when messages are delivered to the intended recipient(s).
- **Message history**: Users can view the chat history to see previous messages and conversations.

## Benefits of using advanced-react-chat-engine

Using advanced-react-chat-engine offers several benefits for developers, including:

- **Simplified development process**: The library provides a range of features that make it easier for developers to build real-time messaging applications without having to worry about the intricacies of socket connections and message delivery.
- **Faster development times**: Developers can focus on building the core features of the application without having to spend a significant amount of time worrying about setting up and managing sockets for real-time messaging, which can result in faster development times.
- **Scalability**: advanced-react-chat-engine is designed to scale with your application, so you can add more users and features without worrying about the impact on performance.

## Conclusion

The Chat Application using a 3rd party chat engine facilitator is a great example of how advanced-react-chat-engine can simplify the process of building real-time messaging applications. By leveraging the library, developers can focus on building the core features of the application without worrying about the complexities of socket connections and message delivery. With features like real-time messaging, user authentication, message delivery confirmation, and message history, this chat application offers a rich user experience that is sure to impress. So why not give it a try and see how advanced-react-chat-engine can help you build your own real-time messaging application today!
