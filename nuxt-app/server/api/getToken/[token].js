export default async function () {
  const tokenUrl = process.env.BASE_URL + "/token/generate/WEB";
  const token = await $fetch(tokenUrl, { method: "POST" });
  return token;
}
