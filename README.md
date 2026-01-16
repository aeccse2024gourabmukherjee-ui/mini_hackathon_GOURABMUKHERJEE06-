📘 CampusConnect – Peer-to-Peer Academic Help Platform
CampusConnect is a peer-to-peer academic support platform designed to help students connect with each other for topic-based assistance. Instead of relying on a centralized tutor system, students can request help, browse open requests, and accept requests to assist peers directly.
This project demonstrates a peer-matching system where learners support learners.


🚀 Project Objective
To create a simple and effective peer-to-peer (P2P) platform where:
Any student can request help on a topic
Other students can browse and accept those requests
Accepted requests indicate a successful peer connection



🧠 How It Works (Workflow)
Create Request
A student submits a request with a title and description (e.g., “Explain Arrays”).
Browse Requests
Other students can view all open requests on the Browse page.
Accept Request
Any student can accept a request they want to help with.
Once accepted, the request is marked as Accepted.
Accepted Requests
Accepted requests are displayed separately.
This stage represents a peer-to-peer match between two students.
🔗 After acceptance, students can continue discussion or explanation outside the platform (chat, call, meet, etc.).


🤝 Why This Is Peer-to-Peer
No central instructor or admin
Any user can create a request
Any user can accept a request
Students directly help other students
Requests move from open → accepted to indicate peer matching
This follows the core principle of peer-to-peer collaboration.



🧩 Features Implemented
✅ Backend (Node.js + Express)
Create help requests
Fetch all requests
Update request status to accepted
MongoDB database integration
REST API endpoints



✅ Frontend (HTML, CSS, JavaScript)
Create Request page
Browse Open Requests
Accept Requests
View Accepted Requests
Clean and responsive UI
🛠️ Tech Stack
Frontend
HTML
CSS
JavaScript (Vanilla JS)
Backend
Node.js
Express.js
MongoDB
Mongoose
Deployment
Backend deployed on Render
Frontend served as static HTML files



🌐 API Endpoints
Method
Endpoint
Description
GET
/api/requests
Fetch all requests
POST
/api/requests
Create new request
PUT
/api/requests/:id/accept
Accept a request.


PROJECT STRUCTURE
├── Backend
│   ├── models
│   ├── routes
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── Frontend1
│   ├── create.html
│   ├── browse.html
│   ├── accepted.html
│   ├── script.js
│   ├── browse.js
│   └── dashboard.js
│
└── README.md


🚀 Future Enhancements
Real-time chat between connected peers
User authentication
Request categories
Notifications for accepted requests
Video or audio integration


🎯 Conclusion
CampusConnect successfully demonstrates a peer-to-peer academic help system where students collaborate by requesting and providing help. The platform focuses on peer matching, making it scalable and extensible for future interaction features.



👨‍💻 Developed By
Gourab Mukherjee
