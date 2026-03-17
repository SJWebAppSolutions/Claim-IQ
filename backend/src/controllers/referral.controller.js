const { referralModel, ReferralPage } = require("../models/referral.model");
const mailTransporter = require("../config/mail.config.js");

exports.getReferral = async (req, res) => {
  try {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );

    const referral = await ReferralPage.findOne().lean();

    if (!referral) {
      return res.status(404).json({
        message: "referral contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: referral,
    });
  } catch (error) {
    console.error("Get Referral Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.sendReferralMessage = async (req, res) => {
  try {
    const referralData = referralModel(req.body);

    const {
      yourName,
      yourEmail,
      yourPhone,
      practiceName,
      contactPersonName,
      theirEmail,
      theirPhone,
      notes
    } = referralData;

    if (
      !yourName ||
      !yourEmail ||
      !practiceName ||
      !contactPersonName ||
      !theirEmail
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    try {
      mailTransporter.sendMail({
        from: `"Website Contact" <${process.env.MAIL_EMAIL}>`,
        to: process.env.MAIL_EMAIL,
        subject: `New Referral Submission - ${practiceName}`,
        html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>New Practice Referral</title>
</head>

<body style="margin:0;padding:0;background:#eef2f6;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 15px;">

<table width="620" cellpadding="0" cellspacing="0"
style="background:#ffffff;border-radius:10px;overflow:hidden;
box-shadow:0 6px 20px rgba(0,0,0,0.08);">

<!-- HEADER -->
<tr>
<td style="background:#1e3a6d;padding:22px 30px;color:#ffffff;">
<h2 style="margin:0;font-size:20px;font-weight:600;">
New Practice Referral
</h2>

<p style="margin:5px 0 0;font-size:13px;opacity:0.9;">
Website Referral Form Submission
</p>
</td>
</tr>

<tr>
<td style="padding:30px;">

<!-- YOUR INFORMATION -->
<h3 style="margin-top:0;color:#1e3a6d;font-size:16px;">
1. Referrer Information
</h3>

<table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#334155;">

<tr>
<td style="padding:8px 0;width:160px;color:#64748b;">Name</td>
<td style="padding:8px 0;font-weight:500;">${yourName}</td>
</tr>

<tr>
<td style="padding:8px 0;color:#64748b;">Email</td>
<td style="padding:8px 0;">
<a href="mailto:${yourEmail}" style="color:#1e3a6d;text-decoration:none;">
${yourEmail}
</a>
</td>
</tr>

<tr>
<td style="padding:8px 0;color:#64748b;">Phone</td>
<td style="padding:8px 0;">${yourPhone || "Not Provided"}</td>
</tr>

</table>

<h3 style="margin-top:30px;color:#1e3a6d;font-size:16px;">
2. Referred Practice Information
</h3>

<table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#334155;">

<tr>
<td style="padding:8px 0;width:160px;color:#64748b;">Practice Name</td>
<td style="padding:8px 0;font-weight:500;">${practiceName}</td>
</tr>

<tr>
<td style="padding:8px 0;color:#64748b;">Contact Person</td>
<td style="padding:8px 0;">${contactPersonName}</td>
</tr>

<tr>
<td style="padding:8px 0;color:#64748b;">Practice Email</td>
<td style="padding:8px 0;">
<a href="mailto:${theirEmail}" style="color:#1e3a6d;text-decoration:none;">
${theirEmail}
</a>
</td>
</tr>

<tr>
<td style="padding:8px 0;color:#64748b;">Practice Phone</td>
<td style="padding:8px 0;">${theirPhone || "Not Provided"}</td>
</tr>

</table>

<div style="margin-top:28px;">

<p style="margin:0 0 8px;font-size:12px;color:#64748b;text-transform:uppercase;">
Additional Notes
</p>

<div style="background:#f4f7fb;padding:16px;border-radius:6px;
font-size:14px;color:#334155;line-height:1.6;">
${notes || "No additional notes provided"}
</div>

</div>

<div style="margin-top:30px;text-align:center;">
<a href="mailto:${theirEmail}" 
style="background:#f6b93b;color:#000;padding:10px 15px;
border-radius:6px;text-decoration:none;font-weight:600;
display:inline-flex;align-items:center;gap:8px;">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
  <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.94 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
</svg> Contact Practice
</a>
</div>

</td>
</tr>

<tr>
<td style="background:#f8fafc;padding:18px 30px;text-align:center;
font-size:12px;color:#64748b;">
This email was generated automatically from your referral form.

<br><br>

© ${new Date().getFullYear()} Your Company Name
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
      });
    } catch (mailError) {
      console.error("Mail failed:", mailError);
    }

    res.status(200).json({
      success: true,
      message: "Referral submitted successfully",
    });
  } catch (error) {
    console.error("Send Referral Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
