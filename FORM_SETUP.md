# Contact Form Setup Guide

## Current Status

The contact form is now set up with an API route (`/app/api/contact/route.ts`) that will send form submissions to your email.

## Setup Options

### Option 1: Formspree (Recommended for MVP - Free)

1. Sign up at https://formspree.io (free tier: 50 submissions/month)
2. Create a new form
3. Get your form endpoint (e.g., `https://formspree.io/f/abc123xyz`)
4. Add it to your Vercel environment variables:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `FORMSPREE_ENDPOINT` = `https://formspree.io/f/YOUR_FORM_ID`
   - Redeploy your site

### Option 2: Resend (Free tier available)

1. Sign up at https://resend.com
2. Get your API key
3. Install Resend: `npm install resend`
4. Update `/app/api/contact/route.ts` to use Resend
5. Add `RESEND_API_KEY` to Vercel environment variables

### Option 3: SendGrid / Mailgun / Other Email Service

Similar setup - add API keys to environment variables and update the API route.

## Where Messages Go

Once configured, all contact form submissions will be sent to:
**santhakumardevan@gmail.com**

The email will include:
- Name
- Email
- Phone
- Message

## Testing

After setup, test the form at `/contact` to ensure emails are being received.

## Current Behavior (Before Setup)

If no email service is configured, form submissions are logged to the console (development) or will show an error. You must set up one of the options above for production.
