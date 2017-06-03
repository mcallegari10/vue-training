<template lang="pug">
  .navbar
    img.logo(src='../assets/wbooks_logo.svg')
    .user-actions
      img.notifications(src='../assets/notifications.svg')
      img.add-book(src='../assets/add_book.svg')
      .profile(@click='toggleUserOptions')
        img.user-avatar(src='../assets/vuejs_logo.png' alt='profile')
        dropdown(:options='userOptions'  :toggle='showUserDropdown' @selectOption='selectOption')
</template>

<script>
import dropdown from './shared/Dropdown'
import auth from '../auth'

const userOptions = [
  {
    label: 'Perfil',
    callback() {
      console.log('Go to prfile')
    }
  },
  {
    label: 'Cerrar sesión',
    callback(vm) {
      auth.logout()
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
      showUserDropdown: true
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
  border-bottom: 1px solid $black;
  display: flex;
  justify-content: space-between;
}

.user-avatar {
  width: 29px;
  height: 32px;
}
</style>
