'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'All fields are required.' }
  }

  const { error } = await resend.emails.send({
    from: 'CharMarie Salon <onboarding@resend.dev>',
    to: 'karl.boyd003@gmail.com',
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  })

  if (error) {
    console.error('Resend error:', error)
    return { status: 'error', message: 'Failed to send. Please try again or call us directly.' }
  }

  return { status: 'success', message: '' }
}
