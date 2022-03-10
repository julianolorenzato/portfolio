export default async function (slug) {
	const API_URL = process.env.API_URL

	const resp = await fetch(`${API_URL}/projects?populate=%2A&filters[slug][$eq]=${slug}`)
	const json = await resp.json()
	const data = json.data[0]
    
	const project = {
		id: data.id,
		title: data.attributes.title,
		description: data.attributes.description,
		slug: data.attributes.slug,
		featured: data.attributes.featured,
		urls: data.attributes.images.data.map((img) => img.attributes.formats.medium.url),
		skills: data.attributes.skills.data.map((skill) => skill.attributes.title),
		createdAt: data.attributes.createdAt,
		updatedAt: data.attributes.updatedAt
	}
	return project
}
