var fs = require("fs");
var target = "./docs";

if (!fs.existsSync(target)) {
    (async() => {
        try {
            await fs.promises.mkdir(target);
            await fs.promises.chmod(target, 0777);
            console.debug("디렉토리 생성 완료");
        } catch (e) {
            console.error("디렉토리 생성 에러");
            console.error(e);
        }
    })();

} else {
    (async() => {
        try {
            await fs.promises.rmdir(target);
            console.debug("디렉토리 삭제 완료");
        } catch (e) {
            console.error("디렉토리 삭제 에러");
            console.error(e);
        }
    })();

    console.log("%s 폴더의 삭제를 요청했습니다.", target);
}