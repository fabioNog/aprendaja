interface CardProps {
  icon: string
  title: string
  description?: string
  href?: string
}

export function Card({ icon, title, description, href }: CardProps) {
  const content = (
    <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block group">
        {content}
      </a>
    )
  }

  return content
}