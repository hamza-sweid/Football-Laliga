import EventService from "@/services/EventService.js";

export const namespaced = true;

export const state = {
  eventsTotal: 0,
  perPage: 3,
  standing: [],
  scorers: [],
  videos: [],
  news: [],
  league: "liga",
  isLoading: true
};

export const mutations = {
  SET_STANDING(state, standing) {
    state.standing = standing;
  },
  SET_SCORERS(state, scorers) {
    state.scorers = scorers;
  },
  SET_VIDEOS(state, videos) {
    state.videos = videos;
  },
  SET_NEWS(state, news) {
    state.news = news;
  }
};

export const actions = {
  getStanding({ commit, dispatch }) {
    return EventService.getStanding()
      .then((response) => {
        commit("SET_STANDING", response.data);
      })
      .catch(() => {
        const notification = {
          type: "error",
          message:
            "There was a problem fetching the events, please refresh the page"
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
      });
  },
  getScorers({ commit, dispatch }) {
    return EventService.getLeaders()
      .then((response) => {
        commit("SET_SCORERS", response.data);
        // state.isLoading = false;
      })
      .catch(() => {
        const notification = {
          type: "error",
          message:
            "There was a problem fetching the events, please refresh the page"
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
      });
  },
  getVideos({ dispatch, commit }) {
    return EventService.getVideos()
      .then((response) => {
        let videosFilter = response.data.filter(
          (e) => e.competition.name == "SPAIN: La Liga"
        );
        commit("SET_VIDEOS", videosFilter);
        state.isLoading = false;
      })
      .catch(() => {
        const notification = {
          type: "error",
          message:
            "There was a problem fetching the events, please refresh the page"
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
      });
  },
  getNews({ commit, dispatch }) {
    return EventService.getNews()
      .then((res) => commit("SET_NEWS", res.data))
      .catch(() => {
        const notification = {
          type: "error",
          message:
            "There was a problem fetching the events, please refresh the page"
        };
        dispatch("notification/add", notification, { root: true }); //go to $store => notifications => run 'add' action
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
