import{_ as s,o as n,c as a,U as l}from"./chunks/framework.f31b4cfb.js";const A=JSON.parse('{"title":"introduction","description":"","frontmatter":{},"headers":[],"relativePath":"dynamic-programming/dp-intro.md","filePath":"dynamic-programming/dp-intro.md","lastUpdated":1688714720000}'),p={name:"dynamic-programming/dp-intro.md"},o=l(`<h1 id="introduction" tabindex="-1">introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;introduction&quot;">​</a></h1><p>Dynamic Programming is a method to use extra memory to store some computed value you might want to use afterwards, so you&#39;ll not have to compute it one more time.</p><h2 id="top-down-approach" tabindex="-1">Top-down Approach <a class="header-anchor" href="#top-down-approach" aria-label="Permalink to &quot;Top-down Approach&quot;">​</a></h2><h3 id="intuition" tabindex="-1">Intuition <a class="header-anchor" href="#intuition" aria-label="Permalink to &quot;Intuition&quot;">​</a></h3><p>Top-down Approach is a method of dp, when compute same thing, we don&#39;t want to compute two times right? Therefore, we store the compute value, and use it next time we encountered the exact problem.</p><h3 id="code-fibonacci-numbers" tabindex="-1">Code : fibonacci Numbers <a class="header-anchor" href="#code-fibonacci-numbers" aria-label="Permalink to &quot;Code : fibonacci Numbers&quot;">​</a></h3><p><a href="https://leetcode.com/problems/fibonacci-number/" target="_blank" rel="noreferrer">leetcode 509. Fibonacci Number</a></p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">helper</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">]!=-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">n</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">helper</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">helper</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">]=</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fib</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">arr</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> ans</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">helper</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> ans</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="buttom-up-approach" tabindex="-1">Buttom-up Approach <a class="header-anchor" href="#buttom-up-approach" aria-label="Permalink to &quot;Buttom-up Approach&quot;">​</a></h2><h3 id="intuition-1" tabindex="-1">Intuition <a class="header-anchor" href="#intuition-1" aria-label="Permalink to &quot;Intuition&quot;">​</a></h3><p>Buttom-up Approach is a method of dp, use while you are able to use the value you just compute to generate new value.</p><h3 id="code-fibonacci-numbers-1" tabindex="-1">Code : fibonacci Numbers <a class="header-anchor" href="#code-fibonacci-numbers-1" aria-label="Permalink to &quot;Code : fibonacci Numbers&quot;">​</a></h3><p><a href="https://leetcode.com/problems/fibonacci-number/" target="_blank" rel="noreferrer">leetcode 509. Fibonacci Number</a></p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fib</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#82AAFF;">F</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	F</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	F</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++)</span></span>
<span class="line"><span style="color:#A6ACCD;">		F</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> F</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> F</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> F</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="dynamic-programming-patterns" tabindex="-1">Dynamic Programming Patterns <a class="header-anchor" href="#dynamic-programming-patterns" aria-label="Permalink to &quot;Dynamic Programming Patterns&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://leetcode.com/discuss/study-guide/458695/Dynamic-Programming-Patterns#Decision-Making" target="_blank" rel="noreferrer">Read this post for all patterns!</a></p></div><p>Minimum (Maximum) Path to Reach a Target Problem list: <a href="https://leetcode.com/list/55ac4kuc" target="_blank" rel="noreferrer">https://leetcode.com/list/55ac4kuc</a></p><p>Generate problem statement for this pattern</p><p>Statement Given a target find minimum (maximum) cost / path / sum to reach the target.</p><p>Approach</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Choose minimum (maximum) path among all possible paths before the current state, then add value for the current state.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">routes[i] = min(routes[i-1], routes[i-2], ... , routes[i-k]) + cost[i]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Generate optimal solutions for all values in the target and return the value for the target.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Top-Down</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> ways</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    result </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">result</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">topDown</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">target </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ways</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">])</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> cost</span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> path </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> sum</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> memo</span><span style="color:#89DDFF;">[</span><span style="color:#676E95;font-style:italic;">/*state parameters*/</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Bottom-Up</p><div class="language-cpp line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> target</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> j </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> j </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ways</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">();</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ways</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">           </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ways</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">j</span><span style="color:#89DDFF;">]]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> cost </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> path </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> sum</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,25),e=[o];function t(r,c,D,F,y,i){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{A as __pageData,m as default};
