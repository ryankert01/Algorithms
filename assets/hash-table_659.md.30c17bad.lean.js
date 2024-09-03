import{_ as o,o as e,c as p,k as n,a as t,t as l,R as r}from"./chunks/framework.ff12cedd.js";const d=JSON.parse('{"title":"Split Array into Consecutive Subsequences","description":"leetcode 659. Split Array into Consecutive Subsequences","frontmatter":{"title":"Split Array into Consecutive Subsequences","editLink":true,"description":"leetcode 659. Split Array into Consecutive Subsequences","problem_url":"https://leetcode.com/problems/split-array-into-consecutive-subsequences/"},"headers":[],"relativePath":"hash-table/659.md","filePath":"hash-table/659.md","lastUpdated":1725377885000}'),c={name:"hash-table/659.md"},F={id:"frontmatter-title",tabindex:"-1"},i={href:"{{ $frontmatter.problem_url }}",target:"_blank",rel:"noopener noreferrer"};function y(a,s,D,C,A,u){return e(),p("div",null,[n("h1",F,[t(l(a.$frontmatter.title)+" ",1),s[0]||(s[0]=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1))]),n("p",null,[n("a",i,l(a.$frontmatter.description),1)]),s[1]||(s[1]=r(`<h2 id="intuition" tabindex="-1">Intuition <a class="header-anchor" href="#intuition" aria-label="Permalink to &quot;Intuition&quot;">​</a></h2><p>Store how many time a <code>num+1000</code> exist in <code>nums</code>. We know that to form a vaild subsequence it has to be three nums, so if there&#39;re possibly a new sequence, we add it to <code>queue</code>. If there should be one or multiple subsequence going to end, check if it contains three elements, otherwise return <code>false</code>.</p><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isPossible</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sub</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> sub</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">]++;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> last </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	queue</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> q</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2004</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">q</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">())</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">q</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">sub</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">q</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">())</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">q</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">front</span><span style="color:#89DDFF;">()+</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">q</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="complexity-analysis" tabindex="-1">Complexity Analysis <a class="header-anchor" href="#complexity-analysis" aria-label="Permalink to &quot;Complexity Analysis&quot;">​</a></h2><p><strong>Time:</strong> <code>O(n)</code></p><p><strong>Space:</strong> <code>O(n)</code></p>`,7))])}const m=o(c,[["render",y]]);export{d as __pageData,m as default};
