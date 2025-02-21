import { pathToRoot, slugTag, transformLink, TransformOptions } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"


function parse_md_link(md_link: string): [string, string] {
  // possible format
  // [[link dest|link text]] or [[link dest]]

  // remove brackets
  md_link = md_link.slice(2, -2)

  let parts = md_link.split("|")
  if (parts.length == 2) {
    return [parts[1], parts[0]]
  }

  return [parts[0], parts[0]]
}

const location_svg = (<svg xmlns="http://www.w3.org/2000/svg" class="fa-svg" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>)
const group_svg = (<svg xmlns="http://www.w3.org/2000/svg" class="fa-svg" viewBox="0 0 640 512"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/></svg>)

const FrontMatterList: QuartzComponent = ({ fileData, displayClass, ctx }: QuartzComponentProps) => {
  const tags = fileData.frontmatter?.tags
  const baseDir = pathToRoot(fileData.slug!)

  let elements = []

  if (tags && tags.length > 0) {
    let tag_elements = tags.map((tag) => {
      const linkDest = baseDir + `/tags/${slugTag(tag)}`
      return (
        <li>
          <a href={linkDest} class="internal tag-link">
            {tag}
          </a>
        </li>
      )
    })
    elements.push(tag_elements)
  }


  const transformOptions: TransformOptions = {
    strategy: "shortest",
    allSlugs: ctx.allSlugs,
  }
  const front_matter = [["location", location_svg], ["group", group_svg]]

  for (let [key, svg] of front_matter) {
    let value = fileData.frontmatter?.[key]
    if (value) {
      let link_text = null
      let link_dest = null
      if (value.startsWith("[[")) {
        [link_text, link_dest] = parse_md_link(value)
        link_dest = transformLink(fileData.slug!, link_dest, transformOptions)
      }
      else {
        link_text = value
        link_dest = null
      }

      elements.push(
        <li>
          <a href={link_dest} class="internal front-matter-link">
            {svg}&nbsp;{link_text}
          </a>
        </li>
      )
    }
  }

  if (elements.length > 0) {
    return (
      <ul class={classNames(displayClass, "tags")}>
        {elements}
      </ul>
    )
  }
  return null;
}

FrontMatterList.css = `
.tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.fa-svg {
  height: 1em;
  vertical-align: middle;
  margin-bottom: 4px;
}

.section-li > .section > .tags {
  justify-content: flex-end;
}

.tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

a.internal.tag-link {
  border-radius: 8px;
  background-color: var(--highlight);
  padding: 0.2rem 0.4rem;
  margin: 0 0.1rem;
}

a.internal.front-matter-link {
  border-radius: 8px;
  background-color: var(--highlight);
  padding: 0.2rem 0.4rem;
  margin: 0 0.1rem;
}
`

export default (() => FrontMatterList) satisfies QuartzComponentConstructor
