export default {
  async created () {
    if (process.client) {
      await this.$loadGeoData()
      await this.$selectUserAge()
      await this.$selectUserType()
      await this.$fetchBucket()
    }
  }
}
