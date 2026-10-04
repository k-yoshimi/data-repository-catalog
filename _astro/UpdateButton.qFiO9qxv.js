import{r as e,t}from"./react.PW3a4ccH.js";import{t as n}from"./jsx-runtime.C8LJVCHC.js";var r=e(t(),1),i=n(),a={ja:{update:`更新`,updating:`更新中…`,done:`更新完了`,error:`更新に失敗`,last:`最終更新`,never:`未更新`,reload:`再読み込み`,details:`ログ`,confirm:`カタログを再取得して再ビルドします。数分かかることがあります。よろしいですか？`},en:{update:`Update`,updating:`Updating…`,done:`Updated`,error:`Update failed`,last:`Last updated`,never:`never`,reload:`Reload`,details:`log`,confirm:`This re-fetches and rebuilds the catalog (can take a few minutes). Continue?`}};function o(e,t,n){if(!e)return n;let r=new Date(e);return Number.isNaN(r.getTime())?n:r.toLocaleString(t===`ja`?`ja-JP`:`en-US`,{year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}function s({lang:e=`ja`}){let t=a[e]??a.ja,[n,s]=(0,r.useState)(null),[c,l]=(0,r.useState)(null),[u,d]=(0,r.useState)(!1),f=(0,r.useRef)(null);async function p(e){try{let t=await fetch(`/api/update/status`,{signal:e,cache:`no-store`});return t.ok?await t.json():null}catch{return null}}(0,r.useEffect)(()=>{let e=new AbortController;return p(e.signal).then(e=>{s(e!==null),e&&l(e),e&&e.running&&m()}),()=>{e.abort(),f.current&&window.clearInterval(f.current)}},[]);function m(){f.current&&window.clearInterval(f.current),f.current=window.setInterval(async()=>{let e=await p();e&&(l(e),!e.running&&f.current&&(window.clearInterval(f.current),f.current=null))},2e3)}async function h(){if(!c?.running&&window.confirm(t.confirm))try{l(await(await fetch(`/api/update`,{method:`POST`})).json()),m()}catch{s(!1)}}if(n!==!0)return null;let g=c?.state??`idle`,_=g===`running`,v=_?t.updating:g===`error`?t.error:g===`done`?t.done:t.update;return(0,i.jsxs)(`span`,{className:`upd upd-${g}`,children:[(0,i.jsxs)(`button`,{className:`upd-btn`,onClick:h,disabled:_,"aria-busy":_,children:[(0,i.jsx)(`span`,{className:`upd-dot${_?` spin`:``}`,"aria-hidden":`true`}),v,_&&c?.elapsed_sec!=null?` (${Math.round(c.elapsed_sec)}s)`:``]}),(0,i.jsxs)(`span`,{className:`upd-meta`,children:[t.last,`: `,o(c?.last_updated??null,e,t.never)]}),g===`done`&&(0,i.jsx)(`button`,{className:`upd-link`,onClick:()=>window.location.reload(),children:t.reload}),(g===`error`||_)&&(0,i.jsx)(`button`,{className:`upd-link`,onClick:()=>d(e=>!e),children:t.details}),u&&c?.log_tail?.length?(0,i.jsx)(`pre`,{className:`upd-log`,children:c.log_tail.join(`
`)}):null,(0,i.jsx)(`style`,{children:`
        .upd { display: inline-flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .upd-btn {
          display: inline-flex; align-items: center; gap: 7px;
          font: inherit; font-size: 0.85rem; cursor: pointer;
          border: 1px solid var(--brand, #0b4f8a); color: var(--brand, #0b4f8a);
          background: #fff; border-radius: 999px; padding: 4px 12px;
        }
        .upd-btn:hover:not(:disabled) { background: var(--brand-soft, #eaf2fa); }
        .upd-btn:disabled { opacity: 0.7; cursor: default; }
        .upd-done .upd-btn { border-color: #2e7d32; color: #2e7d32; }
        .upd-error .upd-btn { border-color: #c62828; color: #c62828; }
        .upd-dot { width: 8px; height: 8px; border-radius: 50%; background: currentColor; }
        .upd-dot.spin {
          border: 2px solid currentColor; border-top-color: transparent;
          background: transparent; width: 11px; height: 11px;
          animation: upd-spin 0.8s linear infinite;
        }
        @keyframes upd-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .upd-dot.spin { animation: none; } }
        .upd-meta { font-size: 0.74rem; color: var(--muted, #5a6b7b); }
        .upd-link {
          font: inherit; font-size: 0.74rem; background: none; border: none;
          color: var(--brand, #0b4f8a); text-decoration: underline; cursor: pointer; padding: 0;
        }
        .upd-log {
          flex-basis: 100%; max-height: 180px; overflow: auto; margin: 6px 0 0;
          background: #0d1b2a; color: #d7e3f0; font-size: 0.72rem; line-height: 1.4;
          padding: 8px 10px; border-radius: 6px; white-space: pre-wrap; word-break: break-word;
        }
      `})]})}export{s as default};