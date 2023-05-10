# project-group-pink-pandas
- @ Jant Chan
- @ Zhiyan Hu
- @ Han Li
- @ Jiewen Li
- @ Jingyi You
- @ Kevin Zheng
# Patient List Manager - A Collaborative Working Flow Web Application in Health Service

Patient List Manager is an online collaborative web application in the field of digital health helping to improve the experiences of daily workflows for healthcare staff working in hospital. 

# Run Patient List Locally 
### **Environment**
- DB connection URL = mongodb://127.0.0.1:27017/project

### **Install dependencies**
- Open terminal from frontend
```bash
  npm install
```
- Open terminal from backend
```bash
  npm install
```

### **Start the server**

***1. Development Environment***
- Open terminal from backend
```bash
  npm run init-db
  npm start
```
- Open terminal from frontend
```bash
  npx tinylicious
```
- Open another terminal from frontend
```bash
  npm run dev
```

***2. Production Environment***
- Open terminal from frontend
```bash
  npm run build
```
- Open terminal from backend
```bash
  npm run production
```

# Features and Pages 
## Login Page
Users are able to log in to their account using their email address and password. 

The successfully logged in users will be redircted to the Patieng List Page (Homepage). The plain password will be hashed to store in the database, there will be no plain password showing in the database.

## Patient List 
After logging in, the users will have a page contains three views which are Overview, Outstanding Tasks, and Add Patient respectively.
### Overview Page
The Overview Page contains of every patient in the team with patient information, tasks with the progress associated with each pateint and a real-time collaborative text area for each patient card for sharing message among users. The shared text area allows users to edit the text field while collaborating with other users in the real time which is a simple version of Google Doc.

Users are able to add different tasks for different patients in the team and modify the progress for each showing task if needed. Once there is a new task added in the team that the users belong to, every member in the team will recieve a the message showing the task type and the patient that needed for the task.

### Outstanding Tasks View
The Outstanding Tasks Page lists out all the outstanding tasks within the team in a table. Every member in the team is able to claim and delete the task(s), and also mark the task(s) as done.

### Add Patient View
A view for adding patient for user. Once there is a new patient added in the team that the users belong to, every member in the team will recieve a the message showing they have a new patient with the patient name and date/time added. 

## Patient Details Page

## User Profile Page
Users are able to browse their own personal information and the tasks done in the past 7 days diplaying in the bar chart with the task types specified. If needed, the user can also edit the personal information including name, phone number, and email address and change the password.

## Team Page
If the logged-in users are ordinary users, they will be able to browse their own team patients, team details which contain every member of their team, team performance in the last 7 days, and user contribution in the number of completed tasks.  Or, if the logged-in user is an admin, every team's information will be provided and the admin can switch the team's page using tabs. 

## Notification Page
The message center of the user listing out all the notifications recieved in the past for the logged in user. The list can be sorted by time created, patient name, message type, and unread first. 

And if the patient has been transferred to another team, the current team members will recieve the message showing the patient has been transferred, and the new team which the patient has been transferred to will get the message showing the new patient name with the name and date added.

