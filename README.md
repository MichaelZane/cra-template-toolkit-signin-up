# cra-template-toolkit-signin-up
A react template that includes redux toolkit with auth0.

# How To Install

- yarn
- yarn create react-app <app-name> --template toolkit-signin-up

- npm
- npm init react-app <app-name> --template toolkit-signin-up

- npx
- npx create-react-app <app-name> --template toolkit-signin-up

# Using Auth0 

- https://auth0.com/  
- create you application and get your Domain and ClientID

- create a .env file and add the Domain and ClientId to the corresponding variable.

REACT_APP_AUTH0_DOMAIN="Put Domain Here"</br>
REACT_APP_AUTH0_CLIENT_ID="Put Client Id here"

# What gets installed in addition to the regular Create React App template
- Just like regular create-react-app but so much more. This template includes:

  "@auth0/auth0-react", </br>
  "@reduxjs/toolkit",</br>
  "bootstrap",</br>
  "react-bootstrap",</br>
  "react-redux",</br>
  "react-router-dom"</br>