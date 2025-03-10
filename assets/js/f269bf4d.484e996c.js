"use strict";(self.webpackChunkde_intern_tutorial=self.webpackChunkde_intern_tutorial||[]).push([[985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),k=o,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},l="\ud83d\udcca CKAN Setup",i={unversionedId:"onboarding/ckan-setup",id:"onboarding/ckan-setup",title:"\ud83d\udcca CKAN Setup",description:"In this section we'll go over how to install CKAN v2.10.6 and get it running on your Ubuntu VM.",source:"@site/docs/onboarding/ckan-setup.mdx",sourceDirName:"onboarding",slug:"/onboarding/ckan-setup",permalink:"/de-intern-guide/onboarding/ckan-setup",draft:!1,editUrl:"https://github.com/dathere/de-intern-guide/tree/main/docs/onboarding/ckan-setup.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guideSidebar",previous:{title:"\u26a1 qsv Setup",permalink:"/de-intern-guide/onboarding/qsv-setup"},next:{title:"\ud83d\udcee DataPusher+ Setup",permalink:"/de-intern-guide/onboarding/datapusher-plus-setup"}},s={},c=[{value:"\ud83d\udcdd Written Tutorial",id:"-written-tutorial",level:2},{value:"Upgrade packages",id:"upgrade-packages",level:2},{value:"Set up SSH (optional)",id:"set-up-ssh-optional",level:2},{value:"Install Docker",id:"install-docker",level:2},{value:"Install <code>docker-compose</code>",id:"install-docker-compose",level:2},{value:"Download Ahoy and add to $PATH",id:"download-ahoy-and-add-to-path",level:2},{value:"Set up ckan-compose",id:"set-up-ckan-compose",level:2},{value:"CKAN steps 1-4 with caveats",id:"ckan-steps-1-4-with-caveats",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-ckan-setup"},"\ud83d\udcca CKAN Setup"),(0,o.kt)("p",null,"In this section we'll go over how to install ",(0,o.kt)("a",{parentName:"p",href:"https://ckan.org"},"CKAN")," v2.10.6 and get it running on your Ubuntu VM."),(0,o.kt)("h2",{id:"-written-tutorial"},"\ud83d\udcdd Written Tutorial"),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New installation of Ubuntu 22.04 (virtual machine, VPS, local device, etc.) connected to the Internet.")),(0,o.kt)("p",null,"For these installation notes we'll assume the username in Ubuntu is ",(0,o.kt)("inlineCode",{parentName:"p"},"rzmk"),", so change it to yours when applicable."),(0,o.kt)("h2",{id:"upgrade-packages"},"Upgrade packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update -y && sudo apt upgrade -y\n")),(0,o.kt)("h2",{id:"set-up-ssh-optional"},"Set up SSH (optional)"),(0,o.kt)("p",null,"If you're using a VM then it may be easier when developing to SSH into the VM from a code editor such as VSCode, VSCodium, or Zed."),(0,o.kt)("p",null,"To enable SSH on the VM install ",(0,o.kt)("inlineCode",{parentName:"p"},"openssh-server"),", and to identify the VM IP address to use when using SSH install ",(0,o.kt)("inlineCode",{parentName:"p"},"net-tools"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install openssh-server net-tools -y\n")),(0,o.kt)("p",null,"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"ifconfig")," command to identify your IP address, then use SSH on your local device and code editor to access the environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh rzmk@IPADDRESSHERE\n")),(0,o.kt)("h2",{id:"install-docker"},"Install Docker"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notes for this section based on ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04"},"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt update\nsudo apt install apt-transport-https ca-certificates curl software-properties-common -y\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt update\napt-cache policy docker-ce\nsudo apt install docker-ce -y\n')),(0,o.kt)("p",null,"Also add your user to the sudo group to run Docker without ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG docker ${USER}\nsu - ${USER}\n")),(0,o.kt)("h2",{id:"install-docker-compose"},"Install ",(0,o.kt)("inlineCode",{parentName:"h2"},"docker-compose")),(0,o.kt)("p",null,"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," to set up and run ",(0,o.kt)("inlineCode",{parentName:"p"},"ckan-compose"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install docker-compose -y\n")),(0,o.kt)("h2",{id:"download-ahoy-and-add-to-path"},"Download Ahoy and add to $PATH"),(0,o.kt)("p",null,"We'll be using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tino097/ckan-compose"},"ckan-compose")," to handle the PostgreSQL, Redis, and SOLR setup. One of the prerequisites for using ckan-compose is installing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ahoy-cli/ahoy"},"Ahoy"),"."),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ahoy-cli/ahoy/releases/latest"},"https://github.com/ahoy-cli/ahoy/releases/latest")," and download the ",(0,o.kt)("inlineCode",{parentName:"p"},"ahoy-bin-linux-amd64")," file and move it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," named as ",(0,o.kt)("inlineCode",{parentName:"p"},"ahoy"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv ~/Downloads/ahoy-bin-linux-amd64 /usr/local/bin/ahoy\nsudo chmod +x /usr/local/bin/ahoy\n")),(0,o.kt)("h2",{id:"set-up-ckan-compose"},"Set up ckan-compose"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/\nsudo apt install docker-compose -y\ngit clone https://github.com/tino097/ckan-compose.git\ncd ckan-compose\nahoy generate-env\nahoy up\n")),(0,o.kt)("p",null,"You may get asked after ",(0,o.kt)("inlineCode",{parentName:"p"},"ahoy generate-env")," to provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME"),", this can be anything so we'll put ",(0,o.kt)("inlineCode",{parentName:"p"},"myproject"),". You may also use the defaults for ",(0,o.kt)("inlineCode",{parentName:"p"},"DATASTORE_READONLY_PASSWORD")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"POSTGRES_PASSWORD")," for development."),(0,o.kt)("h2",{id:"ckan-steps-1-4-with-caveats"},"CKAN steps 1-4 with caveats"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3-dev libpq-dev python3-pip python3-venv git-core redis-server -y\nsudo mkdir -p /usr/lib/ckan/default\nsudo chown `whoami` /usr/lib/ckan/default\npython3 -m venv /usr/lib/ckan/default\n. /usr/lib/ckan/default/bin/activate\npip install --upgrade pip\npip install -e 'git+https://github.com/ckan/ckan.git@ckan-2.10.6#egg=ckan[requirements]'\ndeactivate\n. /usr/lib/ckan/default/bin/activate\nsudo mkdir -p /etc/ckan/default\nsudo chown -R `whoami` /etc/ckan/\nckan generate config /etc/ckan/default/ckan.ini\nln -s /usr/lib/ckan/default/src/ckan/who.ini /etc/ckan/default/who.ini\n")),(0,o.kt)("p",null,"Next you must modify the CKAN config at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/ckan/default/ckan.ini"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"debug = true\nckan.debug_supress_header = False\n")),(0,o.kt)("p",null,"Also replace the following values to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ckan.devserver.threaded = true\nckan.max_resource_size = 10000\nckan.max_image_size = 5\n")),(0,o.kt)("p",null,"Continue to step 7 while in the virtual environment (replace ",(0,o.kt)("inlineCode",{parentName:"p"},"rzmk")," with your group then username for the ",(0,o.kt)("inlineCode",{parentName:"p"},"chown")," command and your CKAN details for the CKAN sysadmin account generation command). You may be prompted to add a sysadmin username and password (the password may need to be at least 8 characters)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/lib/ckan/default/src/ckan\npip install flask-debugtoolbar==0.14.1\ncd /var/lib\nsudo mkdir -p ckan/default\nsudo chown rzmk.rzmk ckan/default\nckan -c /etc/ckan/default/ckan.ini db init\nckan -c /etc/ckan/default/ckan.ini sysadmin add rzmk email=rzmk@localhost name=rzmk\nckan -c /etc/ckan/default/ckan.ini run\n")),(0,o.kt)("p",null,"Now you should be able to view your locally running CKAN instance at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:5000"},"http://localhost:5000"),"."))}d.isMDXComponent=!0}}]);