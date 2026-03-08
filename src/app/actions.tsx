'use server';
import { Resend } from 'resend';

const resend = new Resend('re_Cwdc8S9y_MHornFSgMhCt6noxHS9YhRtp');

export async function sendEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const website = formData.get('website');
  const service = formData.get('service');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'girishkumarlodhi7@gmail.com',
      subject: `New Inquiry: ${service} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}