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
    title: "无版权音乐资源网站",
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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter((r) => {
    const matchesTag = selectedTag ? r.tags.includes(selectedTag) : true;
    const matchesSearch = searchTerm
      ? r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesTag && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">🔍 搜索 Gelai Lab 精品资源</h1>
        <p className="text-gray-600 mb-8">
          本站所有资源由 Gelai 精心组织，欢迎搜索你需要的好东西！
        </p>
        <input
          type="text"
          placeholder="输入关键词..."
          className="w-full max-w-xl px-5 py-3 text-lg border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="text-center mb-6 space-x-2">
        {Array.from(new Set(resources.flatMap((r) => r.tags))).map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-full text-sm border transition ${
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
        <h2 className="text-xl font-medium mb-2">💰 支持 Gelai Lab</h2>
        <p className="text-sm text-gray-600 mb-4">
          如果你觉得这些资源对你有帮助，可以扫码支持我继续创作与整理：
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div>
            <img
              src="/wechat.jpg"
              alt="微信打赏"
              className="w-40 h-40 mx-auto rounded border transition-transform duration-200 hover:scale-105"
            />
            <p className="text-sm mt-2 text-gray-700">微信支付</p>
          </div>
          <div>
            <img
              src="/alipay.jpg"
              alt="支付宝打赏"
              className="w-40 h-40 mx-auto rounded border transition-transform duration-200 hover:scale-105"
            />
            <p className="text-sm mt-2 text-gray-700">支付宝</p>
          </div>
        </div>
      </div>
    </main>
  );
}
