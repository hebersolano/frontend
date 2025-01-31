# Torrecafhe

## Planning:

## Tasks

- [x] Change serif font
- [x] Empty cart message
- [ ] Locale (en|es)
  - [x] ES and ES translation
- [x] Error handling
  - [x] User error interface (toast notifications)
  - [x] Error [NextJS](https://nextjs.org/docs/app/api-reference/file-conventions/error) handling
  - [x] No found page
- [ ] Stripe custom payment flow [link](https://docs.stripe.com/payments/quickstart?client=react)
  - [x] Server: Create a [ =Payment intent](https://docs.stripe.com/api/payment_intents) endpoint
  - [x] Configure stripe elements provider, and Address and Payment element
  - [x] Handle success and error payment
  - [x] Style form to meet theme
  - [x] Configure success page: verify client and payment, clear cookies and cart
- [ ] Authentication and authorization
  - [x] Auth page
  - [x] Login and Sign up form
  - [ ] Email verification
    - [ ] Server: [Resent](https://market.strapi.io/providers/strapi-provider-email-resend) email provider
  - [x] Zustand [Auth Store](https://doichevkostia.dev/blog/authentication-store-with-zustand/)
  - [x] Server: Allow user update his [data](https://youtu.be/2ZwiiY6tnmw)
  - [ ] Refresh token [strapi](https://strapi.io/blog/how-to-create-a-refresh-token-feature-in-your-strapi-application)
- [ ] Profile page
  - [x] user can update his data
  - [x] upload a profile image
  - [ ] Change password
  - [ ] user can change email (need to confirm)
- [ ] Orders page
- [ ] Security checklist

### Pages

- Inicio
- Tienda
  - Categorias: Grano verder, Café tostado en grano, Café tostado molido
- Sobre nosotros
- Contacto

### Requirements and features:

-

### Features Categories:

-

### Technology decisions:

- Routing: NextJS app router
- Styling: tailwind
- UI state management: remote state and SWR
- Form management: react hook form
- Database: postgresql
- Storage: uploadthing.com

## New features to implement
