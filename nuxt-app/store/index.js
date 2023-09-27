import { defineStore } from "pinia";
import axios from "axios";

export const useArticleStore = defineStore("article", {
  state: () => ({
    article: null,
    remainingToken: null,
    token: null,
  }),
  actions: {
    async getArticleById(id) {
      try {
        if (this.remainingToken > 1) {
          const response = await axios.get(
            `https://trial.peakbit.tech/api/articles/get/${id}`,
            {
              headers: {
                "X-TOKEN": this.token,
              },
            }
          );
          console.log(this.remainingToken, "remainingtoken");

          this.article = response.data;

          this.remainingToken--;
          return response.data;
        }
      } catch (error) {
        if (error.response.status == 400 || error.response.status == 404) {
          throw createError({
            statusCode: 404,
            statusMessage: "Hiba történt a cikk lekérésekor",
            fatal: true,
          });
        }
        if (error.response.status == 401) {
          await this.updateToken();
        }

        throw error;
      }
    },
    async updateToken() {
      try {
        const dataToSend = {
          token: this.token,
        };
        const response = await axios.post("/api/renewToken/token", {
          body: `${this.token}`,
        });

        const data = response.data;

        this.remainingToken = 5;
        console.log(data, "update token");

        return data;
      } catch (error) {
        console.error("Hiba történt a token frissítésekor:", error);
        throw error;
      }
    },
    async getToken() {
      try {
        const response = await axios.get("/api/getToken/token");

        this.token = response.data.token;
        this.remainingToken = response.data.availableUsages;
        await this.updateToken();

        return response;
      } catch (error) {
        console.error("Hiba történt a token lekérésekor:", error);
        throw error;
      }
    },
  },
});
