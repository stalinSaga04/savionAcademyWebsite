# Formspree Setup Guide - Step by Step

## Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to https://formspree.io/signup
2. Sign up with your email (free tier: 50 submissions/month)
3. Verify your email address

### Step 2: Create a Form
1. After logging in, click **"+ New Form"** button
2. Name your form: "Sanvion Academy Contact Form"
3. Set recipient email: **santhakumardevan@gmail.com**
4. Click **"Create Form"**

### Step 3: Get Your Form Endpoint
1. After creating the form, you'll see your form endpoint
2. It looks like: `https://formspree.io/f/abc123xyz`
3. **Copy this URL** - you'll need it in the next step

### Step 4: Add to Vercel Environment Variables
1. Go to https://vercel.com/dashboard
2. Select your project: **savionAcademyWebsite**
3. Go to **Settings** → **Environment Variables**
4. Click **"Add New"**
5. Add the following:
   - **Name**: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - **Value**: `https://formspree.io/f/YOUR_FORM_ID` (paste your endpoint from Step 3)
   - **Environment**: Select all (Production, Preview, Development)
6. Click **"Save"**

### Step 5: Redeploy
1. Go to **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Or simply push a new commit to trigger auto-deployment

### Step 6: Test
1. Go to your live website
2. Navigate to `/contact` page
3. Fill out and submit the form
4. Check **santhakumardevan@gmail.com** for the email!

## Alternative: Local Development Setup

If you want to test locally:

1. Create a `.env.local` file in the project root:
```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

2. Restart your dev server:
```bash
npm run dev
```

## What Happens After Setup?

✅ Form submissions will be sent directly to: **santhakumardevan@gmail.com**

✅ Each email includes:
- Name
- Email (reply-to)
- Phone
- Message

✅ You'll receive an email notification for every form submission

## Troubleshooting

**Form not sending?**
- Check that `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is set in Vercel
- Verify the endpoint URL is correct (starts with `https://formspree.io/f/`)
- Check Formspree dashboard for any errors
- Make sure you've verified your email in Formspree

**Need more submissions?**
- Free tier: 50/month
- Paid plans available at https://formspree.io/pricing

## Support

- Formspree Docs: https://formspree.io/guides/nextjs/
- Formspree Support: support@formspree.io
