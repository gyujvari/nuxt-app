export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (body.body != undefined) {
    $fetch(
      process.env.BASE_URL + "/token/renew",
      { method: "PUT" },
      {
        headers: {
          "X-TOKEN": body.body,
        },
      }
    )
      .then((res) => {
        console.log(res, "response");
      })
      .catch((error) => {
        console.log(error, "error");
        throw createError({
          statusCode: 404,
          statusMessage: "Hiba történt a token frissitésekor",
          fatal: true,
        });
      });
  }
  return { body };
});
