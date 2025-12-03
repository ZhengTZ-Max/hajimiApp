"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const I18N = {
  zh: {
    nav_overview: "概览",
    nav_history: "发展历程",
    nav_ecology: "哈基米生态",
    nav_ecology_memes: "文化",
    nav_ecology_anime: "动漫",
    nav_ecology_concerts: "音乐会",
    nav_foundation: "基金会",
    nav_foundation_charity: "慈善",
    nav_foundation_events: "活动",
    nav_community: "社区",
    about_title: "关于",
    about_desc:
      "<p>全网超千亿播放量和无数二创音乐视频的哈基米</p>\n                        <p>沉浸于哈基米，一个充满梗和音乐的meme世界。</p>\n                        <p>一句歌词到一只猫咪再到所有猫咪和所有事物的演变就是哈基米文化</p>",
    create_btn: "创作属于你自己的哈基米音乐",
    vip_title: "欢迎加入哈基米世界",
    vip_btn: "立即购买",
    contract_heading: "合约地址",
    contract_unique: "（唯一 CA）",
    stat_mcap: "市值",
    stat_liq: "流动性",
    stat_chg4h: "4H涨跌幅",
    history_title: "路线图",
    history_step1:
      "<p>2025.10.07</p>\n                        <p>哈基米作为中文MEME登录Web3舞台</p>\n                        <p>哈基米上线BNB CHAIN链</p>\n                        <p>哈基米成为24H交易量达100M</p>\n                        <p>哈基米10.11日市值突破95M</p>",
    history_step2:
      "<p>2025.10.13</p>\n                        <p>Binance Alpha上线</p>\n                        <p>成为全球第二个上线Binance Alpha的中文模因币，同时期社区启动贡献者计划与社区文化矩阵计划。</p>",
    history_step3:
      "<p>2025.11.15</p>\n                        <p>社区发展</p>\n                        <p>哈基米官方推特关注突破5000人</p>\n                        <p>哈基米频道关注突破7000人</p>\n                        <p>哈基米社区周边活动派送，举办哈基米文化创作者大赛</p>\n                        <p>哈基米基金会成立，同时期开启第一期慈善计划</p>",
    culture_panel:
      "<h2>一句歌词到一只猫咪再到所有猫咪和所有事物的演变-哈基米文化</h2>\n                        <p>2021-2025的文化路程</p>\n                        <p>起源：从动漫哼唱到文化解构</p>\n                        <p>突破时刻：中国进行哈基米文化解构的阶段</p>\n                        <p>主流突破期（2023年至今）：称霸短视频平台</p>\n                        <p>语义扩展：从“可爱”到“生活方式” 链接Web2市场</p>\n                        <p>文化认可：“哈基米”被列入Z世代社交媒体白皮书十大热门词汇之一。</p>\n                        <p>这就是哈基米收获亿万粉丝和无数创作的历史</p>\n                        <p>免责声明： 哈基米是一个去中心化的迷因代币。没有团队，没有路线图，没有实用价值，没有任何收益预期，这不是财务建议，请自行研究。<br>— 创建此网站的目的只想听你说一声「哈基米」。</p>",
    people_title: "主要社区账号",
    nav_ecology_culture_mobile: "生态文化",
    nav_ecology_concerts_mobile: "生态音乐会",
    people_follow: "关注我们吧，哈基米们",
    tag_official: "",
    person1_desc: "一句歌词到一只猫咪再到所有猫咪和所有事物的演变-哈基米文化。",
    person2_desc: "每一次的哈基米文化传播和慈善行动都是对世界最好的回报。",
    person3_desc: "叙事与视觉标准，整合对外沟通与品牌一致性。",
    copy_success: "复制成功",
    copy_fail: "复制失败",
    coming_soon: "正在建立，敬请期待...",
    dex_not_listed: "未收录",
    dex_fetch_fail: "获取失败",
  },
  en: {
    nav_overview: "Overview",
    nav_history: "Roadmap",
    nav_ecology: "Hajimi Ecosystem",
    nav_ecology_memes: "Cultural",
    nav_ecology_anime: "Anime",
    nav_ecology_concerts: "Concerts",
    nav_foundation: "Foundation",
    nav_foundation_charity: "Charity",
    nav_foundation_events: "Events",
    nav_community: "Community",
    about_title: "About",
    about_desc:
      "<p>Hajimi has generated hundreds of billions of plays and countless fan-made songs and videos.</p>\n                        <p>Immerse yourself in a meme world of jokes and music that is entirely community-driven.</p>\n                        <p>From one lyric to one cat and then to every cat and every story—that evolution is Hajimi culture.</p>",
    create_btn: "Create your own Hajimi music",
    vip_title: "Welcome to the Hajimi",
    vip_btn: "Buy Now",
    contract_heading: "Contract Address",
    contract_unique: "(Only)",
    stat_mcap: "Market Cap",
    stat_liq: "Liquidity",
    stat_chg4h: "4H Change",
    history_title: "Roadmap",
    history_step1:
      "<p>2025.10.07</p>\n                        <p>Hajimi, as a Chinese meme, steps onto the Web3 stage</p>\n                        <p>Hajimi launches on BNB Chain</p>\n                        <p>Hajimi reaches a 24H trading volume of 100M</p>\n                        <p>On Oct 11, Hajimi’s market cap breaks through 95M</p>",
    history_step2:
      "<p>2025.10.13</p>\n                        <p>Binance Alpha listing</p>\n                        <p>Becomes the second Chinese meme coin globally to list on Binance Alpha, while the community launches the contributor program and cultural matrix initiative.</p>",
    history_step3:
      "<p>2025.11.15</p>\n                        <p>Community growth</p>\n                        <p>Hajimi’s official Twitter surpasses 5,000 followers</p>\n                        <p>The Hajimi channel exceeds 7,000 followers</p>\n                        <p>Hajimi community launches merch giveaways and a cultural creator contest</p>\n                        <p>The Hajimi Foundation is established and kicks off its first charity program</p>",
    culture_panel:
      "<h2>From one lyric to one cat to every cat and every story — the evolution of Hajimi culture</h2>\n                        <p>A cultural journey from 2021 to 2025</p>\n                        <p>Origins: from humming anime tunes to deconstructing the culture behind them</p>\n                        <p>Breakthrough: the stage when China collectively reinterpreted the Hajimi phenomenon</p>\n                        <p>Mainstream phase (2023–now): dominating short‑video platforms</p>\n                        <p>Semantic expansion: from “cute” to a “way of life”, bridging into the Web2 market</p>\n                        <p>Cultural recognition: “Hajimi” listed among the top ten buzzwords in Gen‑Z social‑media white papers</p>\n                        <p>This is how Hajimi gained hundreds of millions of fans and countless creative works</p>\n                        <p>Disclaimer: Hajimi is a decentralized meme token with no team, no roadmap, no utility and no expectation of profit. Nothing here is financial advice; please do your own research.<br>— This site exists simply to hear you say “Hajimi”.</p>",
    people_title: "Core Community Accounts",
    nav_ecology_culture_mobile: "Ecology - Culture",
    nav_ecology_concerts_mobile: "Ecology - Concerts",
    people_follow: "Follow us, Hajimi fans",
    tag_official: "",
    person1_desc:
      "From one lyric to every cat and every story—this evolution defines Hajimi culture.",
    person2_desc:
      "Every spread of Hajimi culture and each charitable act is the best gift to the world.",
    person3_desc:
      "Narrative and visual standards align all external communication and brand consistency.",
    copy_success: "Copied",
    copy_fail: "Copy failed",
    coming_soon: "In progress, stay tuned...",
    dex_not_listed: "Not listed",
    dex_fetch_fail: "Fetch failed",
  },
};

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [lang, setLang] = useState("zh");
  const [langOpen, setLangOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  useEffect(() => {
    const bannerBox = document.querySelector < HTMLElement > ".banner-box";

    const updateBannerBg = () => {
      if (!bannerBox) return;
      if (window.scrollY > 0) bannerBox.classList.add("scrolled");
      else bannerBox.classList.remove("scrolled");
    };

    window.addEventListener("scroll", updateBannerBg, { passive: true });
    window.addEventListener("load", updateBannerBg);
    updateBannerBg();

    return () => {
      window.removeEventListener("scroll", updateBannerBg);
      window.removeEventListener("load", updateBannerBg);
    };
  }, []);

  // 切换语言（这里只控制前端展示与 html lang，真正文案按现有 data-i18n 方案处理）
  const handleChangeLang = (nextLang) => {
    setLang(nextLang);
    setLangOpen(false);
  };

  // 初始化语言（从 localStorage 恢复）
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = window.localStorage.getItem("hajimi_lang");
      if (saved && (saved === "zh" || saved === "en")) {
        setLang(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  // 根据 lang 状态应用多语言文案
  useEffect(() => {
    if (typeof document === "undefined") return;
    const applyLanguage = (currentLang) => {
      const pack = I18N[currentLang] || I18N.zh;
      document.documentElement.setAttribute(
        "lang",
        currentLang === "en" ? "en" : "zh"
      );

      document.querySelectorAll("[data-i18n-key]").forEach((el) => {
        const key = el.getAttribute("data-i18n-key");
        const type = el.getAttribute("data-i18n-type");
        const translation = pack[key];
        if (!translation) return;
        if (type === "html") {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      });

      const languageCurrent = document.querySelector(
        ".language-box .language-current"
      );
      if (languageCurrent) {
        languageCurrent.textContent = currentLang === "en" ? "English" : "中文";
      }

      try {
        window.localStorage.setItem("hajimi_lang", currentLang);
      } catch {
        // ignore
      }
    };

    applyLanguage(lang);
  }, [lang]);

  // 迁移 create-btn-icon 绕按钮运动的动画逻辑
  useEffect(() => {
    if (typeof document === "undefined") return;
    const createBtn = document.querySelector(".create-btn");
    const createBtnIcon = createBtn?.querySelector(".create-btn-icon");

    if (!createBtn || !createBtnIcon) return;

    let distance = 0;
    const speed = 1.5;
    let radius = 0;
    let straightLength = 0;
    let perimeter = 0;
    let offsetX = 0;
    let offsetY = 0;
    let frameId;

    const recalcPath = () => {
      const btnWidth = createBtn.offsetWidth;
      const btnHeight = createBtn.offsetHeight;
      const iconWidth = createBtnIcon.offsetWidth;
      const iconHeight = createBtnIcon.offsetHeight;
      const padding = 8;

      const usableWidth = Math.max(btnWidth - 2 * padding - iconWidth, 0);
      const usableHeight = Math.max(btnHeight - 2 * padding - iconHeight, 0);

      radius = Math.min(usableHeight / 2, usableWidth / 2);
      straightLength = Math.max(usableWidth - 2 * radius, 0);
      perimeter = 2 * straightLength + 2 * Math.PI * radius;
      offsetX = padding + iconWidth / 2;
      offsetY = padding + iconHeight / 2;

      if (radius <= 0) {
        radius = Math.max(Math.min(usableWidth, usableHeight) / 2, 0);
        straightLength = 0;
        perimeter = 2 * Math.PI * radius;
      }
    };

    const getPoint = (d) => {
      const iconWidth = createBtnIcon.offsetWidth;
      const iconHeight = createBtnIcon.offsetHeight;
      const arcLength = Math.PI * radius;
      const totalLen = 2 * straightLength + 2 * arcLength;
      if (totalLen === 0) {
        return { x: 0, y: 0, angle: 0 };
      }

      let remaining = d % totalLen;
      let x = 0;
      let y = 0;
      let angle = 0;

      if (straightLength <= 0) {
        const theta = (remaining / totalLen) * Math.PI * 2;
        x = radius * Math.cos(theta);
        y = radius * Math.sin(theta);
        angle = theta;
      } else if (remaining < straightLength) {
        x = radius + remaining;
        y = 0;
        angle = 0;
      } else if (remaining < straightLength + arcLength) {
        const progress = (remaining - straightLength) / radius;
        x = radius + straightLength + radius * Math.sin(progress);
        y = radius - radius * Math.cos(progress);
        angle = progress;
      } else if (remaining < straightLength + arcLength + straightLength) {
        const progress = remaining - straightLength - arcLength;
        x = radius + straightLength - progress;
        y = 2 * radius;
        angle = Math.PI;
      } else {
        const progress =
          (remaining - straightLength - arcLength - straightLength) / radius;
        x = radius - radius * Math.sin(progress);
        y = radius + radius * Math.cos(progress);
        angle = Math.PI + progress;
      }

      return {
        x: x + offsetX - iconWidth / 2,
        y: y + offsetY - iconHeight / 2,
        angle,
      };
    };

    const animate = () => {
      if (perimeter === 0) {
        recalcPath();
      }
      distance = (distance + speed) % (perimeter || 1);
      const { x, y, angle } = getPoint(distance);
      createBtnIcon.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
      frameId = window.requestAnimationFrame(animate);
    };

    recalcPath();
    animate();
    window.addEventListener("resize", recalcPath);

    return () => {
      window.removeEventListener("resize", recalcPath);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  // DexScreener 数据：市值、市值流动性、4H 涨跌幅
  useEffect(() => {
    if (typeof document === "undefined") return;

    const INPUT_ADDR = "0xc33bacff9141da689875e6381c1932348ab4c5cb";
    const CHAIN = "bsc";
    const mcapEl = document.getElementById("mcap");
    const liqEl = document.getElementById("liq");
    const chg4hEl = document.getElementById("chg4h");

    const fmtUSD = (n) => {
      if (n == null || isNaN(n)) return "—";
      const a = Math.abs(n);
      if (a >= 1e9) return "$" + (n / 1e9).toFixed(2) + "B";
      if (a >= 1e6) return "$" + (n / 1e6).toFixed(2) + "M";
      if (a >= 1e3) return "$" + (n / 1e3).toFixed(2) + "K";
      return (
        "${" +
        Number(n).toLocaleString(undefined, { maximumFractionDigits: 2 }) +
        "}"
      );
    };

    const setText = (el, v) => {
      if (el) el.textContent = v;
    };

    const translate = (key) => {
      const pack = I18N[lang] || I18N.zh;
      return pack[key] ?? I18N.zh[key] ?? "";
    };

    const fetchAsToken = async (addr) => {
      const r = await fetch(
        `https://api.dexscreener.com/latest/dex/tokens/${addr}`,
        { cache: "no-store" }
      );
      if (!r.ok) throw new Error(`token endpoint HTTP ${r.status}`);
      const j = await r.json();
      return j?.pairs || null;
    };

    const fetchAsPair = async (chain, addr) => {
      const r = await fetch(
        `https://api.dexscreener.com/latest/dex/pairs/${chain}/${addr}`,
        { cache: "no-store" }
      );
      if (!r.ok) throw new Error(`pair endpoint HTTP ${r.status}`);
      const j = await r.json();
      if (j?.pair) return [j.pair];
      return j?.pairs || null;
    };

    const fetchCandles = async (
      chain,
      pairAddr,
      interval = "15m",
      limit = 16
    ) => {
      const url = `https://api.dexscreener.com/latest/dex/candles/${interval}/${chain}/${pairAddr}?limit=${limit}`;
      const r = await fetch(url, { cache: "no-store" });
      if (!r.ok) throw new Error(`candles HTTP ${r.status}`);
      const j = await r.json();
      return j?.candles || j?.pairs || j;
    };

    const pct = (a, b) => {
      if (!a || !b || a <= 0) return null;
      return ((b - a) / a) * 100;
    };

    const fmtPct = (x) => {
      if (x == null || !isFinite(x)) return "—";
      return (x >= 0 ? "+" : "") + x.toFixed(2) + "%";
    };

    const hydrateDexStats = async () => {
      if (!mcapEl || !liqEl || !chg4hEl) return;
      try {
        let pairs = await fetchAsToken(INPUT_ADDR);
        if (!pairs) pairs = await fetchAsPair(CHAIN, INPUT_ADDR);
        if (!pairs || !pairs.length) {
          setText(mcapEl, translate("dex_not_listed"));
          setText(liqEl, translate("dex_not_listed"));
          setText(chg4hEl, "—");
          return;
        }

        const best = pairs.reduce((a, b) =>
          (b?.liquidity?.usd || 0) > (a?.liquidity?.usd || 0) ? b : a
        );

        const fdv = best?.fdv ?? null;
        const liq = best?.liquidity?.usd ?? null;
        setText(mcapEl, fmtUSD(fdv));
        setText(liqEl, fmtUSD(liq));

        let chg4h = null;
        const chain = best?.chainId || CHAIN;
        const pairAddr =
          best?.pairAddress ||
          best?.pair?.address ||
          best?.url?.split("/").pop();

        if (pairAddr) {
          try {
            const candles = await fetchCandles(chain, pairAddr, "15m", 16);
            if (Array.isArray(candles) && candles.length >= 2) {
              const open = Number(candles[0]?.o ?? candles[0]?.open);
              const close = Number(
                candles[candles.length - 1]?.c ??
                  candles[candles.length - 1]?.close
              );
              chg4h = pct(open, close);
            }
          } catch (e) {
            const pc = best?.priceChange || {};
            if (pc.h1 != null && pc.h6 != null) {
              const w = 4 / 5;
              chg4h = pc.h1 * (1 - w) + pc.h6 * w;
            } else {
              chg4h = pc.h6 ?? pc.h1 ?? null;
            }
          }
        }

        setText(chg4hEl, chg4h != null ? fmtPct(chg4h) : "—");
      } catch (err) {
        console.warn("DexScreener fetch error:", err);
        setText(mcapEl, translate("dex_fetch_fail"));
        setText(liqEl, translate("dex_fetch_fail"));
        setText(chg4hEl, "—");
      }
    };

    hydrateDexStats();
  }, [lang]);

  // 点击页面空白处收起语言下拉
  useEffect(() => {
    const onClick = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const box = document.querySelector(".language-box");
      if (box && !box.contains(target)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const goLink = (url) => {
    window.open(url);
  };

  return (
    <main className="page-scaler">
      <div className="container-box">
        {toastMessage && <div className="copy-toast show">{toastMessage}</div>}
        <div className="banner">
          <img className="banner-img" src="/images/banner.png" alt="banner" />
          <img
            className="banner-img-2"
            src="/images/草.png"
            style={{ width: "100%" }}
            alt="装饰草地"
          />
        </div>

        <div className="banner-box">
          <img
            style={{ width: 88, height: 61 }}
            src="/images/logo.png"
            alt="Hajimi Logo"
          />
          <ul className="banner-box-list">
            <li data-i18n-key="nav_overview">概览</li>
            <li
              data-i18n-key="nav_history"
              onClick={() => {
                const el = document.getElementById("history-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              发展历程
            </li>
            <li className="nav-dropdown-item">
              <span data-i18n-key="nav_ecology">哈基米生态</span>
              <ul className="nav-dropdown">
                <li>
                  <a
                    href="https://hajimi-theta.vercel.app/"
                    target="_blank"
                    data-i18n-key="nav_ecology_memes"
                  >
                    文化
                  </a>
                </li>
                {/* <li>
                  <a href="#ecosystem-2" data-i18n-key="nav_ecology_anime">
                    动漫
                  </a>
                </li> */}
                <li>
                  <a
                    data-i18n-key="nav_ecology_concerts"
                    onClick={() => {
                      const pack = I18N[lang] || I18N.zh;
                      setToastMessage(pack.coming_soon);
                    }}
                  >
                    音乐会
                  </a>
                  {/* <button
                    type="button"
                    data-i18n-key="nav_ecology_concerts"
                    onClick={() => {
                      const pack = I18N[lang] || I18N.zh;
                      setToastMessage(pack.coming_soon);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      color: "inherit",
                      font: "inherit",
                      padding: 0,
                      cursor: "pointer",
                      fontSize: 22,
                    }}
                  >
                    音乐会
                  </button> */}
                </li>
              </ul>
            </li>
            <li className="nav-dropdown-item">
              <span data-i18n-key="nav_foundation">基金会</span>
              <ul className="nav-dropdown">
                <li>
                  <a
                    href="https://x.com/hajimi_fund"
                    target="_blank"
                    data-i18n-key="nav_foundation_charity"
                  >
                    慈善
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      const pack = I18N[lang] || I18N.zh;
                      setToastMessage(pack.coming_soon);
                    }}
                    data-i18n-key="nav_foundation_events"
                  >
                    活动
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-dropdown-item">
              <span data-i18n-key="nav_community">社区</span>
              <ul className="nav-dropdown">
                <li>
                  <a target="_blank" href="https://x.com/hajimi_CTO_BNB">
                    Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://t.me/BNB_Hajimiiii">
                    TG
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.tiktok.com/@hajimi_bnb">
                    tiktok
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div
            className={`language-box ${langOpen ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setLangOpen((prev) => !prev);
            }}
          >
            <div className="language-selector">
              <span className="language-current">
                {lang === "zh" ? "中文" : "English"}
              </span>
              <span className="language-arrow">▼</span>
            </div>
            <ul className="language-dropdown">
              <li
                data-lang="zh"
                className={lang === "zh" ? "selected" : ""}
                onClick={(e) => {
                  e.stopPropagation();
                  handleChangeLang("zh");
                }}
              >
                中文
              </li>
              <li
                data-lang="en"
                className={lang === "en" ? "selected" : ""}
                onClick={(e) => {
                  e.stopPropagation();
                  handleChangeLang("en");
                }}
              >
                English
              </li>
            </ul>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            type="button"
            className="nav-toggle"
            aria-label="Open navigation"
            onClick={() => setNavOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* 移动端右侧滑出导航 */}
        <div className={`nav-drawer ${navOpen ? "open" : ""}`}>
          <div className="nav-drawer-header">
            <span className="nav-drawer-title">Hajimi</span>
            <button
              type="button"
              className="nav-drawer-close"
              aria-label="Close navigation"
              onClick={() => setNavOpen(false)}
            >
              ×
            </button>
          </div>
          <nav className="nav-drawer-menu">
            <button
              data-i18n-key="nav_overview"
              className="nav-drawer-item"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setNavOpen(false);
              }}
            >
              概览
            </button>
            <button
              data-i18n-key="nav_history"
              className="nav-drawer-item"
              onClick={() => {
                const el = document.getElementById("history-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setNavOpen(false);
              }}
            >
              发展历程
            </button>
            <a
              className="nav-drawer-item"
              href="https://x.com/hajimi_fund"
              target="_blank"
              rel="noopener noreferrer"
              data-i18n-key="nav_foundation"
            >
              基金会
            </a>
            <a
              className="nav-drawer-item"
              href="https://t.me/BNB_Hajimiiii"
              target="_blank"
              rel="noopener noreferrer"
              data-i18n-key="nav_community"
            >
              社区
            </a>

            <a
              className="nav-drawer-item"
              href="https://hajimi-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              data-i18n-key="nav_ecology_culture_mobile"
            >
              生态文化
            </a>

            <a
              className="nav-drawer-item"
              data-i18n-key="nav_ecology_concerts_mobile"
              onClick={() => {
                const pack = I18N[lang] || I18N.zh;
                setToastMessage(pack.coming_soon);
              }}
            >
              生态音乐会
            </a>
          </nav>
        </div>

        <div className="about-box">
          <div className="about-content">
            <div className="about-content-title">
              {/* <img src="/images/关于.png" alt="关于" /> */}
              <div
                className="about-content-title-text"
                data-i18n-key="about_title"
              >
                关于
              </div>
            </div>

            <div
              className="about-content-text"
              data-i18n-key="about_desc"
              data-i18n-type="html"
            >
              <p>全网超千亿播放量和无数二创音乐视频的哈基米</p>
              <p>沉浸于哈基米，一个充满梗和音乐的 meme 世界。</p>
              <p>
                一句歌词到一只猫咪再到所有猫咪和所有事物的演变就是哈基米文化
              </p>
            </div>

            <div className="create-btn">
              <Link
                href="/music"
                className="create-btn-text"
                data-i18n-key="create_btn"
              >
                创作属于你自己的哈基米音乐
              </Link>
              <div className="create-btn-icon">
                <img src="/images/小猫爪.png" alt="小猫爪" />
              </div>
            </div>
          </div>
          <img className="fenge-image" src="/images/fenge.png" alt="分割装饰" />
        </div>

        <div className="heyue-box">
          <div className="heyue-content-box">
            <div className="heyue-left">
              <div className="heyue-left-item1">
                <img src="/images/p_left.png" alt="装饰" />
                <span data-i18n-key="contract_heading">合约地址 </span>
                <img src="/images/p_right.png" alt="装饰" />
              </div>
              <div className="heyue-left-item2" data-i18n-key="contract_unique">
                （唯一 CA）
              </div>
            </div>
            <div className="heyue-right">
              <div className="heyue-right-code">
                <span
                  className="heyue-contract"
                  onClick={async () => {
                    const text = "0x82ec31d69b3c289e541b50e30681fd1acad24444";
                    const pack = I18N[lang] || I18N.zh;
                    try {
                      if (navigator.clipboard?.writeText) {
                        await navigator.clipboard.writeText(text);
                      } else {
                        const textarea = document.createElement("textarea");
                        textarea.value = text;
                        textarea.style.position = "fixed";
                        textarea.style.opacity = "0";
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(textarea);
                      }
                      setToastMessage(pack.copy_success);
                    } catch (e) {
                      setToastMessage(pack.copy_fail);
                    }
                  }}
                >
                  0x82ec31d69b3c289e541b50e30681fd1acad24444
                </span>
              </div>

              <div className="swap-dex">
                <img
                  className="hoverBtn"
                  onClick={() =>
                    goLink(
                      "https://gmgn.ai/bsc/token/0x82ec31d69b3c289e541b50e30681fd1acad24444"
                    )
                  }
                  src="/assets/logo_small2.svg"
                  alt="gmgn"
                />
                <img
                  className="hoverBtn"
                  onClick={() =>
                    goLink(
                      "https://pancakeswap.finance/swap?outputCurrency=0x82Ec31D69b3c289E541b50E30681FD1ACAd24444"
                    )
                  }
                  src="/assets/panswap.svg"
                  alt="panswap"
                />
                <img
                  className="hoverBtn"
                  onClick={() =>
                    goLink(
                      "https://web3.binance.com/zh-CN/token/bsc/0x82ec31d69b3c289e541b50e30681fd1acad24444"
                    )
                  }
                  src="/assets/bnwallet.png"
                  alt="BN"
                />

                <img
                  style={{
                    width: 80,
                  }}
                  className="hoverBtn"
                  onClick={() =>
                    goLink(
                      "https://four.meme/token/0x82ec31d69b3c289e541b50e30681fd1acad24444"
                    )
                  }
                  src="/assets/fourmeme.svg"
                  alt="fourmeme"
                />
                {/* <img src="/assets/bnwallet.png" alt="BN" /> */}
              </div>
            </div>

            <div className="heyue-mao-content">
              <div className="heyue-mao-item heyue-mao-item-1">
                <div>
                  <p data-i18n-key="stat_mcap">市值</p>
                  <p>
                    <span id="mcap">-</span>
                  </p>
                </div>
              </div>
              <div className="heyue-mao-item heyue-mao-item-2">
                <div>
                  <p data-i18n-key="stat_liq">流动性</p>
                  <p>
                    <span id="liq">-</span>
                  </p>
                </div>
              </div>
              <div className="heyue-mao-item heyue-mao-item-3">
                <div>
                  <p data-i18n-key="stat_chg4h">4H涨跌幅</p>
                  <p>
                    <span id="chg4h">-</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="history-section" className="history-box">
          {/* <img src="/images/bg-7.png" alt="历史背景" /> */}
          <div className="history-title">
            <img src="/images/lf-1.png" alt="装饰" />
            <span data-i18n-key="history_title">路线图</span>
            <img src="/images/rg-1.png" alt="装饰" />
          </div>

          <div
            className="step1 step"
            data-i18n-key="history_step1"
            data-i18n-type="html"
          >
            <p>2025.10.07</p>
            <p>哈基米作为中文 MEME 登录 Web3 舞台</p>
            <p>哈基米上线 BNB CHAIN 链</p>
            <p>哈基米成为 24H 交易量达 100M</p>
            <p>哈基米 10.11 日市值突破 95M</p>
          </div>

          <div
            className="step2 step"
            data-i18n-key="history_step2"
            data-i18n-type="html"
          >
            <p>2025.10.13</p>
            <p>Binance Alpha 上线</p>
            <p>
              成为全球第二个上线 Binance Alpha
              的中文模因币，同时期社区启动贡献者计划与社区文化矩阵计划。
            </p>
          </div>

          <div
            className="step3 step"
            data-i18n-key="history_step3"
            data-i18n-type="html"
          >
            <p>2025.11.15</p>
            <p>社区发展</p>
            <p>哈基米官方推特关注突破 5000 人</p>
            <p>哈基米频道关注突破 7000 人</p>
            <p>哈基米社区周边活动派送，举办哈基米文化创作者大赛</p>
            <p>哈基米基金会成立，同时期开启第一期慈善计划</p>
          </div>
        </div>

        <div className="people-box">
          <div className="people-title">
            <img src="/images/p_left.png" alt="装饰" />
            <span data-i18n-key="people_title">主要社区账号</span>
            <img src="/images/p_right.png" alt="装饰" />
          </div>

          <div className="people-label">
            <div className="people-label-item">
              <div className="people-label-item-content">
                <div className="b1">
                  <span>@hajimi_CTO_BNB</span>
                  <span data-i18n-key="tag_official"></span>
                </div>
                <div className="b2" data-i18n-key="person1_desc">
                  一句歌词到一只猫咪再到所有猫咪和所有事物的演变-哈基米文化。
                </div>
                <div className="b3">
                  <a href="https://x.com/hajimi_CTO_BNB">
                    <img src="/images/icon1_2.png" alt="X" />
                  </a>
                </div>
              </div>
            </div>

            <div className="people-label-item">
              <div className="people-label-item-content">
                <div className="b1">
                  <span>@hajimi_fund</span>
                  <span data-i18n-key="tag_official"></span>
                </div>
                <div className="b2" data-i18n-key="person2_desc">
                  每一次的哈基米文化传播和慈善行动都是对世界最好的回报。
                </div>
                <div className="b3">
                  <a href="https://t.me/BNB_Hajimiiii">
                    <img src="/images/icon1_1.png" alt="Telegram" />
                  </a>
                </div>
              </div>
            </div>

            <div className="people-label-item">
              <div className="people-label-item-content">
                <div className="b1">
                  <span>@Kaito</span>
                  <span data-i18n-key="tag_official"></span>
                </div>
                <div className="b2" data-i18n-key="person3_desc">
                  叙事与视觉标准，整合对外沟通与品牌一致性。
                </div>
                <div className="b3">
                  <img src="/images/icon3_1.png" alt="Icon" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="b11"
            data-i18n-key="culture_panel"
            data-i18n-type="html"
          >
            <h4>一句歌词到一只猫咪再到所有猫咪和所有事物的演变-哈基米文化</h4>
            <p>2021-2025 的文化路程</p>
            <p>起源：从动漫哼唱到文化解构</p>
            <p>突破时刻：中国进行哈基米文化解构的阶段</p>
            <p>主流突破期（2023 年至今）：称霸短视频平台</p>
            <p>语义扩展：从“可爱”到“生活方式” 链接 Wbe2 市场</p>
            <p>
              文化认可：“哈基米”被列入 Z 世代社交媒体白皮书十大热门词汇之一。
            </p>
            <p>这就是哈基米收获亿万粉丝和无数创作的历史</p>
            <p>
              免责声明：
              哈基米是一个去中心化的迷因代币。没有团队，没有路线图，没有实用价值，没有任何收益预期，这不是财务建议，请自行研究。
              创建此网站的目的只想听你说一声“哈基米”。
            </p>
          </div>

          <div className="people-title pt1">
            <img src="/images/p_left.png" alt="装饰" />
            <span data-i18n-key="people_follow">关注我们吧，哈基米们</span>
            <img src="/images/p_right.png" alt="装饰" />
          </div>
        </div>

        <div className="copy-toast" id="copyToast" data-i18n-key="copy_success">
          复制成功
        </div>
      </div>
    </main>
  );
}
