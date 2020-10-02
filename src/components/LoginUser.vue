<template>
  <div
    class="modal fade"
    id="exampleModa3"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModa3"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-header text-center">
          <img src="@/assets/images/laliga/x.png" style="width:30%" alt="" />
          <h2>LaLiga</h2>
          <h5>Enter our</h5>
          <h3>FAN ZONE</h3>
        </div>
        <div class="modal-body">
          <div class="flex-wrap">
            <fieldset>
              <form @submit.prevent="login">
                <input type="radio" name="rg" id="sign-in" checked />
                <input type="radio" name="rg" id="sign-up" />

                <label for="sign-in">Login</label>
                <label for="sign-up">Register</label>

                <input
                  class="sign-up sign-in"
                  type="email"
                  name="email"
                  placeholder="Email"
                  v-model="name"
                />
                <input
                  class="sign-up sign-in"
                  type="password"
                  name="password"
                  placeholder="Password"
                  v-model="password"
                />

                <button type="submit" name="button">Submit</button>
              </form>
            </fieldset>
          </div>
        </div>
        <p class="text-center text-muted">
          By Registering, you can access to all our features.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    login() {
      return console.log(this.name, this.password);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-content {
  background-color: #071625;
  color: #fff;
  top: -20px;
}
.close {
  width: 100%;
  padding: 5px 20px;
  text-align: right;
}
.close:hover {
  background-color: transparent;
}
.close span {
  font-size: 35px;
  color: #fff;
}
.modal-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #57595a;
}
// colors
$color-accent: #7d7d7d;
$color-input: #fff;

//    fix position radio input off-canvas
input[type="radio"] {
  position: fixed;
  left: -100px;
}

//    style input fields (note hidden by default)
input:not([type="radio"]) {
  appearance: none;
  background-color: $color-input;
  display: block;
  transition: 0.3s ease;
  border-radius: 2em;
  border: none;
  letter-spacing: 2px;
  max-height: 0;
  margin: 0;
  padding: 0 10px;
  overflow: hidden;
  width: 250px;
  opacity: 0;
  font-size: 16px;
  text-align: center;
  outline: 0;
}

//    show input based on radio selection
[id="sign-in"]:checked ~ input.sign-in,
[id="sign-up"]:checked ~ input.sign-up {
  max-height: 40px;
  padding: 10px;
  margin: 15px 0;
  opacity: 1;
}

//    submit button
button {
  width: 250px;
  height: 40px;
  border-radius: 2rem;
  background-color: #fff;
  font-size: 0;
  letter-spacing: 2px;
  border: navajowhite;
  font-weight: bold;
  transition: 0.3s ease;
  &:before {
    font-size: 16px;
  }
  &:hover {
    background-color: #254150;
    color: #f8f8f8;
  }
  &:focus {
    outline: none;
  }
}

//    show botton text based on radio selection
[id="sign-in"]:checked ~ button:before {
  content: "Login";
}
[id="sign-up"]:checked ~ button:before {
  content: "Register";
}

//
label {
  position: relative;
  display: inline-block;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  color: $color-accent;
  transition: 300ms ease;
  width: calc(100% / 3 - 4px);

  //    pointer arrow
  &:after {
    content: "";
    border: 10px solid transparent;
    position: absolute;
    bottom: -23px;
    left: calc(50% - 10px);
    transition: inherit;
  }
}

//     set active label marker
[id="sign-in"]:checked ~ [for="sign-in"],
[id="sign-up"]:checked ~ [for="sign-up"],
[id="reset"]:checked ~ [for="reset"] {
  color: $color-input;
  &:after {
    border-bottom-color: $color-input;
  }
}

//    flex does not work well on fiedset
//    why we use a styling wrapper
.flex-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 250px;
  text-align: center;
}
</style>
