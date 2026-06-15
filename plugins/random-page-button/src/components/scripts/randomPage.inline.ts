import { FullSlug, getFullSlug, pathToRoot, simplifySlug } from "@quartz-community/utils/path"

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export async function navigateToRandomPage() {
  const fullSlug = getFullSlug(window)
  const currentSlug = simplifySlug(getFullSlug(window))
  const data = await fetchData
  // get all the slugs except anything that has an #*-exclude tag or the "slurp" tag.
  // NOTE: in Quartz v5 the client-side content index no longer exposes `frontmatter`,
  // so password/passphrase pages can't be filtered here; rely on unlisted/encrypted
  // plugins to keep those out of the index instead.
  const allPosts = Object.keys(data)
    .filter((slug) => {
      const fileData = data[slug as FullSlug]
      const hasExcludeTag = fileData.tags?.some(
        (tag: string) => tag.endsWith("exclude") || tag === "slurp",
      )
      return !hasExcludeTag
    })
    .map((slug) => simplifySlug(slug as FullSlug))

  if (allPosts.length === 0) return

  let newSlug = allPosts[getRandomInt(allPosts.length)]

  // Ensure newSlug is not the current page (unless it's the only option)
  let attempts = 0
  while (newSlug === currentSlug && allPosts.length > 1 && attempts < 50) {
    newSlug = allPosts[getRandomInt(allPosts.length)]
    attempts++
  }

  let newPageUrl
  if (newSlug === "" || newSlug === "/") {
    newPageUrl = pathToRoot(fullSlug)
  } else {
    newPageUrl = `${pathToRoot(fullSlug)}/${newSlug}`
  }
  window.location.href = newPageUrl
}

document.addEventListener("nav", async () => {
  const button = document.getElementById("random-page-button")
  button?.removeEventListener("click", navigateToRandomPage)
  button?.addEventListener("click", navigateToRandomPage)
})
