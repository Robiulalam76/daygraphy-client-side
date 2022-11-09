import React from 'react';
import './blog.css'

const BlogCard = () => {
    return (
        <section class="bg-white grid grid-cols-1 gap-8 md:p-12">
            <div class="">
                <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-between items-center mb-5 text-gray-500">
                        <div class="flex items-center space-x-4">
                            <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                            <span class="font-medium dark:text-white">
                                Jese Leos
                            </span>
                        </div>
                        <span class="text-sm">1 days ago</span>
                    </div>
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">1. Difference between SQL and NoSQL</a></h2>
                    <div class="mb-5 font-ligh">
                        <table>
                            <tr>
                                <th>Key</th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>SQL databases are classified as Relational databases, i.e., RDBMS.</td>
                                <td>NoSQL databases are known as non-relational or distributed database.</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>SQL databases use standard Structured Query Languages, as the name suggests.
                                    SQL is an industry-standard and very powerful language to execute complex queries.</td>
                                <td>NoSQL database has dynamic schema for unstructured data. The data stored in a NoSQL database is not structured.
                                    Data could be stored as document-oriented, column oriented, graph-based or organized as a Key-Value store.</td>
                            </tr>
                            <tr>
                                <td>Scalability</td>
                                <td>SQL databases can extend their capacity on a single server by increasing their RAM, CPU or SSD.
                                    SQL databases are scalable vertically, as their storage could be increased for the same server by enhancing their storage components.</td>
                                <td>In order to increase the capacity of a NoSQL database, you would have to install new servers parallel to the parent server.</td>
                            </tr>
                        </table>
                    </div>

                </article>
            </div>

            <div class="">
                <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-between items-center mb-5 text-gray-500">
                        <div class="flex items-center space-x-4">
                            <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                            <span class="font-medium dark:text-white">
                                Jese Leos
                            </span>
                        </div>
                        <span class="text-sm">1 days ago</span>
                    </div>
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">2. What is JWT, and how does it work?</a></h2>
                    <p class="mb-5 font-ligh">
                        A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token.
                        <br />
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                        Once decoded, you will get two JSON strings:

                        The header and the payload.
                        The signature.
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                    </p>
                </article>
            </div>

            <div class="">
                <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-between items-center mb-5 text-gray-500">
                        <div class="flex items-center space-x-4">
                            <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                            <span class="font-medium dark:text-white">
                                Jese Leos
                            </span>
                        </div>
                        <span class="text-sm">1 days ago</span>
                    </div>
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">3. What is the difference between javascript and NodeJS?</a></h2>
                    <p class="mb-5 font-ligh">
                        1. NodeJS :
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br /><br />

                        2. JavaScript :
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    </p>

                    <table>
                        <tr>
                            <th>Javascript</th>
                            <th>NodeJS</th>
                        </tr>
                        <tr>
                            <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>Javascript can only be run in the browsers.
                            </td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                    </table>
                </article>
            </div>

            <div class="">
                <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-between items-center mb-5 text-gray-500">
                        <div class="flex items-center space-x-4">
                            <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                            <span class="font-medium dark:text-white">
                                Jese Leos
                            </span>
                        </div>
                        <span class="text-sm">1 days ago</span>
                    </div>
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">4. How does NodeJS handle multiple requests at the same time?</a></h2>
                    <p class="mb-5 font-ligh">
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                        How to scale your NodeJS application with Cluster Module?

                        A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.
                    </p>
                </article>
            </div>

        </section >


    );
};

export default BlogCard;