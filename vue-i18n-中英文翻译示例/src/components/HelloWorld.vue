<template>
  <div id="app">
    <div style="margin: 20px;">
      <h1>{{$t("message.title")}}</h1>
      <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
      <ul>
        <li v-for="brand in brands" :key="brand">{{brand}}</li>
      </ul>
    </div>
    <button type="button" class="btn btn-success" @click="changeLocale">中文/EN</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      brands: [this.$t('brands.nike'), this.$t('brands.adi'), this.$t('brands.nb'), this.$t('brands.ln')]
    }
  },
  methods: {
    // js方法
    changeLocale () {
      this.$confirm(this.$t('layer.toggle'), this.$t('layer.tips'), {
        confirmButtonText: this.$t('button.ok'),
        cancelButtonText: this.$t('button.cancel'),
        type: 'warning'
      }).then(() => {
        let locale = this.$i18n.locale
        locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
        this.brands = [this.$t('brands.nike'), this.$t('brands.adi'), this.$t('brands.nb'), this.$t('brands.ln')]
      }).catch(() => {
        this.$message({
          type: 'info'
        })
      })
    }
  }
}
</script>
