## 📦 React Frontend Performance Optimization Guide

---

### 🔧 1. Code Optimizations

| Technique                     | Description                                        | Example                                                                            |
| ----------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Tree Shaking**              | Remove unused exports during bundling              | Only export what’s needed; use `import { Button } from 'lib'` instead of full lib. |
| **Lazy Loading**              | Load components only when needed                   | `const Cart = React.lazy(() => import('./Cart'))`                                  |
| **Code Splitting**            | Split bundles using dynamic imports                | `import('utils/heavy.js')` on demand                                               |
| **Build-time Optimization**   | Use `esbuild`, `SWC`, or `Turbopack`               | Replace Babel with SWC in Next.js                                                  |
| **Defer Scripts**             | Load non-critical scripts asynchronously           | `<script defer src="analytics.js" />`                                              |
| **Suspense for Lazy Content** | Wrap lazy components                               | `<Suspense fallback={<Loader />}><LazyComp /></Suspense>`                          |
| **Runtime Optimizations**     | Avoid recalculations, use `useMemo`, `useCallback` | `useMemo(() => expensiveFn(data), [data])`                                         |

---

### ⚙️ 2. Rendering Strategies

| Strategy                              | Description                    | Example                             |
| ------------------------------------- | ------------------------------ | ----------------------------------- |
| **Concurrent Rendering**              | Let React interrupt renders    | Enabled by default in React 18      |
| **Optimistic UI (`useOptimistic`)**   | Show expected result instantly | Show comment before server confirms |
| **Skeleton UI**                       | Placeholder UI while loading   | `<Skeleton />` for product cards    |
| **Pre-rendering (SSG/ISR)**           | Generate pages at build time   | Next.js `getStaticProps()`          |
| **Client-side Prefetching**           | Preload routes/data on hover   | `<Link prefetch />` in Next.js      |
| **Prefetch Queries (tanstack-query)** | Preload future queries         | `queryClient.prefetchQuery()`       |

---

### 🧠 3. Data Layer Optimization

| Tool                       | Purpose                       | Key Feature                   |
| -------------------------- | ----------------------------- | ----------------------------- |
| **React Context**          | Lightweight state sharing     | Good for theme, auth          |
| **Zustand**                | Minimalist state manager      | No boilerplate                |
| **Jotai**                  | Atomic state                  | Simple + scalable             |
| **Redux Toolkit**          | Enterprise-level global state | Middleware, RTK Query         |
| **TanStack Query / SWR**   | Data fetching + caching       | `useQuery`, cache, pagination |
| **Caching API Responses**  | Reduce server hits            | TTL-based caching via SWR     |
| **Stale-While-Revalidate** | Fast + fresh data             | SWR's default strategy        |

---

### 🌍 4. Network & Delivery Optimizations

| Method                        | Description                             | Example                                 |
| ----------------------------- | --------------------------------------- | --------------------------------------- |
| **Parallel Data Fetching**    | Use `Promise.all` for concurrent calls  | `Promise.all([fetchA(), fetchB()])`     |
| **Leverage CDN**              | Serve static assets from edge           | Use Cloudflare, Vercel Edge             |
| **Optimized Images**          | Lazy-load, compress, use modern formats | `<Image src="x.webp" loading="lazy" />` |
| **Next-gen formats**          | Use AVIF / WebP                         | Better compression                      |
| **Image CDN**                 | Resize on-the-fly                       | Vercel/ImageKit                         |
| **Font Optimization**         | Use font-display: swap                  | Prevent blocking                        |
| **Defer Non-critical CSS/JS** | Only load above-the-fold                | Use critical CSS extraction             |

---

### 📊 5. Core Web Vitals (UX Metrics)

| Metric                              | Description                       | Tips to Improve                           |
| ----------------------------------- | --------------------------------- | ----------------------------------------- |
| **LCP (Largest Contentful Paint)**  | Time to render main content       | Lazy load images, reduce server TTFB      |
| **CLS (Cumulative Layout Shift)**   | Unexpected layout changes         | Use fixed dimensions for images           |
| **FID (First Input Delay)**         | Delay in first user input         | Reduce JS execution time                  |
| **INP (Interaction to Next Paint)** | Response time of all interactions | Optimize event handlers, avoid re-renders |

---

### 🔐 6. Security (Frontend Specific)

| Strategy                          | Benefit                                   |
| --------------------------------- | ----------------------------------------- |
| **Content Security Policy (CSP)** | Prevent XSS by restricting script sources |
| **Sanitize Input**                | Avoid unsafe injections                   |
| **HTTPS**                         | Secure all connections                    |
| **Avoid Inline Scripts**          | Use `nonce` or `hash` for CSP             |
| **Helmet.js / Next.js headers**   | Set secure HTTP headers                   |

---

## 🧐 Additional Topics to Include

| Topic                                       | Why It Matters                             |
| ------------------------------------------- | ------------------------------------------ |
| **Memoization (`React.memo`)**              | Prevent re-renders of pure components      |
| **Avoid Anonymous Functions in JSX**        | Causes re-renders                          |
| **Virtualized Lists (e.g. `react-window`)** | Render only visible list items             |
| **Avoid Prop Drilling**                     | Use Context or custom hooks                |
| **Error Boundaries**                        | Prevent entire app crash                   |
| **Bundle Analyzer**                         | Use `webpack-bundle-analyzer` for insights |
| **React DevTools Profiler**                 | Identify performance bottlenecks           |
| **Avoid useEffect Loops**                   | Misconfigured deps lead to re-fetching     |

---

## 📊 Sample Table: Tools vs Use Case

| Tool           | State | Data Fetching | Caching | Dev Experience |
| -------------- | ----- | ------------- | ------- | -------------- |
| Redux Toolkit  | ✅     | ❌             | ❌       | ⚙️ Complex     |
| Zustand        | ✅     | ❌             | ❌       | ✅ Simple       |
| Jotai          | ✅     | ❌             | ❌       | 🧠 Atomic      |
| TanStack Query | ❌     | ✅             | ✅       | 🧠 Smart       |
| SWR            | ❌     | ✅             | ✅       | ⚡ Lightweight  |

---

## 🧹 Visual Example: Lazy vs Eager Load

```jsx
// Lazy Loading
const Chart = React.lazy(() => import('./Chart'));

<Suspense fallback={<Loading />}>
  <Chart />
</Suspense>
```

```jsx
// Eager Load (not optimal)
import Chart from './Chart';
<Chart />
```

---


