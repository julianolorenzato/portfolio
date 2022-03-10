export default async function (type) {
	const API_URL = process.env.API_URL

	if(type === 'skills'){
		var resp = await fetch(`${API_URL}/${type}?populate=%2A&sort[0]=level%3Adesc`)
	}else {
		var resp = await fetch(`${API_URL}/${type}?populate=%2A`)
	}
	const json = await resp.json()
	const data = json.data

	switch (type) {
		case 'projects':
			return data.map((v) => {
				return {
					id: v.id,
					title: v.attributes.title,
					description: v.attributes.description,
					slug: v.attributes.slug,
					featured: v.attributes.featured,
					urls: v.attributes.images.data.map((img) => img.attributes.formats.medium.url),
					skills: v.attributes.skills.data.map((skill) => skill.attributes.title),
					createdAt: v.attributes.createdAt,
					updatedAt: v.attributes.updatedAt
				}
			})

		case 'skills':
			return data.map((v) => {
				return {
					id: v.id,
					title: v.attributes.title,
					level: v.attributes.level,
					knowledge: v.attributes.knowledge,
					url: v.attributes.image.data.attributes.url,
					categories: v.attributes.categories.data.map(cat => cat.attributes.category)
				}
			})

		case 'categories':
			return data.map((v) => {
				return {
					id: v.id,
					title: v.attributes.category,
					skills: v.attributes.skills.data.map((skill) => skill.attributes.title)
				}
			})
	}
}
