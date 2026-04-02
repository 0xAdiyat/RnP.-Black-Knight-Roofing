import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

let resendInstance: Resend | null = null;
function getResend() {
  if (!resendInstance) {
    if (!import.meta.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing from environment variables');
    }
    resendInstance = new Resend(import.meta.env.RESEND_API_KEY);
  }
  return resendInstance;
}
const TO_EMAIL = 'support@blackknightroofing.com';
const FROM_EMAIL = 'Black Knight Roofing <noreply@blackknightroofing.com>';

function row(label: string, value: string | undefined) {
  if (!value) return '';
  return `
    <tr>
      <td style="padding: 8px 12px; font-size: 13px; color: #888; white-space: nowrap; width: 140px; vertical-align: top;">${label}</td>
      <td style="padding: 8px 12px; font-size: 13px; color: #fff;">${value}</td>
    </tr>
  `;
}

function buildEmailHtml({
  subject,
  fields,
}: {
  subject: string;
  fields: { label: string; value: string | undefined }[];
}) {
  const rows = fields.map(f => row(f.label, f.value)).join('');
  return `
    <!DOCTYPE html>
    <html>
      <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
      <body style="margin:0;padding:0;background:#0d0d0d;font-family:Inter,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;padding:32px 0;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#161616;border-radius:16px;overflow:hidden;border:1px solid #2a2a2a;">
              <!-- Header -->
              <tr>
                <td style="background:#F2C744;padding:20px 28px;">
                  <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:#000;text-transform:uppercase;">Black Knight Roofing</p>
                  <h1 style="margin:4px 0 0;font-size:20px;font-weight:700;color:#000;">${subject}</h1>
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="padding:24px 28px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#1e1e1e;border-radius:10px;border:1px solid #2a2a2a;">
                    ${rows}
                  </table>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="padding:16px 28px;border-top:1px solid #222;">
                  <p style="margin:0;font-size:11px;color:#555;">Submitted via blackknightroofing.com</p>
                </td>
              </tr>
            </table>
          </td></tr>
        </table>
      </body>
    </html>
  `;
}

// ─────────────────────────────────────────────
// Contact Us Form
// ─────────────────────────────────────────────
export const server = {
  sendContactForm: defineAction({
    accept: 'form',
    input: z.object({
      firstName: z.string().min(1, 'First name is required'),
      phone: z.string().min(1, 'Phone is required'),
      email: z.string().email('A valid email is required'),
      address: z.string().optional(),
      zip: z.string().optional(),
      service: z.string().optional(),
      message: z.string().optional(),
    }),
    handler: async input => {
      await getResend().emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `New Contact Form Submission — ${input.firstName}`,
        html: buildEmailHtml({
          subject: 'New Contact Inquiry',
          fields: [
            { label: 'Name', value: input.firstName },
            { label: 'Phone', value: input.phone },
            { label: 'Email', value: input.email },
            { label: 'Address', value: input.address },
            { label: 'Zip Code', value: input.zip },
            { label: 'Service Needed', value: input.service },
            { label: 'Message', value: input.message },
          ],
        }),
      });
      return { success: true };
    },
  }),

  // ─────────────────────────────────────────────
  // Estimate Form
  // ─────────────────────────────────────────────
  sendEstimateForm: defineAction({
    accept: 'form',
    input: z.object({
      fullName: z.string().min(1, 'Full name is required'),
      phone: z.string().min(1, 'Phone is required'),
      email: z.string().email('A valid email is required'),
      address: z.string().optional(),
      zip: z.string().optional(),
      service: z.string().optional(),
      message: z.string().optional(),
    }),
    handler: async input => {
      await getResend().emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `New Estimate Request — ${input.fullName}`,
        html: buildEmailHtml({
          subject: 'New Estimate Request',
          fields: [
            { label: 'Full Name', value: input.fullName },
            { label: 'Phone', value: input.phone },
            { label: 'Email', value: input.email },
            { label: 'Address', value: input.address },
            { label: 'Zip Code', value: input.zip },
            { label: 'Service Needed', value: input.service },
            { label: 'Message', value: input.message },
          ],
        }),
      });
      return { success: true };
    },
  }),

  // ─────────────────────────────────────────────
  // Multi-Step Quote Form
  // ─────────────────────────────────────────────
  sendQuoteForm: defineAction({
    accept: 'form',
    input: z.object({
      zipCode: z.string().min(1, 'Zip code is required'),
      service: z.string().min(1, 'Service is required'),
      firstName: z.string().min(1, 'First name is required'),
      lastName: z.string().min(1, 'Last name is required'),
      phone: z.string().min(1, 'Phone is required'),
      email: z.string().email('A valid email is required'),
    }),
    handler: async input => {
      await getResend().emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `New Quote Request — ${input.firstName} ${input.lastName}`,
        html: buildEmailHtml({
          subject: 'New Quote Request',
          fields: [
            { label: 'Name', value: `${input.firstName} ${input.lastName}` },
            { label: 'Phone', value: input.phone },
            { label: 'Email', value: input.email },
            { label: 'Zip Code', value: input.zipCode },
            { label: 'Service Needed', value: input.service },
          ],
        }),
      });
      return { success: true };
    },
  }),

  // ─────────────────────────────────────────────
  // Hero Free Quote Form
  // ─────────────────────────────────────────────
  sendFreeQuoteForm: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(1, 'Name is required'),
      phone: z.string().min(1, 'Phone is required'),
      email: z.string().email('A valid email is required'),
      assist: z.string().optional(),
    }),
    handler: async input => {
      await getResend().emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `New Free Quote Request — ${input.name}`,
        html: buildEmailHtml({
          subject: 'New Free Quote Request',
          fields: [
            { label: 'Name', value: input.name },
            { label: 'Phone', value: input.phone },
            { label: 'Email', value: input.email },
            { label: 'How Can We Help', value: input.assist },
          ],
        }),
      });
      return { success: true };
    },
  }),
};
