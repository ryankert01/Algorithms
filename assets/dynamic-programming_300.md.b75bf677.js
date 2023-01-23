import{_ as l,o as e,c as p,b as s,d as o,t as a,a as r}from"./app.e318e964.js";const b=JSON.parse('{"title":"Longest Increasing Subsequence","description":"leetcode 300. Longest Increasing Subsequence","frontmatter":{"title":"Longest Increasing Subsequence","editLink":true,"description":"leetcode 300. Longest Increasing Subsequence","problem_url":"https://leetcode.com/problems/longest-increasing-subsequence/"},"headers":[{"level":2,"title":"Intuition : DP Buttom-up Approach","slug":"intuition-dp-buttom-up-approach","link":"#intuition-dp-buttom-up-approach","children":[]},{"level":2,"title":"Code","slug":"code","link":"#code","children":[]},{"level":2,"title":"Complexity Analysis","slug":"complexity-analysis","link":"#complexity-analysis","children":[]},{"level":2,"title":"Faster solution : Greedy + binary search","slug":"faster-solution-greedy-binary-search","link":"#faster-solution-greedy-binary-search","children":[]},{"level":2,"title":"Complexity Analysis","slug":"complexity-analysis-1","link":"#complexity-analysis-1","children":[]},{"level":2,"title":"UVA example :","slug":"uva-example","link":"#uva-example","children":[]}],"relativePath":"dynamic-programming/300.md","lastUpdated":1674482543000}'),t={name:"dynamic-programming/300.md"},c={id:"frontmatter-title",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y={href:"{{ $frontmatter.problem_url }}",target:"_blank",rel:"noopener noreferrer"},i=r(`<h2 id="intuition-dp-buttom-up-approach" tabindex="-1">Intuition : DP Buttom-up Approach <a class="header-anchor" href="#intuition-dp-buttom-up-approach" aria-hidden="true">#</a></h2><p>Let <code>dp[i]</code> is the longest increase subsequence of <code>nums[0..i]</code> which has <code>nums[i]</code> as the end element of the subsequence.</p><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">lengthOfLIS</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#82AAFF;">dp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">(),</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">()-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">--)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> j </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> j </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">();</span><span style="color:#F07178;"> j</span><span style="color:#89DDFF;">++)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">]+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        res </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">res</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="complexity-analysis" tabindex="-1">Complexity Analysis <a class="header-anchor" href="#complexity-analysis" aria-hidden="true">#</a></h2><p>Time : <code>O(n^2)</code></p><p>Space : <code>O(n)</code></p><h2 id="faster-solution-greedy-binary-search" tabindex="-1">Faster solution : Greedy + binary search <a class="header-anchor" href="#faster-solution-greedy-binary-search" aria-hidden="true">#</a></h2><p>Read the code first, and you&#39;ll discover without <code>else</code> handling exception is a bad idea.</p><p>Take <code>10,9,10</code> as an example, without else, we will only have <code>{10}</code> in <code>res</code>, By observation, we might want to change <code>res[0]</code> to <code>9</code> when it loops to the second number (9).</p><p>Vice versa, when this example occurs in either the middle of the <code>nums</code> or the <code>res</code>.</p><div class="language-cpp line-numbers-mode"><button class="copy"></button><span class="lang">cpp</span><pre><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">lengthOfLIS</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nums</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">back</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">else</span></span>
<span class="line"><span style="color:#676E95;">            // find the smallest number &gt;= i in res.</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">*(</span><span style="color:#82AAFF;">lower_bound</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">res</span><span style="color:#89DDFF;">),</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">end</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">res</span><span style="color:#89DDFF;">),</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">))</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="complexity-analysis-1" tabindex="-1">Complexity Analysis <a class="header-anchor" href="#complexity-analysis-1" aria-hidden="true">#</a></h2><p>Time : <code>O(n*log(n))</code></p><p>Space : <code>O(n)</code></p><h2 id="uva-example" tabindex="-1">UVA example : <a class="header-anchor" href="#uva-example" aria-hidden="true">#</a></h2><p><a href="https://blog.ryankert.cc/2023/01/23/data_structure/uva-437/" target="_blank" rel="noreferrer">UVA - 437 The Tower of Babylon</a></p>`,17);function D(n,d,A,u,C,m){return e(),p("div",null,[s("h1",c,[o(a(n.$frontmatter.title)+" ",1),F]),s("p",null,[s("a",y,a(n.$frontmatter.description),1)]),i])}const g=l(t,[["render",D]]);export{b as __pageData,g as default};
