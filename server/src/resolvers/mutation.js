module.exports = {
  newArticle: async (parent, args, { models }) => {
    return await models.Article.create({
      lp: "1",
      number: "146",
      date: "2022",
      section: "Listy",
      title: args.title,
      authors: "Adam Scott",
      notes: "Tyle",
    });
  },
};
