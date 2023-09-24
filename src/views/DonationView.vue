<script>
import ContentHeadline from '@/components/content/Headline.vue'
import ContentTypeOfDonationList from '@/components/content/TypeOfDonationList.vue'
import ContentPurposeOfUseList from '@/components/content/PurposeOfUseList.vue'
import OfficeConfig from '@/assets/officeConfig.json'
import SuccessfulDonationView from '@/views/SuccessfulDonationView.vue'

export default {
  name: 'DonationView',
  data() {
    return {
      headline: 'Spenden',
      officeConfig: OfficeConfig,
      loadAddressFields: false,
      disableResetButton: true,
      disableSubmitButton: true,
      isSubmitted: false,
      formSubmitData: null
    }
  },
  components: {
    SuccessfulDonationView,
    ContentHeadline,
    ContentTypeOfDonationList,
    ContentPurposeOfUseList
  },
  computed: {
    todayDate() {
      return this.formatDate()
    },
    todayTime() {
      return this.formatTime()
    },
    minZip() {
      return Math.floor(OfficeConfig.zip / 1000) * 1000
    },
    maxZip() {
      return this.minZip + 999
    }
  },
  methods: {
    /**
     * format to date without time
     *
     * @param {date} date
     * @return {string}
     */
    formatDate(date = new Date()) {
      return date.toISOString().substring(0, 10)
    },
    /**
     * format to time without date
     *
     * @param {date} date
     * @return {string}
     */
    formatTime(date = new Date()) {
      return date.toLocaleTimeString().substring(0, 5)
    },
    /**
     * handle on value change
     *
     * @return {void}
     */
    handleValueChange() {
      this.disableResetButton = false
    },
    /**
     * show devlivery address
     *
     * @return {void}
     */
    handleDeliveryMethodClick() {
      this.handleValueChange()
      this.loadAddressFields = document.getElementById('collection').checked
    },
    /**
     * handle accept of data protection and terms of use
     *
     * @return {void}
     */
    handelAcceptDataProtectionAndTermsOfUse() {
      this.handleValueChange()
      this.disableSubmitButton = !document.getElementById('acceptTermsOfUse').checked
    },
    /**
     * reset the form
     *
     * @return {void}
     */
    formReset() {
      this.$router.go()
    },
    /**
     * submit the form
     *
     * @return {void}
     */
    formSubmit(event) {
      this.formSubmitData = event.currentTarget.elements
      this.isSubmitted = true
    },
    updated() {
      this.handleValueChange()
    }
  }
}
</script>

<template>
  <div v-if="!isSubmitted">
    <ContentHeadline :value="headline" />
    <br />
    <form @submit.prevent="formSubmit" @reset="formReset">
      <label for="donationDate">Gespendet am: </label>
      <input
        required
        type="date"
        name="donationDate"
        id="donationDate"
        :defaultValue="todayDate"
        @input="handleValueChange"
      />
      <label for="donationTime"> um </label>
      <input
        required
        type="time"
        name="donationTime"
        id="donationTime"
        :defaultValue="todayTime"
        @input="handleValueChange"
      />
      <br />
      <label for="firstName">Vorname: </label>
      <input
        required
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Vorname"
        @input="handleValueChange"
      /><br />
      <label for="lastName">Nachname: </label>
      <input
        required
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Nachname"
        @input="handleValueChange"
      /><br />
      <br />

      <fieldset>
        <legend>Wähle hier den Ort der Abgabe aus:</legend>
        <input
          required
          type="radio"
          name="deliveryMethod"
          id="location"
          value="location"
          @input="handleDeliveryMethodClick"
        />
        <label for="location">Übergabe an der Geschäftsstelle</label><br />
        <input
          required
          type="radio"
          name="deliveryMethod"
          id="collection"
          value="collection"
          @input="handleDeliveryMethodClick"
        />
        <label for="collection">Abholung</label><br />
        <div v-if="loadAddressFields">
          <input
            required
            type="number"
            name="zip"
            id="zip"
            placeholder="PLZ"
            :min="minZip"
            :max="maxZip"
            @input="handleValueChange"
          />
          <input
            required
            type="text"
            name="city"
            id="city"
            placeholder="Stadt"
            @input="handleValueChange"
          />
          <br />
          <input
            required
            type="text"
            name="street"
            id="street"
            placeholder="Straße"
            @input="handleValueChange"
          />
          <input
            required
            type="text"
            name="buildingNumber"
            id="buildingNumber"
            placeholder="Hausnummer"
            @input="handleValueChange"
          />
          <br />
        </div>
      </fieldset>

      <ContentTypeOfDonationList />
      <br />
      <ContentPurposeOfUseList />
      <br />

      <br />
      <label for="acceptTermsOfUse"
        >Die <a href="/data-protection">Datenschutzbedingungen</a> sowie
        <a href="/terms-of-use">Nutzungsbedingungen</a> wurden gelesen und ebenso akzeptiert.
      </label>
      <input
        required
        type="checkbox"
        name="acceptTermsOfUse"
        id="acceptTermsOfUse"
        @input="handelAcceptDataProtectionAndTermsOfUse"
      />
      <br />
      <input type="reset" id="donationReset" value="Zurücksetzen" :disabled="disableResetButton" />
      <input type="submit" id="donationSubmit" value="Spenden" :disabled="disableSubmitButton" />
    </form>
  </div>

  <SuccessfulDonationView :formSubmitData="formSubmitData" v-if="isSubmitted" />
</template>
