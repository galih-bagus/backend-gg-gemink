module.exports = {
  index: async (req, res) => {
    try {
      res.render("./pages/category/index", { title: "Category" });
    } catch (err) {
      console.log(err);
    }
  },
};
