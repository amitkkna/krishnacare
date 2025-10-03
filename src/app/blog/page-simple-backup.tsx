export default function BlogPageSimple() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Krishna Care <span className="text-green-600">Blog</span>
          </h1>
          <p className="text-lg text-gray-600">
            Simple blog page test - if you see this, routing is working.
          </p>
        </div>
        <div className="text-center py-12">
          <p className="text-gray-700">
            This is a simplified blog page to test routing. The dynamic features will be added once basic routing works.
          </p>
        </div>
      </div>
    </div>
  )
}