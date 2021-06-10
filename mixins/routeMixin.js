export default {
  async created () {
    if (process.client) {
      await this.$fetchBucket()
      await this.$loadGeoData()
      await this.$selectUserAge()
      await this.$selectUserType()
    }
  }
}
