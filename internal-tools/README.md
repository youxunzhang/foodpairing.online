# 内部调试与测试页面

这些 HTML 页面仅供开发和质量检查使用，不应对外公开发布：

- `ai-link-test.html`
- `debug-food.html`
- `debug.html`
- `food-test.html`
- `game-test.html`
- `language-test.html`
- `test-food-simple.html`
- `test.html`

所有页面都添加了 `noindex` robots 元标签，并默认不在站点导航中暴露入口。访问时请使用类似 `http://localhost/internal-tools/test.html` 的路径，并确保部署时排除整个 `internal-tools/` 目录。
