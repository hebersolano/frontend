# Torrecafhe

## Planning:

## Tasks

- [x] Change serif font
- [ ] Empty cart message
- [ ] Stripe custom payment flow [link](https://docs.stripe.com/payments/quickstart?client=react)
  - [x] Server: Create a [ =Payment intent](https://docs.stripe.com/api/payment_intents) endpoint
  - [x] Configure stripe elements provider, and Address and Payment element
  - [ ] Handle success and error payment
  - [ ] Style form to meet theme
  - [x] Configure success page: verify client and payment, clear cookies and cart
- [ ] Authentication and authorization
  - [x] Auth page
  - [x] Login and Sign up form
  - [x] Zustand [Auth Store](https://doichevkostia.dev/blog/authentication-store-with-zustand/)
  - [ ] Refresh token [strapi](https://strapi.io/blog/how-to-create-a-refresh-token-feature-in-your-strapi-application)
- [ ] Profile page
  - [ ] user can update his data
  - [ ] upload a profile image
  - [ ] Change password
- [ ] Orders page

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
