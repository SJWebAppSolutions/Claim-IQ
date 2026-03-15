const { contactModel, ContactPage } = require("../models/contact.model");
const mailTransporter = require("../config/mail.config.js");

exports.getContact = async (req, res) => {
  try {

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    const contact = await ContactPage.findOne().lean();

    if (!contact) {
      return res.status(404).json({
        message: "content not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: contact
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


exports.sendMessage = async (req, res) => {
  try {
    const contactData = contactModel(req.body);

    const { firstName, lastName, email, telephone, message } = contactData;

    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "First name, email and message are required"
      });
    }

    try {
      mailTransporter.sendMail({
        from: `"Website Contact" <${process.env.MAIL_EMAIL}>`,
        to: process.env.MAIL_EMAIL,
        subject: 'Contact Form: New Inquiry',
        html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>New Contact Inquiry</title>
</head>

<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 0;">

<table width="600" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,0.08);">

<tr>
<td style="background:#2b3f8f;padding:22px 30px;color:#ffffff;">
<h2 style="margin:0;font-size:20px;font-weight:600;">
New Contact Inquiry
</h2>
<p style="margin:4px 0 0;font-size:13px;opacity:0.9;">
Website Contact Form Submission
</p>
</td>
</tr>

<tr>
<td style="padding:30px;">

<p style="margin:0 0 20px;font-size:14px;color:#334155;">
You have received a new message from your website contact form.
</p>

<table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#334155;">

<tr>
<td style="padding:10px 0;width:120px;color:#94a3b8;text-transform:uppercase;font-size:12px;">
Name
</td>
<td style="padding:10px 0;font-weight:500;">
${firstName} ${lastName || ""}
</td>
</tr>

<tr>
<td style="padding:10px 0;color:#94a3b8;text-transform:uppercase;font-size:12px;">
Email
</td>
<td style="padding:10px 0;">
<a href="mailto:${email}" style="color:#2b3f8f;text-decoration:none;">
${email}
</a>
</td>
</tr>

<tr>
<td style="padding:10px 0;color:#94a3b8;text-transform:uppercase;font-size:12px;">
Phone
</td>
<td style="padding:10px 0;">
${telephone || "Not Provided"}
</td>
</tr>

</table>

<div style="margin-top:20px;">
<p style="margin:0 0 8px;font-size:12px;color:#94a3b8;text-transform:uppercase;">
Message
</p>

<div style="background:#f1f5f9;padding:16px;border-radius:6px;font-size:14px;color:#334155;line-height:1.6;">
${message}
</div>
</div>

<div style="margin-top:28px;text-align:center;">
<a href="mailto:${email}" style="display:inline-block;background:#2b3f8f;color:#ffffff;
padding:12px 22px;font-size:14px;border-radius:6px;
text-decoration:none;font-weight:500;">
Reply to Inquiry →
</a>
</div>

</td>
</tr>

<tr>
<td style="background:#f8fafc;padding:16px 30px;text-align:center;font-size:12px;color:#64748b;">
This email was generated automatically.
<br />
© ${new Date().getFullYear()} Your Company Name
</td>
</tr>

</table>

</td>
</tr>
</table>
</body>
</html>
`
      });
    } catch (mailError) {
      console.error("Mail failed:", mailError);
    }

    res.status(200).json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (error) {
    console.error("Send Message Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};