module.exports = {
  articles: async (parent, args, { models }) => {
    return await models.Article.find();
  },
  article: async (parent, args, { models }) => {
    return await models.Article.findById(args.id);
  },
};
