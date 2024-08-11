# Personal Password Manager Frontend 
This Angular application is designed to manage and interact with stored passwords. It provides functionalities to list, view, add, update, and delete passwords. The application communicates with a backend API for all data operations and offers a user-friendly, responsive interface with form validations.


## Features 
- **List Passwords**: Display all stored passwords in a list.
- **View Password**: View details of a specific password with an option to decrypt and reveal it.
- **Add Password**: Interface to securely add a new password.
- **Update Password**: Edit an existing password with decrypted view before making changes.
- **Delete Password**: Remove a password from the list.
## Installation 
## 1. Prerequisites
Ensure you have the following installed: 
- Node js
- npm
## 2 . Clone the repository 
```git git clone https://github.com/yourusername/your-repo.git ```

## 3. Install Dependency 
``` bash npm install ``` 
## Configuration 
## 1 .Environment Variables 
The application uses environment-specific configurations. Set these variables in the src/environments/ directory: 
- src/environment/environment.ts (for development)
- src/environment/environment.prod.ts (for production)
 Ensure you configure the API endpoints and other necessary settings in these files.

## 2.API Integration
Update the API endpoint URLs in the environment configuration files to match your backend service. For example: 
```typescript export const environment = { production: false, apiUrl: 'https://api.yourdomain.com' }; ```

## 3.UX
- **Form Validations**: Ensure that all forms have appropriate validation rules and user feedback.
- **Responsiveness**: The interface should be responsive and work well on different devices and screen sizes.
- 

## Usage 
## 1. Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 2. Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 3. Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Acknowledgements
- [Angular](https://angular.dev/)- The framework used for this project

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
