<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        マイアドレス帳
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav />
  </v-card>
</template>

<script>
import SideNav from "./components/SideNav";

export default {
  name: "App",

  components: {
    SideNav,
  },

  data: () => ({
    //
  }),
};
</script>
