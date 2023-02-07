module.exports = {
  newArticle: async (
    parent,
    { lp, number, date, section, title, authors, notes },
    { models }
  ) => {
    return await models.Article.create({
      lp: lp,
      number: number,
      date: date,
      section: section,
      title: title,
      authors: authors,
      notes: notes,
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
  deleteArticles: async (parent, args, { models }) => {
    // return await models.Article.remove({});
    try {
      await models.Article.remove({ id: id });
      return true;
    } catch (err) {
      return false;
    }
  },

  updateArticle: async (
    parent,
    { id, lp, number, date, section, title, authors, notes },
    { models }
  ) => {
    return await models.Article.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          lp,
          number,
          date,
          section,
          title,
          authors,
          notes,
        },
      },
      {
        new: true,
      }
    );
  },
};
