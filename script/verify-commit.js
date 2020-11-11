const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();

const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?:/;

console.log(msg)
console.log(commitRE.test(msg))

if (!commitRE.test(msg)) {
  console.error(`
        不合法的 commit 消息格式。
        请查看 git commit 提交规范
    `);

  process.exit(1);
}
