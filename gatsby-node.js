exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("Error")
    return
  }

  const projects = result?.data?.allProjectsJson?.edges
  console.log("projects", projects)
  projects?.forEach(({ node: { slug } }) => {
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/site.js"),
      context: { slug },
    })
  })

  actions.createPage({
    path: "/hero/",
    component: require.resolve("./src/templates/herosection.js"),
  })
}
