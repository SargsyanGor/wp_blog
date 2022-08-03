export default async function (req: any, res: any) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'wgblog.arm@gmail.com',
      pass: 'ytewitzhrzujgzbk',
    },
    secure: true,
  })

  const mailData = {
    from: 'wgblog.arm@gmail.com',
    to: 'gor.sargsyan.frontend@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div><p><span>Name:</span> ${req.body.name}</p><p><span>Topic:</span> ${req.body.topic}</p><p><span>Message:</span> ${req.body.message}</p></div><p>Sent from:
    ${req.body.email}</p>`,
  }
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) {
      res.send('error' + JSON.stringify(err))
    } else {
      res.send('success')
    }
  })
}
