export default async function (req) {
  try {
    const url =
      process.env.BASE_URL +
      `/articles/list?page=1&pageSize=${req.context.params.articles}`;
    const articles = await $fetch(url);
    if (!articles.list) {
      throw createError({
        statusCode: 404,
        statusMessage: "Hiba történt a cikk lekérésekor",
        fatal: true,
      });
    }
    return articles.list;
  } catch (error) {
    if (error && req.context.params.articles == 12) {
      throw createError({
        statusCode: 404,
        statusMessage: "Hiba történt a cikkek lekérésekor",
        fatal: true,
      });
    }
  }
}
