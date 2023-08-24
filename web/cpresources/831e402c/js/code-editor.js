/*!
 * @project        code-editor
 * @name           code-editor.js
 * @author         Andrew Welch
 * @build          Wed Aug 16 2023 02:25:36 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2023 ©2022 nystudio107.com
 *
 */
"use strict";(self.webpackChunkBuildchain=self.webpackChunkBuildchain||[]).push([[85],{5919:function(){},308:function(e,t,n){var o=n(713),i=n(7940);const s="__completions";function l(e){return e[e.length-1]}function c(e,t,n){o.languages.registerCompletionItemProvider("twig",{triggerCharacters:[".","("],provideCompletionItems:function(o,i,c){const r=[];let a=e;const d=o.getValueInRange({startLineNumber:i.lineNumber,startColumn:0,endLineNumber:i.lineNumber,endColumn:i.column});let u=!0;-1===d.lastIndexOf("{")&&(u=!1);if(-1!==d.substring(d.lastIndexOf("{")).indexOf("}")&&(u=!1),!u&&"TwigExpressionAutocomplete"===t)return null;const g=d.replace("\t","").split(" ");let p=g[g.length-1];p.includes("{")&&(p=l(p.split("{"))),p.includes("(")&&(p=l(p.split("("))),p.includes(">")&&(p=l(p.split(">")));const h="."===p.charAt(p.length-1);if(h&&"TwigExpressionAutocomplete"!==t)return null;if(u&&"TwigExpressionAutocomplete"===t&&h){if(!n)return null;const t=p.substring(0,p.length-1).split(".");if(void 0!==e[t[0]]){a=e[t[0]];for(let e=1;e<t.length;e++){if(!a.hasOwnProperty(t[e])){return{suggestions:r}}a=a[t[e]]}}}if(void 0!==a)for(const e in a)if(a.hasOwnProperty(e)&&!e.startsWith("__")){const t=a[e][s];if(void 0!==t){if(delete t.range,"documentation"in t&&"object"!=typeof t.documentation){const e=t.documentation;t.documentation={value:e,isTrusted:!0,supportsHtml:!0}}r.push(t)}}return{suggestions:r}}})}function r(e,t){o.languages.registerHoverProvider("twig",{provideHover:function(t,n){const i=t.getValueInRange({startLineNumber:n.lineNumber,startColumn:0,endLineNumber:n.lineNumber,endColumn:t.getLineMaxColumn(n.lineNumber)}),l=t.getWordAtPosition(n);if(null===l)return;let c=i.substring(0,l.endColumn-1),r=!1,a=e;for(let e=c.length;e>=0;e--)if(" "===c[e]){c=i.substring(e+1,c.length);break}if(c.includes(".")&&(r=!0),r){const e=c.substring(0,c.length).split(".");for(let t=0;t<e.length-1;t++){const n=e[t].replace(/[{(<]/,"");if(!a.hasOwnProperty(n))return;a=a[n]}}if(void 0!==a&&void 0!==a[l.word]){const e=a[l.word][s];if(void 0!==e){let t=e.documentation;"object"==typeof e.documentation&&(t=e.documentation.value);return{range:new o.Range(n.lineNumber,l.startColumn,n.lineNumber,l.endColumn),contents:[{value:"**"+e.detail+"**"},{value:t}]}}}}})}const a={default:'<svg width="8px" height="8px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 320 320" style="enable-background:new 0 0 320 320;" xml:space="preserve">\n<style type="text/css">.st0{fill:currentcolor;}</style>\n<g>\n\t<path class="st0" d="M128,35.6c-17.7,0-32,15.9-32,35.6v35.6c0,29.5-21.5,53.3-48,53.3c26.5,0,48,23.9,48,53.3v35.6\n\t\tc0,19.6,14.3,35.6,32,35.6V320H96c-35.3,0-64-31.9-64-71.1v-35.6c0-19.6-14.3-35.6-32-35.6v-35.6c17.7,0,32-15.9,32-35.6V71.1\n\t\tC32,31.9,60.7,0,96,0h32V35.6L128,35.6z"/>\n\t<path class="st0" d="M320,177.8c-17.7,0-32,15.9-32,35.6v35.6c0,39.2-28.7,71.1-64,71.1h-32v-35.6c17.7,0,32-15.9,32-35.6v-35.6\n\t\tc0-29.5,21.5-53.3,48-53.3c-26.5,0-48-23.9-48-53.3V71.1c0-19.6-14.3-35.6-32-35.6V0h32c35.3,0,64,31.9,64,71.1v35.6\n\t\tc0,19.6,14.3,35.6,32,35.6V177.8L320,177.8z"/>\n</g>\n</svg>',twig:'<svg width="8px" height="8px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 320 320" style="enable-background:new 0 0 320 320;" xml:space="preserve">\n<style type="text/css">.st0{fill:currentcolor;}</style>\n<g>\n\t<path class="st0" d="M128,35.6c-17.7,0-32,15.9-32,35.6v35.6c0,29.5-21.5,53.3-48,53.3c26.5,0,48,23.9,48,53.3v35.6\n\t\tc0,19.6,14.3,35.6,32,35.6V320H96c-35.3,0-64-31.9-64-71.1v-35.6c0-19.6-14.3-35.6-32-35.6v-35.6c17.7,0,32-15.9,32-35.6V71.1\n\t\tC32,31.9,60.7,0,96,0h32V35.6L128,35.6z"/>\n\t<path class="st0" d="M320,177.8c-17.7,0-32,15.9-32,35.6v35.6c0,39.2-28.7,71.1-64,71.1h-32v-35.6c17.7,0,32-15.9,32-35.6v-35.6\n\t\tc0-29.5,21.5-53.3,48-53.3c-26.5,0-48-23.9-48-53.3V71.1c0-19.6-14.3-35.6-32-35.6V0h32c35.3,0,64,31.9,64,71.1v35.6\n\t\tc0,19.6,14.3,35.6,32,35.6V177.8L320,177.8z"/>\n</g>\n</svg>',javascript:'\n <svg width="12px" height="12px" viewBox="0 0 256 289" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">\n <style type="text/css">.st0{fill:currentcolor;}</style>\n   <g>\n        <path class="st0" d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z"></path>\n    </g>\n</svg>',markdown:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 208 128">\n  <style type="text/css">.st0{fill:currentcolor;}</style>\n  <path class="st0" d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z"/>\n  </svg>',typescript:'\n    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="12px" height="12px">\n    <style type="text/css">.st0{fill:currentcolor;}</style>\n      <path class="st0" d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4\tV26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026\tc0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096\tc0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"/>\n  </svg>',css:'\n  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n width="14px" height="14px" viewBox="0 0 263.000000 136.000000"\n preserveAspectRatio="xMidYMid meet">\n  <style type="text/css">.st0{fill:currentcolor;}</style>\n<g transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)" stroke="none">\n<path class="st0" d="M300 685 l0 -375 305 0 305 0 0 125 0 125 -175 0 -175 0 0 125 0 125\n175 0 175 0 0 125 0 125 -305 0 -305 0 0 -375z"/>\n<path class="st0" d="M1030 815 l0 -245 175 0 c168 0 175 -1 175 -20 0 -19 -7 -20 -175\n-20 l-175 0 0 -115 0 -115 300 0 300 0 0 250 0 250 -175 0 c-168 0 -175 1\n-175 20 0 19 7 20 175 20 l175 0 0 110 0 110 -300 0 -300 0 0 -245z"/>\n<path class="st0" d="M1750 815 l0 -245 175 0 c168 0 175 -1 175 -20 0 -19 -7 -20 -175\n-20 l-175 0 0 -115 0 -115 305 0 305 0 0 250 0 250 -180 0 c-173 0 -180 1\n-180 20 0 19 8 20 178 22 l177 3 3 108 3 107 -306 0 -305 0 0 -245z"/>\n</g>\n</svg>',json:'\n  <svg class="svg-icon" width="12px" height="12px" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M216.4 107.1h50.2c5.7 0 10.4 4.7 10.4 10.4V156c0 5.7-4.7 10.4-10.4 10.4h-45.8c-5.7 0-13.4 4.6-13.4 10.4l-1 246.6c-1.3 35.2-25.1 90-58.6 91.4 23.2-1 59.6 39.5 59.6 89.4l-1 242.4c0 5.8 4.7 19.6 10.6 19.6h49.3c5.9 0 10.8 6.8 10.8 12.8v30.9c0 5.9-4.8 10.8-10.8 10.8h-49.8c-32.4-12.2-60.6-40.7-60.6-90.4v-181c0-49.9-27.1-90.4-60.6-90.4H77.1c-6.8 0-12.2-5.5-12.2-12.2v-65.9c0-6.8 5.5-12.2 12.2-12.2h18.1c33.5 0 60.6-40.5 60.6-90.4V197.4c0-49.9 27.1-90.3 60.6-90.3M808.6 107.1c33.5 0 60.6 40.4 60.6 90.3v180.8c0 49.9 27.1 90.4 60.6 90.4h18.1c6.7 0 12.2 5.4 12.2 12.2v65.9c0 6.7-5.4 12.2-12.2 12.2h-18.2c-33.5 0-60.6 40.5-60.6 90.4v181c0 49.7-28.2 78.2-60.6 90.4h-49.8c-6 0-10.8-4.9-10.8-10.8V879c0-6 4.9-12.8 10.8-12.8H808c5.9 0 10.6-13.8 10.6-19.6l-1-242.4c0-49.9 36.4-90.4 59.6-89.4-33.5-1.4-57.3-56.2-58.6-91.4l-1-246.6c0-5.8-7.7-10.4-13.4-10.4h-45.8c-5.7 0-10.4-4.7-10.4-10.4v-38.5c0-5.7 4.7-10.4 10.4-10.4h50.2M508.4 667.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4M386.8 667.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4M630 667.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4z"  />\n  </svg>'},d={language:"twig",theme:"vs",automaticLayout:!0,tabIndex:0,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,renderLineHighlight:"none",wordWrap:"on",scrollBeyondLastLine:!1,scrollbar:{vertical:"auto",horizontal:"auto",alwaysConsumeMouseWheel:!1,handleMouseWheel:!0},fontSize:14,fontFamily:'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',minimap:{enabled:!1}};var u=o.editor.EditorOption;function g(e,t,n){const i=n+"-monaco-editor",s=n+"-monaco-language-icon",l=document.querySelector("#"+i);if(null!==l&&void 0!==t){const n=a[t]??a.default??null,i=document.createElement("div");if(o.editor.setModelLanguage(e.getModel(),t),i.id=s,null!==n){let e="code is supported.";window.hasOwnProperty("Craft")&&(e=Craft.t("codeeditor",e));const o=t.charAt(0).toUpperCase()+t.slice(1)+" "+e;i.classList.add("monaco-editor-codefield--icon"),i.setAttribute("title",o),i.setAttribute("aria-hidden","true"),i.innerHTML=n}const c=l.querySelector("#"+s);c&&l.replaceChild(i,c)}}function p(e){let t=e??"vs";if("auto"===t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"vs-dark":"vs"}return t}""===n.p&&(n.p=window.codeEditorBaseAssetsUrl),window.makeMonacoEditor=function(e,t,n,s,l){const a=document.getElementById(e),h=document.createElement("div"),m=JSON.parse(s),w=e+"-monaco-editor-placeholder";if(null===a||null===a.parentNode)return;const v=JSON.parse(n);"singleLineEditor"in m&&m.singleLineEditor&&(d.scrollbar={vertical:"hidden",horizontal:"auto",alwaysConsumeMouseWheel:!1,handleMouseWheel:!1});let f=o.Uri.parse("https://craft-code-editor.com/"+e),C=v.language??d.language;"fileName"in m&&m.fileName&&(f=o.Uri.file(m.fileName),C=void 0);const x=o.editor.createModel(a.value,C,f);d.model=x,v.theme=p(v?.theme);const y={...d,...v};h.id=e+"-monaco-editor",h.classList.add("monaco-editor","relative","box-content","monaco-editor-codefield","h-full");const L=m.wrapperClass??"";if(""!==L){const e=h.classList,t=L.trim().split(/\s+/);e.add(...t)}if(m.displayLanguageIcon??!0){const t=document.createElement("div");t.id=e+"-monaco-language-icon",h.appendChild(t)}const M=m.placeholderText??"";if(""!==M){const t=document.createElement("div");t.id=e+"-monaco-editor-placeholder",t.innerHTML=M,t.classList.add("monaco-placeholder","p-2"),h.appendChild(t)}a.parentNode.insertBefore(h,a),a.style.display="none";const b=o.editor.create(h,y);if(void 0===window.monacoEditorInstances&&(window.monacoEditorInstances={}),window.monacoEditorInstances[e]=b,b.onDidChangeModelContent((()=>{a.value=b.getValue()})),g(b,y.language,e),"singleLineEditor"in m&&m.singleLineEditor&&null!==x){const e=x.getValue();x.setValue(e.replace(/\s\s+/g," ")),b.addCommand(o.KeyMod.CtrlCmd|o.KeyCode.KeyF,(()=>{})),b.addCommand(o.KeyCode.Enter,(()=>{}),"!suggestWidgetVisible"),b.onDidFocusEditorWidget((()=>{i.n.setTabFocusMode(!0)})),b.onDidPaste((()=>{let e="";const t=x.getLineCount();for(let n=0;n<t;n+=1)e+=x.getLineContent(n+1);e=e.replace(/\s\s+/g," "),x.setValue(e),b.setPosition({column:e.length+1,lineNumber:1})}))}"twig"===y.language&&function(e="CodeEditor",t="",n){const o=new URLSearchParams;void 0!==e&&o.set("fieldType",e),void 0!==t&&o.set("codeEditorOptions",t);const i=n.includes("?")?"&":"?";if(void 0===window.codeEditorFieldTypes&&(window.codeEditorFieldTypes={}),e in window.codeEditorFieldTypes)return;window.codeEditorFieldTypes[e]=e;const s=new XMLHttpRequest;s.open("GET",n+i+o.toString(),!0),s.onload=function(){if(s.status>=200&&s.status<400){const e=JSON.parse(s.responseText);void 0===window.monacoAutocompleteItems&&(window.monacoAutocompleteItems={});for(const[t,n]of Object.entries(e))n.name in window.monacoAutocompleteItems||(window.monacoAutocompleteItems[n.name]=n.name,c(n.__completions,n.type,n.hasSubProperties),r(n.__completions,n.type))}else console.log("Autocomplete endpoint failed with status "+s.status)},s.send()}(t,s,l);let E=!1;const V=()=>{const e=b.getLayoutInfo().width,t=b.getOption(u.lineHeight);let n=Math.min(50*t,b.getContentHeight());a instanceof HTMLTextAreaElement&&(n=Math.max(a.rows*t,n)),h.style.height=`${n}px`;try{E=!0,b.layout({width:e,height:n})}finally{E=!1}};let N=!0;function k(e,t){if(""===t){const t=document.querySelector(e);null!==t&&(t.style.display="initial")}}return"fixedHeightEditor"in m&&m.fixedHeightEditor&&(N=!1),N&&(b.onDidContentSizeChange(V),V()),""!==M&&(k("#"+w,b.getValue()),b.onDidBlurEditorWidget((()=>{k("#"+w,b.getValue())})),b.onDidFocusEditorWidget((()=>{!function(e){const t=document.querySelector(e);null!==t&&(t.style.display="none")}("#"+w)}))),b},window.setMonacoEditorLanguage=g,window.setMonacoEditorTheme=function(e,t){const n=p(t);(e._themeService?._theme?.themeName??null)!==n&&e.updateOptions({theme:n})}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[216,532],(function(){return t(308),t(5919),t(1828)}));e.O()}]);
//# sourceMappingURL=code-editor.js.map