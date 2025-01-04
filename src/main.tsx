import { StrictMode } from "react";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";

import "./index.css";
import { store } from "./app/store.ts";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

// ルートコンポーネント
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
