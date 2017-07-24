<template lang="pug">
  .navbar
    router-link(:to='{ name: "dashboard" }')
      img.logo(src='../assets/wbooks_logo.svg')
    .user-actions
      img.notifications(src='../assets/notifications.svg')
      img.add-book(src='../assets/add_book.svg')
      .profile(@click='toggleUserOptions')
        img.user-avatar(src='../assets/vuejs_logo.png' alt='profile')
        dropdown(:options='userOptions' :toggle='showUserDropdown' @selectOption='selectOption')
</template>

<script>
import dropdown from './shared/Dropdown'
import auth from '../auth'

const userOptions = [
  {
    label: 'Perfil',
    callback() {
      // todo
    }
  },
  {
    label: 'Cerrar sesión',
    callback(vm) {
      auth.logout()
      vm.$store.dispatch('loggedOut')
      vm.$router.push({ name: 'login' })
    }
  }
]

const navbar = {
  name: 'navbar',
  components: { dropdown },
  data() {
    return {
      userOptions,
      showUserDropdown: false
    }
  },
  methods: {
    selectOption(option) {
      option.callback(this)
    },
    toggleUserOptions() {
      this.showUserDropdown = !this.showUserDropdown
    }
  }
}

export default navbar
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.navbar {
  box-shadow: 0px 5px 10px $grey-2;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;

  .logo {
    width: 170px;
    height: 40px;
  }

  .user-actions {
    display: flex;
    align-items: center;

    .notifications {
      margin-right: 30px;
    }

    .add-book {
      margin-right: 30px;
    }

    .profile {
      position: relative;
      border: 1px solid $grey-2;
      border-radius: 100%;
      width: 35px;
      display: flex;
      justify-content: center;
    }
  }
}

.user-avatar {
  width: 29px;
  height: 32px;
}
</style>
