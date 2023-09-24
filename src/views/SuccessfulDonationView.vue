<script>
import ContentHeadline from '@/components/content/Headline.vue'
import OfficeConfig from '@/assets/officeConfig.json'

export default {
  name: 'SuccessfulDonationView',
  data() {
    return {
      headline: 'Spenden',
      officeConfig: OfficeConfig,
      loadAddressFields: false,
      isSubmitted: false
    }
  },
  props: ['formSubmitData'],
  components: {
    ContentHeadline
  },
  methods: {
    /**
     * reloade page
     * 
     * @return {void}
     */
    reloadPage() {
      this.$router.go()
    },    
    /**
     * format date to local format
     * 
     * @param {date} givenDate 
     * @return {string}
     */
    formatDateToLocalFormat(givenDate) {
      const formatDate = new Date(givenDate)
      return formatDate.toLocaleDateString()
    }
  }
}
</script>

<template>
  <div>
    <ContentHeadline
      :value="'Vielen Dank ' + formSubmitData.firstName.value + ' für deine Spende'"
    />
    <br />
    <p>
      Gespendet am: {{ this.formatDateToLocalFormat(formSubmitData.donationDate.value) }} um
      {{ formSubmitData.donationTime.value }}
    </p>
    <p>Vorname: {{ formSubmitData.firstName.value }}</p>
    <p>Nachname: {{ formSubmitData.lastName.value }}</p>
    <p>Übergabe an der Geschäftsstelle: [{{ formSubmitData.location.checked ? 'Ja' : 'Nein' }}]</p>
    <p v-if="formSubmitData.location.checked">
      Adresse für Übergabe:
      {{
        officeConfig.zip +
        ' ' +
        officeConfig.city +
        ', ' +
        officeConfig.street +
        ' ' +
        officeConfig.building_no
      }}
    </p>
    <p>Abolung: [{{ formSubmitData.collection.checked ? 'Ja' : 'Nein' }}]</p>
    <p v-if="formSubmitData.collection.checked">
      Adresse für Abholung:
      {{
        formSubmitData.zip.value +
        ' ' +
        formSubmitData.city.value +
        ', ' +
        formSubmitData.street.value +
        ' ' +
        formSubmitData.buildingNumber.value
      }}
    </p>
    <p>Art der Kleidung: {{ formSubmitData.typeOfDonation.selectedOptions[0].textContent }}</p>
    <p>Krisengebiet: {{ formSubmitData.purposeOfUse.selectedOptions[0].textContent }}</p>
    <p>
      Die Datenschutzbedingungen sowie Nutzungsbedingungen wurden gelesen und ebenso akzeptiert: [{{
        formSubmitData.acceptTermsOfUse.checked ? 'Ja' : 'Nein'
      }}]
    </p>
    <button type="button" @click="reloadPage">weiter</button>
  </div>
</template>
