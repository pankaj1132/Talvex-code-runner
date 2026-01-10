import axiosInstance from "../lib/axios";

export const aiApi = {
  getHint: async (payload) => {
    const res = await axiosInstance.post("/ai/hint", payload);
    return res.data;
  },
  getReview: async (payload) => {
    const res = await axiosInstance.post("/ai/review", payload);
    return res.data;
  },
  getSummary: async (payload) => {
    const res = await axiosInstance.post("/ai/summary", payload);
    return res.data;
  },
  getFollowup: async (payload) => {
    const res = await axiosInstance.post("/ai/followup", payload);
    return res.data;
  },
};
