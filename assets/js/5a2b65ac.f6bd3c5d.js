"use strict";(self.webpackChunkde_intern_tutorial=self.webpackChunkde_intern_tutorial||[]).push([[838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="\u26a1 qsv",l={unversionedId:"qsv/qsv-cli",id:"qsv/qsv-cli",title:"\u26a1 qsv",description:"Meet qsv, your new command line tool for data wrangling!",source:"@site/docs/qsv/qsv-cli.mdx",sourceDirName:"qsv",slug:"/qsv/qsv-cli",permalink:"/de-intern-guide/qsv/qsv-cli",draft:!1,editUrl:"https://github.com/dathere/de-intern-guide/tree/main/docs/qsv/qsv-cli.mdx",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"\u26a1 qsv",permalink:"/de-intern-guide/category/-qsv"},next:{title:"\ud83d\udcbb qsv pro",permalink:"/de-intern-guide/qsv/qsv-pro"}},s={},c=[{value:"\ud83d\udcad What&#39;s qsv?",id:"-whats-qsv",level:2},{value:"\u2728 Cool Features",id:"-cool-features",level:2},{value:"\ud83d\udee0 Install qsv",id:"-install-qsv",level:2},{value:"\ud83d\udcca Your first command: <code>qsv count</code>",id:"-your-first-command-qsv-count",level:2},{value:"\ud83d\ude80 Ready for some data wrangling?",id:"-ready-for-some-data-wrangling",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-qsv"},"\u26a1 qsv"),(0,a.kt)("p",null,"Meet ",(0,a.kt)("strong",{parentName:"p"},"qsv"),", your new command line tool for data wrangling!"),(0,a.kt)("h2",{id:"-whats-qsv"},"\ud83d\udcad What's qsv?"),(0,a.kt)("p",null,"qsv is a command line tool with 50+ commands that can perform data wrangling tasks in a relatively efficient manner."),(0,a.kt)("p",null,"For example, if I had a csv file that looked like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv",metastring:"title=prices.csv",title:"prices.csv"},"id,fruit,cost\n1,apple,5.00\n2,banana,10.00\n3,celery,2.00\n")),(0,a.kt)("p",null,"Then I can use qsv to perform all sorts of commands based on the data. Maybe I want to simply count how many rows there are (not including the header row). I can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"qsv count prices.csv\n")),(0,a.kt)("p",null,"And the output would be ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),". But I can add flags for even more options like additionally getting the number of characters in the longest row by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"--width")," (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"qsv count prices.csv --width"),"), and other commands also have subcommands!"),(0,a.kt)("h2",{id:"-cool-features"},"\u2728 Cool Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"50+ commands:")," There's plenty of options for users for all sorts of backgrounds to use qsv in their workflow"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Blazingly fast:")," qsv is built primarily with the Rust programming language, offering fast speeds even for very large datasets"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mix and match:")," Combine different qsv commands and integrate qsv with other tools to enhance data wrangling")),(0,a.kt)("h2",{id:"-install-qsv"},"\ud83d\udee0 Install qsv"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/onboarding/qsv-setup"},"Install qsv"),"."),(0,a.kt)("li",{parentName:"ol"},"Once installed, run ",(0,a.kt)("inlineCode",{parentName:"li"},"qsv --list")," to list the commands available to you, and you can further learn about them by running ",(0,a.kt)("inlineCode",{parentName:"li"},"qsv <command> --help")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"<command>")," is the command you want to learn about (e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"qsv count --help"),")."),(0,a.kt)("li",{parentName:"ol"},"Try running qsv commands on your files!")),(0,a.kt)("h2",{id:"-your-first-command-qsv-count"},"\ud83d\udcca Your first command: ",(0,a.kt)("inlineCode",{parentName:"h2"},"qsv count")),(0,a.kt)("p",null,"Navigate to your desired ",(0,a.kt)("inlineCode",{parentName:"p"},".csv")," file on the terminal and try typing ",(0,a.kt)("inlineCode",{parentName:"p"},"qsv count <filename>")," (where ",(0,a.kt)("inlineCode",{parentName:"p"},"<filename>")," is the name of your file) and see what happens!"),(0,a.kt)("p",null,"See if you can try following along in ",(0,a.kt)("a",{parentName:"p",href:"https://nbviewer.org/github/jqnatividad/qsv/blob/master/contrib/notebooks/intro-to-count.ipynb"},"the intro-to-count.ipynb notebook"),"."),(0,a.kt)("h2",{id:"-ready-for-some-data-wrangling"},"\ud83d\ude80 Ready for some data wrangling?"),(0,a.kt)("p",null,"That's just the beginning! Explore more commands, use qsv to perform various transformations, and have fun wrangling data with qsv!"),(0,a.kt)("p",null,"Remember, qsv can help make data exciting and easy, even if you're just starting on your data journey!"))}p.isMDXComponent=!0}}]);