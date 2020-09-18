import EventService from "@/services/EventService.js";

export const namespaced = true;

export const state = {
  events: [],
  event: {},
  eventsTotal: 0,
  perPage: 3
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  }
};

export const actions = {
  createEvent({ commit /*only gives us access to local*/, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit("ADD_EVENT", event);
        const notification = {
          type: "success",
          message: "Your event has been created"
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message: "There was a problem fetching the events" + error.message
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
        throw error;
      });
  },
  fetchEvents({ commit, dispatch, state }, { page }) {
    return EventService.getEvents(state.perPage, page)
      .then((response) => {
        commit("SET_EVENTS", response.data);
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message: "There was a problem fetching the events" + error.message
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
      });
  },
  fetchEvent({ commit }, id) {
    // var event = getters.getEventById(id);

    // if (event) {
    //   commit("SET_EVENT", event);
    // } else {
    return EventService.getEvent(id) // we put 'return' so 'then' in 'router.js' can works
      .then((response) => {
        commit("SET_EVENT", response.data, event);
        return event, response.data;
      });
  }
};

export const getters = {
  getEventById: (state) => (id) => {
    return state.event.find((event) => event.id === id);
  },
  x: (state) => {
    return state.events.length;
  }
};
