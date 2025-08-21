# VaccineFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

To install angular run `npm install -g @angular/cli`.

To run code `npm install` inside the project's root folder.

## ▶️ How to Run

In order to run the application, both the backend (.NET API) and the frontend (Angular) must be running.

1. Start the backend project:
   ```bash
   dotnet run
  By default, the API will run at http://localhost:7087 (or the configured port).

2. Start the frontend project: `ng serve`
  Open the application in your browser at http://localhost:4200/


## Technologies Used

- **Angular 18** (Frontend)
- **TypeScript**
- **SCSS / Bootstrap**
- **Font Awesome**
- **.NET 8.0 (Backend)** → [Repositório Backend]([https://github.com/seu-usuario/cartaodevacinacao-backend](https://github.com/juhgadotti/vaccine-back))

## User Guide

### 1. Header  
<img width="994" height="128" alt="header" src="https://github.com/user-attachments/assets/32b35bc9-e0c4-4942-9445-d68ba146c3ec" />
The system provides a header navigation bar that allows quick and easy access to all pages of the application.  

---

### 2. Create a New Vaccine  
<img width="847" height="502" alt="new-vaccine" src="https://github.com/user-attachments/assets/77714450-63cc-474b-b1b7-6a736a2304e8" />
Register a new vaccine by specifying its **name** and the **number of doses** (must be greater than zero).  
- On successful registration, the system displays a confirmation message for **4 seconds** (as shown in section 4).
- After that, the form fields are cleared so you can immediately add another vaccine if needed.  

---

### 3. Register a New User  
<img width="919" height="464" alt="new-patient" src="https://github.com/user-attachments/assets/dabc5e57-a261-4be0-9b46-433e8a4548c8" />
Add a new user by providing a **name**.  
- On successful registration, the system displays a confirmation message for **4 seconds** (as shown in section 4).
- After that, the form is reset for a new entry.  

---

### 4. Record a New Vaccination  
<img width="970" height="902" alt="new-vaccination" src="https://github.com/user-attachments/assets/9212d533-80e5-4f41-83a5-6f3b314a9148" />
To register a vaccination:  
1. Select an existing user  
2. Select a registered vaccine  
3. Choose one of the available doses for that vaccine  
4. Define the vaccination date  

- On successful registration, the system displays a confirmation message for **4 seconds**.  
- The system **does not allow duplicate vaccination records** for the same user, vaccine, and dose.  

---

### 5. User List  
<img width="2182" height="685" alt="user-list" src="https://github.com/user-attachments/assets/e430aa72-667e-4156-876f-9dbf654b5e0d" />
The application displays a list of all registered users, showing:  
- User name  
- Total number of doses received  
- Date of the last vaccination  

Additional functionalities:  
- Clicking on a user redirects to their detailed vaccination history.  
- The list is ordered by users who received the most recent dose.  
- It is possible to delete a user, which will also remove their entire vaccination history.  

---

### 6. User Information & Vaccination History  
<img width="2170" height="1039" alt="user-details" src="https://github.com/user-attachments/assets/87867fbe-9e17-4b6c-878b-04529b7c8cc7" />
When accessing a user’s page, the system shows:  
- A container displaying the **user’s name**  
- A table with detailed vaccination information:  
  - **Left side:** Vaccines registered for the user and the total number of doses expected for each vaccine.  
  - **Right side:** Each recorded dose of the respective vaccine along with its registration date.  
    - In case of many vaccinations, the system provides a **scrollable list** for better organization and visualization.
    - 
Additional functionality:  
- It is possible to delete a vaccination record for the user directly from this page.  
