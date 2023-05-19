import React, { useState } from 'react';

const Blog = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    const questions = [
        {
            id: "Question-1",
            question: 'Question: What is an access token and refresh token? How do they work and where should we store them on the client-side?',
            answer: `Answer: Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization. A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login. In other words, an application can exchange a valid refresh token for a new access token. On the client-side, access tokens and refresh tokens should be stored securely to prevent unauthorized access or tampering.  Access Tokens should be stored in memory or a secure storage mechanism, such as browser session storage or a secure cookie. Storing them in memory ensures they are cleared when the browser or application is closed. If you choose to store them in a cookie, you should set the "HttpOnly" and "Secure" flags to prevent client-side JavaScript access and ensure they are only transmitted over HTTPS. Refresh Tokens are long-lived credentials and should be stored securely in a persistent storage mechanism, such as browser local storage or secure cookies. It's essential to set the "HttpOnly" and "Secure" flags for cookies storing refresh tokens to enhance security.`,
        },
        {
            id: "Question-2",
            question: 'Question: Compare SQL and NoSQL databases?',
            answer: 'Answer: SQL databases are relational, and NoSQL databases are non-relational. SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.',
        },
        {
            id: "Question-3",
            question: 'Question: What is express js? What is Nest JS?',
            answer: 'Answer: ExpressJS is a free, open-source web application framework for Node.js. It provides various features to quickly and easily build web applications using javascript. It is a layer built on top of Node.js that helps in server and route management. Since it is written in javascript it allows absolute beginners to get into web development. NestJS is an open-source framework that helps you build scalable Node.js server-side applications. Heavily inspired by Angular, it is built on Typescript and uses progressive JavaScript. It has a simple design with 3 main components: controllers, modules and providers.',
        },
        {
            id: "Question-4",
            question: 'Question: What is MongoDB aggregate and how does it work?',
            answer: 'Answer: Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. In MongoDB, the aggregation pipeline consists of stages and each stage transforms the document. Or in other words, the aggregation pipeline is a multi-stage pipeline, so in each state, the documents taken as input and produce the resultant set of documents now in the next stage(id available) the resultant documents taken as input and produce output, this process is going on till the last stage. The basic pipeline stages provide filters that will perform like queries and the document transformation modifies the resultant document and the other pipeline provides tools for grouping and sorting documents. You can also use the aggregation pipeline in sharded collection.',
        },
    ];
    return (
        <div className='m-10'>
            <h1 className="text-center text-2xl font-bold text-black mb-4">Blog</h1>
            <div className="max-w-2xl mx-auto p-4 bg-gray-100">
                <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Blog</h1>
                <div className="flex justify-between mt-6">
                    {questions.map((q, index) => (
                        <button
                            key={index}
                            className={`py-2 px-4 rounded-lg ${activeTab === index ? 'bg-blue-800 text-white' : 'bg-blue-300 text-black'
                                }`}
                            onClick={() => handleTabChange(index)}
                        >
                            {q.id}
                        </button>
                    ))}
                </div>
                <div className="mt-6 p-4 bg-white rounded-md shadow">
                    <h2 className="text-lg font-bold text-black mb-2">{questions[activeTab].question}</h2>
                    <p className="text-gray-600">{questions[activeTab].answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
