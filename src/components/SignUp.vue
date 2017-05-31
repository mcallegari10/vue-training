<template lang="pug">
  .signup
    h2.title
      | Registrarse
    form.signup-data(@submit.prevent='signUp' novalidate)
      .form-group
        label.data-label(for='name')
          | Nombre
        input.data-input(type='text' v-model='user.first_name' v-validate='"required|alpha"' name='name')
        .errors(v-if='errors.has("name")')
          span.error(v-if='errors.firstRule("name") === "required"')
            | El campo es requerido
          span.error(v-if='errors.firstRule("name") === "alpha"')
            | El campo sólo acepta letras
      .form-group
        label.data-label(for='lastName')
          | Apellido
        input.data-input(type='text' v-model='user.last_name' v-validate='"required|alpha"' name='lastName')
        .errors(v-if='errors.has("lastName")')
          span.error(v-if='errors.firstRule("name") === "required"')
            | El campo es requerido
          span.error(v-if='errors.firstRule("name") === "alpha"')
            | El campo sólo acepta letras
      .form-group
        label.data-label(for='email')
          | Email
        input.data-input(type='email' v-model='user.email' v-validate='"required|email"' name='email')
        .errors(v-if='errors.has("email")')
          span.error(v-if='errors.firstRule("email") === "required"')
            | El campo es requerido
          span.error(v-if='errors.firstRule("email") === "email"')
            | Debe ingresar un email valido
      .form-group
        label.data-label(for='password')
          | Contraseña
        input.data-input(type='password' v-model='user.password' v-validate='"required|min: 2"' maxlength='52' name='password')
        .errors(v-if='errors.has("password")')
          span.error(v-if='errors.firstRule("password") === "required"')
            | El campo es requerido
          span.error(v-if='errors.firstRule("password") === "min"')
            | El campo debe ser de una longitud minima de 2 caracteres
      .form-group
        label.data-label(for='confirm_password')
          | Confirmar contraseña
        input.data-input(type='password' v-model='user.confirm_password' v-validate='"required|min: 2|confirmed:password"' maxlength='52' name='confirm_password')
        .errors(v-if='errors.has("confirm_password")')
          span.error(v-if='errors.firstRule("confirm_password") === "required"')
            | El campo es requerido
          span.error(v-if='errors.firstRule("confirm_password") === "min"')
            | El campo debe ser de una longitud minima de 2 caracteres
          span.error(v-if='errors.firstRule("confirm_password") === "confirmed"')
            | Las contraseñas deben ser iguales
      .buttons-container
        router-link.cancel(:to='{name: "login"}')
          | Cancelar
        button.register-button(type='submit')
          | Registrarse
</template>

<script>
import sessionService from '../services/sessionService'

const signUp = {
  name: 'signUp',
  data() {
    return {
      user: {
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: '',
        locale: 'en'
      }
    }
  },
  methods: {
    signUp() {
      sessionService.signUp(this.user).then((response) => {
        console.log(response)
        this.$router.push({ name: 'login' })
      })
    }
  }
}

export default signUp
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px auto;

  .title {
    font-weight: bold;
  }

  .signup-data {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 540px;

    .form-group {
      .data-input {
        background-color: $grey-1;
        border: none;
        height: 40px;
        padding: 0 12px;
        margin: 10px 0 20px;
        width: 100%;
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
    }

    .buttons-container {
        display: flex;

      .register-button {
        background-color: $blue-1;
        border: none;
        color: $white;
        display: flex;
        height: 40px;
        justify-content: center;
        margin-right: 20px;
        width: 175px;
      }

      .cancel {
        background-color: $grey-5;
        border: none;
        color: $white;
        display: flex;
        height: 40px;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        text-decoration: none;
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
