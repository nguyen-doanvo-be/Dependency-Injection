interface EmailService {
    sendEmail(recipient: string, subject: string, body: string): void;
    sendEmailWithAttachment?(recipient: string, subject: string, body: string, attachment: string): void;
}

class SimpleEmailService implements EmailService {
    sendEmail(recipient: string, subject: string, body: string): void {
        console.log(`Sending email to ${recipient} with subject: ${subject} and body: ${body}`);
    }
}

class AdvanceEmailService implements EmailService {
    sendEmail(recipient: string, subject: string, body: string): void {
        console.log(`Sending email to ${recipient} with subject: ${subject} and body: ${body} from Advance Email Service`);
    }

    sendEmailWithAttachment(recipient: string, subject: string, body: string, attachment: string): void {
        console.log(`Sending email to ${recipient} with subject: ${subject} and body: ${body} with attachment: ${attachment}`);
    }
}

class Invoice {
    private id: number;
    private customerName: string;
    private amount: number;
    private dueDate: Date;
    private isPaid: boolean;
    private emailService: EmailService;

    constructor(id: number, customerName: string, amount: number, dueDate: Date, isPaid: boolean) {
        this.id = id;
        this.customerName = customerName;
        this.amount = amount;
        this.dueDate = dueDate;
        this.isPaid = isPaid;
    }

    setEmailService(emailService: EmailService): void {
        this.emailService = emailService;
    }

    markAsPaid(): void {
        this.isPaid = true;
        console.log(`Invoice ${this.id} has been marked as paid.`);
    }

    sendReminder(): void {
        if (!this.emailService) {
            console.log('Email service is not set.');
            return;
        }
        const subject = `Reminder: Invoice ${this.id} is due soon`;
        const body = `Dear ${this.customerName},\n\nThis is a reminder that the payment for invoice ${this.id} is due on ${this.dueDate.toDateString()}. Please make the payment as soon as possible.\n\nRegards,\nInvoice Management System`;
        this.emailService.sendEmail(this.customerName, subject, body);
    }

    getInvoiceDetails(): string {
        return `Invoice ID: ${this.id}, Customer: ${this.customerName}, Amount: ${this.amount}, Due Date: ${this.dueDate.toDateString()}, Paid: ${this.isPaid}`;
    }

    sendReminderWithAttachment(): void {
        if (!this.emailService) {
            console.log('Email service is not set.');
            return;
        }
        const subject = `Attachment: Invoice ${this.id}`;
        const body = `Dear ${this.customerName},\n\nPlease find the attached invoice for your reference.\n\nRegards,\nInvoice Management System`;
        const attachment = `invoice_${this.id}.pdf`;
        if (this.emailService.sendEmailWithAttachment) {
            this.emailService.sendEmailWithAttachment(this.customerName, subject, body, attachment);
        } else {
            console.log("No Attachment");
        }
    }
}

const invoice = new Invoice(123, 'John Doe', 1000, new Date('2023-06-15'), false);

const emailService = new SimpleEmailService();
invoice.setEmailService(emailService);

invoice.getInvoiceDetails();
invoice.sendReminder();
invoice.markAsPaid();
invoice.getInvoiceDetails();

const advanceEmailService = new AdvanceEmailService();
invoice.setEmailService(advanceEmailService);

invoice.getInvoiceDetails();
invoice.sendReminderWithAttachment();
