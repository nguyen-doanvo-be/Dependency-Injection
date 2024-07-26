// // Interface cho EmailService
// interface EmailService2 {
//     sendEmail(message: string): void;
//   }
  
//   // Implement EmailService
//   class SimpleEmailService2 implements EmailService2 {
//     sendEmail(message: string): void {
//       console.log(`Sending email with message: ${message}`);
//     }
//   }
  
//   // Factory Pattern để tạo EmailService
//   class EmailServiceFactory {
//     static createEmailService(type: string): EmailService2 {
//       if (type === "simple") {
//         return new SimpleEmailService2();
//       }
//       // Có thể thêm nhiều loại dịch vụ email khác ở đây
//       throw new Error("Invalid email service type");
//     }
//   }
  
//   // Sử dụng Factory Pattern để tạo EmailService
//   const emailService2 = EmailServiceFactory.createEmailService("simple");
//   emailService2.sendEmail("Hello, Factory Pattern!");
  