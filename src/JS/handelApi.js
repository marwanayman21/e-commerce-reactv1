const source = "https://dummyjson.com/";

export const handelApi = {
  getallData: async (
    endpoint,
    success,
    failed,
    startLoading,
    stopLoading,
    params = "",
  ) => {
    if (startLoading && typeof startLoading === "function") startLoading();

    try {      
      console.log(`${source}${endpoint}${params}`);
      
      const res = await fetch(`${source}${endpoint}${params}`);
      if (!res.ok) {
        throw new Error("Something went wrong with the network request.");
      }
      let data = await res.json();
      data = (data.products?data.products:data);

      if (success && typeof success === "function") success(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      // if (failed && typeof failed === "function") failed(error);
    } finally {
      if (stopLoading && typeof stopLoading === "function") stopLoading();
    }
  },
};

