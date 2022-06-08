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
  deleteArticle: async (parent, { id }, { models }) => {
    try {
      await models.Article.findOneAndRemove({ _id: id });
      return true;
    } catch (err) {
      return false;
    }
  },
  updateArticle: async (parent, { notes, id }, { models }) => {
    return await models.Article.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          notes,
        },
      },
      {
        new: true,
      }
    );
  },
};
