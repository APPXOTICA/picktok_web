import { locales } from '$lib/tutorials';

/** localStorage key holding the language the visitor picked in the language menu */
export const LANG_KEY = 'picktok-lang';

const codes = JSON.stringify(locales.map((l) => l.code));

// Returns the visitor's language: saved choice first, then browser languages, else 'en'
const pickLanguage = `function(){var c=${codes},s;try{s=localStorage.getItem('${LANG_KEY}')}catch(e){}if(s&&c.indexOf(s)>-1)return s;var p=navigator.languages||[navigator.language];for(var i=0;i<p.length;i++){var t=(p[i]||'').toLowerCase();if(t.indexOf('zh')===0)return /hant|tw|hk|mo/.test(t)?'zh-Hant':'zh-Hans';var b=t.split('-')[0];if(c.indexOf(b)>-1)return b}return 'en'}`;

/** Landing "/" (English): send non-English visitors to their language page before first paint */
export const landingRedirectScript = `<script>(function(){var m=(${pickLanguage})();if(m!=='en')location.replace('/'+m+'/')})()</` + `script>`;

/** "/tutorial/": pick the guide language */
export const tutorialRedirectScript = `<script>(function(){var m=(${pickLanguage})();location.replace('/tutorial/'+m+'/')})()</` + `script>`;

/** Remember the language picked in the menu, and close the menu when tapping outside it */
export const languageMenuScript = `<script>document.addEventListener('click',function(e){var t=e.target,a=t.closest&&t.closest('a[data-lang]');if(a){try{localStorage.setItem('${LANG_KEY}',a.getAttribute('data-lang'))}catch(x){}}var d=document.querySelector('details.lang-menu[open]');if(d&&!d.contains(t))d.removeAttribute('open')})</` + `script>`;
