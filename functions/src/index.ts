import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

// Configure Nodemailer transport using Environment Variables
// Set these using: firebase functions:config:set gmail.email="your-email@gmail.com" gmail.password="your-app-password"
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: functions.config().gmail?.email || "placeholder@email.com",
        pass: functions.config().gmail?.password || "placeholder-password",
    },
});

const ADMIN_EMAIL = functions.config().admin?.email || "admin@sivaelectricals.com";

export const onQuoteCreated = functions.firestore
    .document("quotes/{quoteId}")
    .onCreate(async (snap, context) => {
        const data = snap.data();
        const { name, email, phone, serviceType, description } = data;

        // Email to Admin
        const adminMailOptions = {
            from: `"Siva Electricals Bot" <${functions.config().gmail?.email}>`,
            to: ADMIN_EMAIL,
            subject: `New Quote Request: ${serviceType}`,
            html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
        };

        // Confirmation Email to User
        const userMailOptions = {
            from: `"Siva Electricals" <${functions.config().gmail?.email}>`,
            to: email,
            subject: "We received your quote request!",
            html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for requesting a quote from Siva Electricals.</p>
        <p>We have received your details regarding <strong>${serviceType}</strong> and will get back to you shortly.</p>
        <br>
        <p>Best Regards,<br>Siva Electricals Team</p>
      `,
        };

        try {
            await transporter.sendMail(adminMailOptions);
            await transporter.sendMail(userMailOptions);
            console.log("Quote emails sent successfully");
        } catch (error) {
            console.error("Error sending quote emails:", error);
        }
    });

export const onContactCreated = functions.firestore
    .document("contacts/{contactId}")
    .onCreate(async (snap, context) => {
        const data = snap.data();
        const { name, email, phone, message } = data;

        // Email to Admin
        const adminMailOptions = {
            from: `"Siva Electricals Bot" <${functions.config().gmail?.email}>`,
            to: ADMIN_EMAIL,
            subject: `New Contact Enquiry from ${name}`,
            html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        };

        // Confirmation Email to User
        const userMailOptions = {
            from: `"Siva Electricals" <${functions.config().gmail?.email}>`,
            to: email,
            subject: "Thank you for contacting Siva Electricals",
            html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out to us.</p>
        <p>We have received your message and will respond as soon as possible.</p>
        <br>
        <p>Best Regards,<br>Siva Electricals Team</p>
      `,
        };

        try {
            await transporter.sendMail(adminMailOptions);
            await transporter.sendMail(userMailOptions);
            console.log("Contact emails sent successfully");
        } catch (error) {
            console.error("Error sending contact emails:", error);
        }
    });
