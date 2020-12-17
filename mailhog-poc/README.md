# Description

Here is a sample how easily you can use
mailhog/mailhog docker container to test
email notifications without a risk to spam anyone

## Prerequisite

* nodejs installed
* docker installed

## Usage

* to install dependencies run  
  > `yarn`
* to run docker mailhog container (it will use 8025 port for web client and 1025 podt smtp) run  
  > `yarn mailhog-start`
* to send an email via mailhog and check it in web client run  
  > `yarn test`
* to fetch messages in JSON format run  
  > `yarn test-api`
* to stop mailhog docker container run  
  > `yarn mailhog-stop`

## Notes

You can use this sample to run test email to real email account. Fot that you will need to provide configuration in *.env* file
* `EMAIL_HOST` for host (**smtp.gmail.com** for using gmail account)
* `EMAIL_PORT` for port (**587** for gmail)
* `EMAIL_USER` for email from which you want to send a message
* `EMAIL_PASSWORD` for password from that email account

