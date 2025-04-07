import { useState } from "react";

const resources = [
  {
    id: 1,
    title: "AI 工具导航",
    description: "收录了上百个 AI 工具，包括图片生成、写作、翻译等。",
    image: "https://picsum.photos/400/200?random=1",
    link: "https://example.com/ai-tools",
    tags: ["AI", "工具", "推荐"]
  },
  {
    id: 2,
    title: "无版权音乐资源站",
    description: "可商用无版权音乐资源，适合视频创作使用。",
    image: "https://picsum.photos/400/200?random=2",
    link: "https://example.com/music",
    tags: ["音乐", "免费", "创作"]
  },
  {
    id: 3,
    title: "灵感图片合集",
    description: "设计师灵感图集，高质量美图合集。",
    image: "https://picsum.photos/400/200?random=3",
    link: "https://example.com/images",
    tags: ["图片", "设计", "灵感"]
  }
];

export default function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const filteredResources = selectedTag
    ? resources.filter((r) => r.tags.includes(selectedTag))
    : resources;

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📚 精选资源导航</h1>

      <div className="mb-4 space-x-2">
        {Array.from(new Set(resources.flatMap((r) => r.tags))).map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-full text-sm border ${
              selectedTag === tag
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <a
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            key={res.id}
            className="rounded-xl shadow hover:shadow-lg transition overflow-hidden border"
          >
            <img src={res.image} alt={res.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{res.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{res.description}</p>
              <div className="flex flex-wrap gap-1 text-xs">
                {res.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-xl font-medium mb-2">💰 支持本站</h2>
        <p className="text-sm text-gray-600 mb-2">如果你觉得这些资源对你有帮助，可以扫码打赏支持我继续整理更新👇</p>
        <img
          src="/donate-qr.png"
          alt="打赏二维码"
          className="w-48 h-48 mx-auto mt-2 border rounded"
        />
      </div>
    </main>
  );
}