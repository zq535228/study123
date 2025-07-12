import{_ as n,c as a,b as e,o as i}from"./app-CQ4DyvhI.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>curl -sS -O https://kejilion.pro/kejilion.sh &amp;&amp; chmod +x kejilion.sh &amp;&amp; ./kejilion.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>apt-get update</p><p>apt-get install wget apt-get install sudo</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>sudo apt update</span></span>
<span class="line"><span>sudo apt install curl</span></span>
<span class="line"><span>curl -fsSL https://test.docker.com -o test-docker.sh</span></span>
<span class="line"><span>sudo sh test-docker.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm 代理服务器的安装</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Create a docker-compose.yml file similar to this:</span></span>
<span class="line"><span>yml</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  app:</span></span>
<span class="line"><span>    image: &#39;jc21/nginx-proxy-manager:latest&#39;</span></span>
<span class="line"><span>    restart: unless-stopped</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &#39;80:80&#39;</span></span>
<span class="line"><span>      - &#39;81:81&#39;</span></span>
<span class="line"><span>      - &#39;443:443&#39;</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - ./data:/data</span></span>
<span class="line"><span>      - ./letsencrypt:/etc/letsencrypt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考文章</p><p>https://www.runoob.com/docker/ubuntu-docker-install.html</p>`,6)]))}const c=n(l,[["render",p]]),r=JSON.parse('{"path":"/article/install-docker-on-ubuntu/","title":"在ubuntu系统上安装docker","lang":"en-US","frontmatter":{"title":"在ubuntu系统上安装docker","tags":["Docker","Ubuntu","Linux","容器化"],"createTime":"2024/03/27 9:00:00","permalink":"/article/install-docker-on-ubuntu/"},"headers":[],"readingTime":{"minutes":0.44,"words":133},"git":{"updatedTime":1746333908000,"contributors":[{"name":"bookmac","username":"bookmac","email":"zq535228@qq.com","commits":6,"avatar":"https://avatars.githubusercontent.com/bookmac?v=4","url":"https://github.com/bookmac"}]},"filePathRelative":"preview/在ubuntu系统上安装docker.md","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}]}');export{c as comp,r as data};
