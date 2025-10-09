In this experiment we have created a simple Banking Ui system that shown 
the balance and two buttons: Withdraw money and deposit money.It contains
two files: HTML file for the structure of the web page and CSS file for
designing and adding styles to the web page.

HTML:
We first start by declaring the file type <!DOCTYPE html>. The <html> tag
wraps the entire webpage, and the <head> section includes essential setup
like character encoding, mobile responsiveness, the page title ("Banking 
UI"), and a link to a separate CSS file (style.css) that styles the page
.In the <body> tag we have used <div> for conatiner with class named as
"small-box" and "bigger-box". Within this small box, there is a <div>
class="amount"> displaying the balance (initially set to $0), followed
by two buttons — one with the class "button-deposit" labeled "Deposit",
and the other with the class "button-withdraw" labeled "Withdraw".

CSS:
Fistly, link the CSS file to HTML file for seeing the changes in the final
design page.

1-* { margin: 0; padding: 0; }--using this command we reomve all the spacing.
and * is the selector which makes changes on all the file.
2-We set the background colour of the page to light grey and using FLEXBOX
we are able to align everything to centre.
3-We have set the bg-colour of deposit button as Green and of withdraw 
button as Red.
4- We have used Arial font.
5-Both .button-deposit and .button-withdraw have full width, padding,
white text and used a pointer cursor for good UX.
