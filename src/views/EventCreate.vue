<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        class="field"
        :options="categories"
        v-model="event.category"
        label="select a category"
        :class="{ error: $v.event.category.$error }"
        @blur="$v.event.category.$touch()"
      />
      <!-- using v-model here allows us to listen for the 'input' event that was sent up from BaseSelect’s updateValue method. And when that event happens, we’ll set our EventCreate’s event.category data equal to the value that was sent up. In this case, the value is whichever option was selected.

      Additionally, v-model allows us to pass in a value as a prop, which is especially useful if our BaseSelect needs an initial, existing value fed into it. -->
      <template v-if="$v.event.category.$error">
        <!-- displays when error is true -->
        <p v-if="!$v.event.category.required" class="errorMessage">
          Category is required.
        </p>
      </template>

      <h3>Name & describe your event</h3>
      <BaseInput
        class="field"
        label="title"
        v-model="event.title"
        type="text"
        placeholder="add title"
        :class="{ error: $v.event.title.$error }"
        @blur="$v.event.title.$touch()"
        v-model.trim="$v.event.title.$model"
      /><!--:value="event.title" translates to:  @input="(value) => { event.title = value }"  -->
      <template v-if="$v.event.title.$error">
        <p v-if="!$v.event.title.required" class="errorMessage">
          Title is required
        </p>
      </template>

      <BaseInput
        class="field"
        label="description"
        v-model="event.description"
        type="text"
        placeholder="add description"
        :class="{ error: $v.event.description.$error }"
        @blur="$v.event.description.$touch()"
      />
      <template v-if="$v.event.description.$error">
        <!-- displays when error is true -->
        <p v-if="!$v.event.description.required" class="errorMessage">
          Description is required.
        </p>
      </template>

      <h3>Where is your event?</h3>
      <BaseInput
        class="field"
        label="location"
        v-model="event.location"
        type="text"
        placeholder="add location"
        :class="{ error: $v.event.location.$error }"
        @blur="$v.event.location.$touch()"
      />
      <template v-if="$v.event.location.$error">
        <!-- displays when error is true -->
        <p v-if="!$v.event.location.required" class="errorMessage">
          Location is required.
        </p>
      </template>

      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker
          placeholder="Select a date"
          v-model="event.date"
          @closed="$v.event.date.$touch()"
          :input-class="{ error: $v.event.date.$error }"
        />
      </div>
      <template v-if="$v.event.date.$error">
        <!-- displays when error is true -->
        <p v-if="!$v.event.date.required" class="errorMessage">
          Date is required.
        </p>
      </template>

      <BaseSelect
        class="field"
        :options="times"
        v-model="event.time"
        label="select a time"
        :class="{ error: $v.event.time.$error }"
        @blur="$v.event.time.$touch()"
      />
      <template v-if="$v.event.time.$error">
        <!-- displays when error is true -->
        <p v-if="!$v.event.time.required" class="errorMessage">
          Time is required.
        </p>
      </template>

      <BaseButton
        type="submit"
        :disabled="$v.$anyError"
        buttonClass="-fill-gradient"
        >Submit</BaseButton
      >
      <p v-if="$v.$anyError" class="errorMessage">
        Please fill out the required field(s).
      </p>
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import NProgress from "nprogress";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  components: {
    Datepicker
  },
  data() {
    const times = [];
    for (let i = 0; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createNewEvent() // havn't added the object below here cause we want clear the data after creating new Event
    };
  },
  validations: {
    event: {
      category: { required },
      title: { required, minLength: minLength(10), maxLength: maxLength(20) },
      description: { required },
      location: { required },
      date: { required },
      time: { required }
    }
  },
  methods: {
    createEvent() {
      this.$v.$touch(); // "touching" all fields to turn them "dirty"
      if (!this.$v.$invalid) {
        // submit form only when all fields are valid
        NProgress.start();
        this.$store
          .dispatch("event/createEvent", this.event)
          .then(() => {
            this.$router.push({
              name: "event-show",
              params: { id: this.event.id }
            });
            this.event = this.createNewEvent();
          })
          .catch(() => NProgress.done());
      }
    },
    createNewEvent() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 1000000);

      return {
        id: id,
        user: user,
        category: "",
        organizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: []
      };
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: square;
}
.field {
  margin-bottom: 24px;
}
.errorMessage {
  color: red;
}
.error {
  border: 1px solid red;
}
</style>
