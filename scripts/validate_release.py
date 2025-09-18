#!/usr/bin/env python3
"""Validate that the release directory does not contain internal-only assets."""

from __future__ import annotations

import sys
from pathlib import Path

INTERNAL_HTML_NAMES = {
    "test.html",
    "debug.html",
    "debug-food.html",
    "food-test.html",
    "test-food-simple.html",
    "game-test.html",
    "language-test.html",
    "ai-link-test.html",
}

INTERNAL_DIR_NAMES = {"internal-tools"}


def find_internal_entries(root: Path) -> tuple[list[Path], list[Path]]:
    """Return lists of internal files and directories present under ``root``."""
    internal_files: list[Path] = []
    internal_dirs: list[Path] = []

    for path in root.rglob("*"):
        if path.name in INTERNAL_DIR_NAMES and path.is_dir():
            internal_dirs.append(path)
        elif path.is_file() and path.name in INTERNAL_HTML_NAMES:
            internal_files.append(path)

    return internal_files, internal_dirs


def main() -> int:
    release_root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.cwd()
    release_root = release_root.resolve()

    if not release_root.exists():
        print(f"❌ 指定的发布目录不存在: {release_root}")
        return 1

    files, dirs = find_internal_entries(release_root)

    if not files and not dirs:
        print(f"✅ 发布目录 {release_root} 未包含内部调试页面。")
        return 0

    print("❌ 发布目录包含以下内部调试资产，请在部署前移除：")

    for directory in dirs:
        print(f"  - 目录: {directory.relative_to(release_root)}")

    for file in files:
        print(f"  - 文件: {file.relative_to(release_root)}")

    print("\n建议：仅复制正式对外页面到发布目录，或在部署脚本中排除上述路径。")
    return 1


if __name__ == "__main__":
    sys.exit(main())
