// interface EmailService {
//     sendEmail(recipient: string, subject: string, body: string): void;
//     sendEmailWithAttachment?(recipient: string, subject: string, body: string, attachment: string): void;
// }

// class SimpleEmailService implements EmailService {
//     sendEmail(recipient: string, subject: string, body: string): void {
//         console.log(`Sending email to ${recipient} with subject: ${subject} and body: ${body}`);
//     }
// }

// class AdvanceEmailService implements EmailService {
//     sendEmail(recipient: string, subject: string, body: string): void {
//         console.log(`Sending email to ${recipient} with subject: ${subject} and body: ${body} from Advance Email Service`);
//     }

//     sendEmailWithAttachment(recipient: string, subject: string, body: string, attachment: string): void {
//         console.log(`Sending email to ${recipient} with subject: ${subject} and body: ${body} with attachment: ${attachment}`);
//     }
    
// }

// // NOT USING DEPENDENCY INJECTION
// // class Invoice1 {
// //     private id: number;
// //     private customerName: string;
// //     private amount: number;
// //     private dueDate: Date;
// //     private isPaid: boolean; 
// //     // private simpleEmailService: EmailService;
// //     private advanceEmailService: EmailService;

// //     // 
// //     constructor(id: number, customerName: string, amount: number, dueDate: Date, isPaid: boolean, advanceEmailService: EmailService) {
// //         this.id = id;
// //         this.customerName = customerName;
// //         this.amount = amount;
// //         this.dueDate = dueDate;
// //         this.isPaid = isPaid;
// //         this.simpleEmailService = simpleEmailService; // if simpleEmailService change, we have to modify code in constructor, kindly annoying.
// //         this.advanceEmailService = advanceEmailService;
// //     }

// //     markAsPaid(): void {
// //         this.isPaid = true;
// //         console.log(`Invoice ${this.id} has been marked as paid.`);
// //     }

// //     sendReminder(): void {
// //         const subject = `Reminder: Invoice ${this.id} is due soon`;
// //         const body = `Dear ${this.customerName},\n\nThis is a reminder that the payment for invoice ${this.id} is due on ${this.dueDate.toDateString()}. Please make the payment as soon as possible.`;
// //         this.simpleEmailService.sendEmail(this.customerName, subject, body);
// //     }

// //     getInvoiceDetails(): string {
// //         return `Invoice ID: ${this.id}, Customer: ${this.customerName}, Amount: ${this.amount}, Due Date: ${this.dueDate.toDateString()}, Paid: ${this.isPaid}`;
// //     }

// //     sendReminderWithAttachment(): void {
// //         const subject = `Attachment: Invoice ${this.id}`;
// //         const body = `Dear ${this.customerName},\n\nPlease find the attached invoice for your reference.\n\nRegards,\nInvoice Management System`;
// //         const attachment = `invoice_${this.id}.pdf`;
// //         if(this.advanceEmailService.sendEmailWithAttachment) {
// //             this.advanceEmailService.sendEmailWithAttachment(this.customerName, subject, body, attachment);
// //         }
// //         else
// //         {
// //             console.log("No Attachment");
// //         }
// //     }
// // }

// // const aes = new AdvanceEmailService();
// // const invoice = new Invoice1(123, 'John Doe', 1000, new Date('2023-06-15'), false, aes);

// // invoice.getInvoiceDetails();
// // invoice.sendReminderWithAttachment()

// // USING DEPENDENCY INJECTION
// class Invoice2 {
//     private id: number;
//     private customerName: string;
//     private amount: number;
//     private dueDate: Date;
//     private isPaid: boolean; 
//     private emailService: EmailService;

//     constructor(id: number, customerName: string, amount: number, dueDate: Date, isPaid: boolean, emailService: EmailService) {
//         this.id = id;
//         this.customerName = customerName;
//         this.amount = amount;
//         this.dueDate = dueDate;
//         this.isPaid = isPaid;
//         this.emailService = emailService;
//     }

//     markAsPaid(): void {
//         this.isPaid = true;
//         console.log(`Invoice ${this.id} has been marked as paid.`);
//     }

//     sendReminder(): void {
//         const subject = `Reminder: Invoice ${this.id} is due soon`;
//         const body = `Dear ${this.customerName},\n\nThis is a reminder that the payment for invoice ${this.id} is due on ${this.dueDate.toDateString()}. Please make the payment as soon as possible.\n\nRegards,\nInvoice Management System`;
//         this.emailService.sendEmail(this.customerName, subject, body);
//     }

//     getInvoiceDetails(): string {
//         return `Invoice ID: ${this.id}, Customer: ${this.customerName}, Amount: ${this.amount}, Due Date: ${this.dueDate.toDateString()}, Paid: ${this.isPaid}`;
//     }

//     sendReminderWithAttachment(): void {
//         const subject = `Attachment: Invoice ${this.id}`;
//         const body = `Dear ${this.customerName},\n\nPlease find the attached invoice for your reference.\n\nRegards,\nInvoice Management System`;
//         const attachment = `invoice_${this.id}.pdf`;
//         if(this.emailService.sendEmailWithAttachment) {
//             this.emailService.sendEmailWithAttachment(this.customerName, subject, body, attachment);
//         }
//         else
//         {
//             console.log("No Attachment");
//         }
//     }
// }

// const emailService = new SimpleEmailService();
// const invoice1 = new Invoice2(123, 'John Doe', 1000, new Date('2023-06-15'), false, emailService);

// const advanceEmailService = new AdvanceEmailService();
// const invoice2 = new Invoice2(123, 'John Doe', 1000, new Date('2023-06-15'), false, advanceEmailService);

// invoice1.getInvoiceDetails();  
// invoice1.sendReminder();  
// invoice1.markAsPaid();
// invoice1.getInvoiceDetails();

// // Output:
// // Sending email to John Doe with subject: Reminder: Invoice 123 is due soon and body: Dear John Doe,
// // This is a reminder that the payment for invoice 123 is due on Thu Jun 15 2023. Please make the payment as soon as possible.
// // Regards,
// // Invoice Management System

// // Invoice 123 has been marked as paid.

// invoice2.getInvoiceDetails();
// invoice2.sendReminderWithAttachment();
// // Output:
// // Sending email to John Doe with subject: Attachment: Invoice 123 and body: Dear John Doe,
// // Please find the attached invoice for your reference.
// // Regards,
// // Invoice Management System with attachment: invoice_123.pdf



