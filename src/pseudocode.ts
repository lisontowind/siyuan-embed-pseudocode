import pseudocode from "pseudocode";
import "pseudocode/build/pseudocode.min.css";

export function compilePseudocode(code: string, config: IPseudocodeConfig): IResCompilePseudocode {
  const compileResult: IResCompilePseudocode = {
    ok: false,
    code: code,
    html: "",
    message: "",
  };
  try {
    if (code.trim().length == 0) {
      throw Error("empty pseudocode");
    }

    const renderOptions = {
      indentSize: '1.2em',
      commentDelimiter: '//',
      lineNumber: config.lineNumber == 'true',
      lineNumberPunc: ':',
      noEnd: config.blockEnding == 'false',
      scopeLines: config.scopeLine == 'true',
      titlePrefix: config.algorithmLabel,
      captionCount: (config.algorithmNumber ? parseInt(config.algorithmNumber) - 1 : parseInt(config._defaultAlgorithmNumber) - 1),
    }

    compileResult.html = pseudocode.renderToString(code, renderOptions);
    compileResult.ok = true;
  } catch (err) {
    compileResult.ok = false;
    compileResult.message = err.message;
  }
  return compileResult;
}