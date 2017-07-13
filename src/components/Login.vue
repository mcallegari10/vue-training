<template lang="pug">
  .login-container
    h2.title
      | Login
    form.login-data(@submit.prevent='login' novalidate)
      span.error(v-if='showError')
        | El usuario y/o contraseña son incorrectos
      label.data-label(for='email')
        | Email
      input.data-input(type='email' v-model='user.email' v-validate='"required|email"' name='email' @change='changeEmail')
      .errors(v-if='errors.has("email")')
        span.error(v-if='errors.firstRule("email") === "required"')
          | El campo es requerido
        span.error(v-if='errors.firstRule("email") === "email"')
          | Debe ingresar un email valido
      label.data-label(for='password')
        | Contraseña
      input.data-input(type='password' v-model='user.password' v-validate='"required|min: 2"' maxlength='52' name='password' @change='changePassword')
      .errors(v-if='errors.has("password")')
        span.error(v-if='errors.firstRule("password") === "required"')
          | El campo es requerido
        span.error(v-if='errors.firstRule("password") === "min"')
          | El campo debe ser de una longitud minima de 2 caracteres
      .buttons-container
        button.login-button(type='submit')
          | Ingresar
        router-link.register(:to='{name: "signUp"}')
          | Registrarse
</template>

<script>
import { mapGetters } from 'vuex'

const login = {
  name: 'login',
  computed: {
    ...mapGetters({
      user: 'user/loginData',
      showError: 'user/loginError'
    })
  },
  methods: {
    changeEmail(event) {
      this.$store.dispatch('user/changeLoginEmail', event.target.value)
    },
    changePassword(event) {
      this.$store.dispatch('user/changeLoginPassword', event.target.value)
    },
    login() {
      this.$validator.validateAll().then(() => {
        this.$store.dispatch('user/login').then(() => {
          if (!this.showError) {
            this.$store.dispatch('user/loggedIn')
            this.$router.push({ name: 'dashboard' })
          }
        })
      })
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
  margin: 150px auto;

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

    .error {
      color: $red;
      font-size: 14px;
      font-weight: 100;
      align-self: center;
    }

    .buttons-container {
        display: flex;

      .login-button {
        background-color: $green-1;
        border: none;
        color: $white;
        display: flex;
        height: 40px;
        justify-content: center;
        margin-right: 20px;
        width: 175px;
      }

      .register {
        text-decoration: none;
        align-self: center;
        border: none;
        background-color: $white;
      }
    }
  }
}
</style>
