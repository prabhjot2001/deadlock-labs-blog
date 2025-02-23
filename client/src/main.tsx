import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { BrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.tsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RootLayout>
          <App />
        </RootLayout>
        <Toaster />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
