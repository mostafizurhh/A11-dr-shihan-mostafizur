import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 text-justify p-3'>
            <div className='bg-teal-600 p-2 text-white rounded-lg'>
                <p className='text-3xl font-bpld italic mb-3'>Difference Between SQL and NoSQL</p>
                <p>
                    1. SQL databases are relational, NoSQL databases are non-relational. <br />
                    2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                    3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                    4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                    5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </p>
            </div>
            <div className='bg-fuchsia-600 p-2 text-white rounded-lg'>
                <p className='text-3xl font-bpld italic mb-3'>What is JWT, and how does it work?</p>
                <p>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
            </div>
            <div className='bg-rose-600 p-2 text-white rounded-lg'>
                <p className='text-3xl font-bpld italic mb-3'>What is the difference between javascript and NodeJS?</p>
                <p className='mb-3'>
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. It is mostly used on the server-side.
                </p>
                <p>
                    Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    It is basically used on the client-side.
                </p>
            </div>
            <div className='bg-sky-600 p-2 text-white rounded-lg'>
                <p className='text-3xl font-bpld italic mb-3'>How does NodeJS handle multiple requests at the same time?</p>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br /> <br />
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </div>
        </div>
    );
};

export default Blog;