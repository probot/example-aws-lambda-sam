/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  console.log("Yay! The app was loaded!");

  app.on("issues.opened", async (context) => {
    return context.octokit.rest.issues.createComment(
      context.issue({ body: "Hello, World!" })
    );
  });
};
