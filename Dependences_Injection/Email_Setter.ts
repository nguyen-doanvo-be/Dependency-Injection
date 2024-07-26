// interface EmailService1 {
//     sendEmail(message: string): void;
// }

// class SimpleEmailService1 implements EmailService1 {
//     sendEmail(message: string): void {
//         console.log(`Sending email: ${message}`);
//     }
// }

// class Notificate1 {
//     private emailService1!: EmailService1;

//     //setter injection
//     setEmailService(emailService1: EmailService1): void {
//         this.emailService1 = emailService1;
//     }

//     sendNotification(message: string):void {
//         if(this.emailService1) {
//             this.emailService1.sendEmail(message);
//         }
//         else
//         {
//             console.log("Email service not set");
//         }
//     }
// }

// const emailService1 = new SimpleEmailService1();
// const notification1 = new Notificate1();

// notification1.setEmailService(emailService1);
// notification1.sendNotification("Hello, world!");