import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" keywords={[`Texas`, `Greek`, `Abraxis`]} />

    <h1>ODIN AND FENRIR</h1>

    <p>The most popular of the Gods, both in present time and the past, he values wisdom over all else, to the point of sacrificing his own eye for knowledge. He takes half those slain in battle to his hall to prepare for Ragnarök. Wednesday, or "Woden's Day", is named after him.</p>
    <Image />
    <div style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}></div>

    <p>A monstrous wolf that is the son of Loki and the giantess Angrboda. Fenrir has two sons of his own, Hati and Skoll, who constantly chase the horses that move the sun across the sky, as well as pursuing the Moon. He is bound to a rock by Gleipnir a ribbon made of the sound of a cat's footsteps, a woman's beard, the roots of a mountain, the sinews of a bear, the breath of a fish, and a bird's spittle. The binding of Fenrir cost Tyr his hand. At the battle of Ragnarök, he will break loose and devour Odin, but will be slain by Vidar.</p>
    
  </Layout>
)

export default IndexPage
