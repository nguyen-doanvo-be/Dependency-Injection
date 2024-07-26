// // NOT USING DEPENDENCY INJECTION
// // Interface cho EmailService
// interface EmailService {
//     sendEmail(message: string): void;
//   }
  
//   // Implement EmailService
//   class SimpleEmailServices implements EmailService {
//     sendEmail(message: string): void {
//       console.log(`Sending email with message: ${message}`);
//     }
//   }

//   // create class AdvanceEmailService and implements EmailService
//   class AdvanceEmailService implements EmailService {
//     sendEmail(message: string): void {
//         console.log(`Sending email with message: ${message} from Advance Email Service`);
//     }
//   }
  
//   // Notifications create and manage the dependent itself
//   class Notifications {
//     private advanceEmailService: EmailService;
//     // private emailService: EmailService;
  
//     constructor() {
//     // create EmailService directly inside the Notification
//     //   this.emailService = new SimpleEmailServices();
//     this.advanceEmailService =  new AdvanceEmailService(); // have to modify the code / really annoying
//     }
  
//     sendNotification(message: string): void {
//       this.advanceEmailService.sendEmail(message);
//     }
//   }
  
//   const notifications = new Notifications();
//   notifications.sendNotification("Hello, No Dependency Injection!");
  
// // USING DEPENDENCY INJECTION
// // interface cho EmailService
// interface EmailService {
//     sendEmail(message: string): void;
// }

// // Implements EmailService
// class SimpleEmailService implements EmailService {
//     sendEmail(message: string): void {
//         console.log(`Sending email: ${message}`);
//     }
// }

// class AdvanceEmailService implements EmailService {
//     sendEmail(message: string): void {
//         console.log(`Sending email: ${message} from Advance Email Service`);
//     }
// }

// // Notificate using EmailService
// class Notificate {
//     private emailService: EmailService;

//     // constructor injection
//     constructor(emailService: EmailService) {
//         this.emailService = emailService;
//     }


//     sendNotification(message: string): void {
//         this.emailService.sendEmail(message);
//     }
// }

// // Use DI to provide dependent for Notificate
// // const emailService = new SimpleEmailService();
// // const notification = new Notificate(emailService);
// // notification.sendNotification("Hello, world!")

// const advanceEmailService = new AdvanceEmailService();
// const notification = new Notificate(advanceEmailService);
// notification.sendNotification("Hello, world!");