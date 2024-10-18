# git 实操

## 一、功能分支提交前合并 master 分支代码

```bash
# pre-commit 钩子

#!/bin/sh

# 获取当前分支名
current_branch=$(git rev-parse --abbrev-ref HEAD)

# 检查是否处于合并冲突状态
if [ -f .git/MERGE_HEAD ]; then
    echo "检测到未完成的合并，跳过拉取和合并 master"
    exit 0
fi

# 缓存暂存区文件的列表
staged_files=$(git diff --cached --name-only)
if [ $? -ne 0 ]; then
    echo "获取暂存区文件失败"
    exit 1
fi
echo "暂存区文件列表：$staged_files"

# 将未提交的代码临时存储
git stash -u
if [ $? -ne 0 ]; then
    echo "代码临时存储失败"
    exit 1
fi
echo "代码已临时存储"

# 切换到 master 分支
git checkout master
if [ $? -ne 0 ]; then
    echo "切换到 master 失败"
    exit 1
fi

git pull origin master  # 拉取 master 最新代码
if [ $? -ne 0 ]; then
    echo "拉取 master 最新代码失败或分支分歧，请手动处理"
    exit 1
fi

# 切回功能分支
git checkout "$current_branch"
if [ $? -ne 0 ]; then
    echo "切换回功能分支失败"
    exit 1
fi

# 检查是否已经合并过 master
if git merge-base --is-ancestor master HEAD; then
    echo "功能分支已经包含 master 的最新代码，跳过合并"
else
    echo "功能分支尚未包含 master 的最新代码，正在合并"
    # 合并 master 到当前分支
    git merge master
    if [ $? -ne 0 ]; then
        echo "合并 master 到功能分支时发生冲突，请手动解决冲突后再提交"
        exit 1
    fi
fi

# 检查是否有合并冲突未解决
if git ls-files -u | grep -q .; then
    echo "仍存在未解决的合并冲突，请手动解决后再继续"
    exit 1
fi

# 检查合并是否成功并应用 stash
echo "合并成功，正在应用临时存储的代码"

# 应用 stash
git stash apply
if [ $? -ne 0 ]; then
    echo "应用临时存储的代码时出现冲突，尝试解决冲突"
    git status
    exit 1
fi

# 检查是否有未解决的 stash 冲突
if git ls-files -u | grep -q .; then
    echo "仍存在未解决的 stash 冲突，请手动解决后再继续"
    exit 1
fi


# 删除已应用的 stash
git stash clear

# 重新添加之前缓存的暂存区文件到暂存区
for file in $staged_files; do
    git add "$file"
    if [ $? -ne 0 ]; then
        echo "重新添加文件 $file 到暂存区时出错"
        exit 1
    fi
done

echo "暂存区文件已重新添加"

# 执行 lint-staged
npm run lint:lint-staged
if [ $? -ne 0 ]; then
    echo "代码检查失败"
    exit 1
fi

echo "pre-commit 钩子执行完毕"
exit 0

```
