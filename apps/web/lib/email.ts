import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Email templates for the entire Bazaari platform
export const emailTemplates = {
  // Partner-related emails
  partnerRegistration: {
    subject: 'Partner Registration Received - Bazaari',
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Bazaari</h1>
          <p style="margin: 5px 0 0 0;">Partner Registration Confirmation</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Thank you for your interest in becoming a Bazaari partner!</h2>
          
          <p>Dear ${data.ownerName},</p>
          
          <p>We have received your partner registration application for <strong>${data.businessName}</strong>.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin-top: 0;">Application Details:</h3>
            <ul style="line-height: 1.6;">
              <li><strong>Business Name:</strong> ${data.businessName}</li>
              <li><strong>Business Types:</strong> ${data.businessTypes.join(', ')}</li>
              <li><strong>Owner:</strong> ${data.ownerName}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Phone:</strong> ${data.phone}</li>
            </ul>
          </div>
          
          <div style="background: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <h4 style="margin-top: 0; color: #1e40af;">Next Steps:</h4>
            <ol style="margin-bottom: 0; line-height: 1.6;">
              <li>Our team will review your application within 2-3 business days</li>
              <li>We may contact you for additional information if needed</li>
              <li>Once approved, you'll receive login credentials and onboarding instructions</li>
              <li>You can then start listing your services on our platform</li>
            </ol>
          </div>
          
          <p style="margin-top: 30px;">If you have any questions, please contact us:</p>
          <ul style="line-height: 1.6;">
            <li>Email: partners@bazaari.com</li>
            <li>Phone: +66 2-xxx-xxxx</li>
            <li>Line: @bazaari-partners</li>
          </ul>
          
          <p>Thank you for choosing Bazaari!</p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>This is an automated message. Please do not reply to this email.</p>
            <p>© 2024 Bazaari. All rights reserved.</p>
          </div>
        </div>
      </div>
    `,
  },
  
  partnerApproval: {
    subject: 'Partner Application Approved - Welcome to Bazaari!',
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #10b981; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">🎉 Welcome to Bazaari!</h1>
          <p style="margin: 5px 0 0 0;">Your Partner Application has been Approved</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Congratulations, ${data.ownerName}!</h2>
          
          <p>We're excited to welcome <strong>${data.businessName}</strong> to the Bazaari partner network!</p>
          
          <div style="background: #d1fae5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h3 style="color: #065f46; margin-top: 0;">Your Partner Credentials:</h3>
            <ul style="line-height: 1.6;">
              <li><strong>Partner ID:</strong> ${data.partnerId}</li>
              <li><strong>Login Email:</strong> ${data.email}</li>
              <li><strong>Temporary Password:</strong> ${data.tempPassword}</li>
              <li><strong>Partner Dashboard:</strong> <a href="${process.env.NEXT_PUBLIC_API_URL}/partner/dashboard">Login Here</a></li>
            </ul>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin-top: 0;">Getting Started:</h3>
            <ol style="line-height: 1.6;">
              <li>Login to your partner dashboard using the credentials above</li>
              <li>Change your temporary password</li>
              <li>Complete your business profile</li>
              <li>Add your services and pricing</li>
              <li>Upload photos and descriptions</li>
              <li>Set your availability</li>
            </ol>
          </div>
          
          <p><strong>Welcome aboard and let's grow together! 🚀</strong></p>
        </div>
      </div>
    `,
  },

  // Customer-related emails
  customerBookingConfirmation: {
    subject: 'Booking Confirmation - Bazaari',
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Bazaari</h1>
          <p style="margin: 5px 0 0 0;">Booking Confirmation</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Your booking is confirmed!</h2>
          
          <p>Dear ${data.customerName},</p>
          
          <p>Thank you for booking with <strong>${data.businessName}</strong> through Bazaari.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin-top: 0;">Booking Details:</h3>
            <ul style="line-height: 1.6;">
              <li><strong>Booking ID:</strong> ${data.bookingId}</li>
              <li><strong>Service:</strong> ${data.serviceName}</li>
              <li><strong>Provider:</strong> ${data.businessName}</li>
              <li><strong>Date & Time:</strong> ${data.bookingDateTime}</li>
              <li><strong>Total Amount:</strong> ฿${data.totalAmount}</li>
            </ul>
          </div>
          
          <p>Thank you for choosing Bazaari!</p>
        </div>
      </div>
    `,
  },

  customerWelcome: {
    subject: 'Welcome to Bazaari - Your Super Service Platform!',
    html: (data: any) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">🎉 Welcome to Bazaari!</h1>
          <p style="margin: 5px 0 0 0;">Your Super Service Platform in Thailand</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937;">Hello ${data.name}!</h2>
          
          <p>Welcome to Bazaari - Thailand's premier platform for Indian services and more!</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin-top: 0;">What you can do on Bazaari:</h3>
            <ul style="line-height: 1.6;">
              <li>🍛 Order delicious Indian food delivery</li>
              <li>🏨 Book hotels and accommodations</li>
              <li>💆 Schedule spa and massage services</li>
              <li>🏥 Access healthcare services</li>
              <li>🏠 Find real estate opportunities</li>
              <li>📋 Get visa and documentation help</li>
              <li>🛍️ Shop from Indian stores</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_API_URL}" 
               style="background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              Start Exploring
            </a>
          </div>
          
          <p>Thank}
};
  sern fal);
    retued:', errorn failerificatio service vr('Emailerrosole.   conrror) {
  catch (eue;
  }n tretury');
    read is ril servicee.log('Emaconsol
      ;
    }
  nfigured')s not coEY iND_API_K('RESEw new Error
      thro{) API_KEYenv.RESEND_process.(!if 
    {ry   tConfig() {
ifyEmail verctionasync fun
export send API keyify Re
}

// Ver};
  }message ror: error. erse,falss: turn { succe    rerror);
d:', eing faileendk email sr('Bul.errole
    consor) {erro } catch (failed };
 ul, ssf sent: succecess: true, { suc
    return} failed`);{faileduccessful, $ sessful}succt: ${k email sene.log(`Bulonsol    cgth;

ed').lenct== 'rejetatus => r.ss.filter(r =lted = resuail    const flength;
').ledfulfil== 's = r.statuilter(r =>esults.f= rul sfesonst succ  c
  (promises);lSettlede.alt Promisaisults = awret  cons

     });;
        }),
a)l(dat htm       html:ct,
 bje     su],
   mail[e     to: .com>',
   azaarieply@bnorzaari < from: 'Ba
       {s.send(resend.emailrn   retu
     {(email) =>map(async recipients. =  promisesonst
    c   ;
 es[template]ailTemplat= emt, html } ubjecconst { s try {
    {
 a: any) es, datplatempeof emailTeyof tyate: kempl, tring[]s: stpientEmail(recidBulkon sennctiync fuort ass)
exps, promotionetterewslfor nk emails (d bul

// Sen };
  }
}rror.messageror: es: false, eresrn { succ
    retud:', error);failending l semairor('Eere.ol{
    cons(error) } catch 
   };ult.data?.id: ressageIds: true, messucces {   return
  .data?.id);sulty:', reessfullsent succog('Email nsole.l

    co
    });ta),l(dahtml: htm
      bject,
      su [to],
      to:ari.com>',zaeply@bazaari <norBa     from: 'd({
 ails.send.emwait resent = aulonst res
    cate];
    s[templemplate = emailT }t, html{ subjec    const  try {
) {
  data: anyTemplates,ail empeoff tyate: keyog, templto: strinendEmail(ion snc functsyxport aResend
eng nction usind email fu
// Se}
};

  iv>
    `,</d     v>
    </di
       </p>.
         in 24 hoursll expirewition link ficahis veri      T">
      : #6b7280;14px; color"font-size: yle=   <p st  
            >
       </div            </a>

      mailfy E        Veri>
      ht: bold;" font-weigck;loinline-b display: px;adius: 6er-r none; bordation:xt-decor 30px; teing: 12pxddite; pa; color: wh: #10b981"background    style=          
  k}"ationLinta.verific="${daef      <a hr">
       30px 0;argin: mnter;xt-align: ceyle="te st       <div 
       /p>
     tup.< account sezaariBar te you to comple addressemailfy your e veriPleas <p>   
       
         name},</p>ata.p>Hello ${d     < 
             ress</h2>
 l Addour Emai Y">Verifyr: #1f2937;yle="colosth2 
          <#f9fafb;">ackground: ng: 30px; be="paddidiv styl <  
          
   /div>        <p>
ification</l Ver0;">Emai0 0 px in: 5e="marg   <p styl
       ri</h1>azaa">Bargin: 0; style="m         <h1">
 ter; centext-align:: 20px; inghite; padd wb; color:ound: #2563ele="backgr<div sty      
  o;"> 0 autmargin:0px; h: 60if; max-widtsans-serily: Arial, "font-fame=   <div styl=> `
   any)  (data: 
    html:Bazaari',l - Your Emaiify ersubject: 'V
    ion: {ificaterailV},

  em `,
  
   v></di      </div>

        div></        </p>
   
           il.re this emaase igno, pleeset this r't requestyou didnf   I            . 
n 1 hourpire iexl is link wil/strong> Thy Notice:<g>Securit     <stron    
     92400e;"> 0; color: #="margin:lesty <p         >
   f59e0b;" #solidt: 4px order-lef bius: 8px;er-rad 15px; bordc7; padding:ef3kground: #fstyle="bacv  <di           
        
     </div></a>
                sword
 Reset Pas             bold;">
 t: nt-weighfolock; nline-b; display: iradius: 6pxorder-n: none; bt-decoratiotex12px 30px; dding:  pahite;or: wcol: #2563eb; ound"backgr=style        
       setLink}" ${data.re <a href="           
0px 0;">argin: 3ter; mt-align: cenle="tex sty   <div              
 
  t.</p>unaari accoaz your Bord fpassworur to reset youest  a reqeivede rec       <p>W     
   /p>
     me},< ${data.naHello  <p>  
                /h2>
d<ur Passwort Yoese37;">Rf29"color: #1 style=   <h2
       fafb;">nd: #f9px; backgrouing: 30dd style="pa    <div
    >
         </div       uest</p>
et Req Ressword">Pas 0 0;argin: 5px 0e="myl<p st        
  azaari</h1>: 0;">B"margin style=         <h1
 er;">-align: cent textdding: 20px; paor: white;col#2563eb; d: "backgrountyle=<div s       ">
 uto;margin: 0 a: 600px; max-widthns-serif; : Arial, saamilye="font-fiv styl`
      <d =>  (data: any)tml:i',
    haarst - Bazque Reset Rerd 'Passwo subject:  
 {wordReset: ils
  passication emauthent
  // A},

     `,   </div>
 >
        </div</p>
   y!unitour comm joining ou for y