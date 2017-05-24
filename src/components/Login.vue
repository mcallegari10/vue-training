<template lang="pug">
  .login-container
    h2.title
      | Login
    form.login-data(@submit.prevent='login' novalidate)
      span.error(v-if='showError')
        | El usuario y/o contraseña son incorrectos
      label.data-label(for='email')
        | Email
      input.data-input(type='email' v-model='email' v-validate='"required|email"' name='email')
      .errors(v-if='errors.has("email")')
        span.error(v-if='errors.firstRule("email") === "required"')
          | El campo es requerido
      label.data-label(for='password')
        | Contraseña
      input.data-input(type='password' v-model='password' v-validate='"required|between:{min: 2, max: 52}"' name='password')
      .errors(v-if='errors.has("password")')
        span.error(v-if='errors.firstRule("password") === "required"')
          | El campo es requerido
        span.error(v-if='errors.firstRule("password") === "between"')
          | El campo debe ser de una longitud minima de 2 caracteres
      button.login-button(type='submit')
        | Ingresar
</template>

<script>
import sessionService from '../services/sessionService'

const login = {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      showError: false
    }
  },
  computed: {
    validForm() {
      return this.fields.email.valid && this.fields.password.valid
    }
  },
  methods: {
    login() {
      if (this.validForm) {
        sessionService.login(this.email, this.password).then((response) => {
          console.log(response)
          this.showError = false
        }).catch(() => {
          this.showError = true
        })
      }
    }
  }
}

export default login
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px auto;

  .title {
    font-weight: bold;
  }

  .login-data {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 540px;

    .data-input {
      background-color: $grey-1;
      border: none;
      height: 40px;
      padding: 0 12px;
      margin: 10px 0 20px;
    }

    .data-label {
      font-size: 12px;
      color: $grey-4;
      line-height: 19px;
    }

    .login-button {
      background-color: $green-1;
      border: none;
      color: $white;
      display: flex;
      height: 40px;
      justify-content: center;
      width: 175px;
    }

    .error {
      color: $red;
      font-size: 14px;
      font-weight: 100;
      align-self: center;
    }
  }
}
</style>
