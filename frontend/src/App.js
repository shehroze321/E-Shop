import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  UserActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  CheckoutPage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  PaymentPage
} from "./routes/Routes";
import {
  ShopHomePage,
  ShopDashboardPage,
  ShopCreateProductPage,
  ShopAllProductsPage,
  ShopCreateEventPage,
  ShopAllEventsPage,
  ShopAllCoupounsPage,
  ShopPreviewPage,
} from "./protectedRoutes/ShopRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import UserProtectedRoute from "./protectedRoutes/UserProtectedRoute";
import { loadSeller } from "./redux/actions/seller";
import SellerProtectedRoute from "./protectedRoutes/SellerProtectedRoute";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<UserActivationPage />}
        />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route
          path="/checkout"
          element={
            <UserProtectedRoute>
              <CheckoutPage />
            </UserProtectedRoute>
          }
        />
        <Route
              path="/payment"
              element={
                <UserProtectedRoute>
                  <PaymentPage />
                </UserProtectedRoute>
              }
            />
        <Route
          path="/profile"
          element={
            <UserProtectedRoute>
              <ProfilePage />
            </UserProtectedRoute>
          }
        />
        <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />

        {/* Shop Routes */}
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-product"
          element={
            <SellerProtectedRoute>
              <ShopCreateProductPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-products"
          element={
            <SellerProtectedRoute>
              <ShopAllProductsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-event"
          element={
            <SellerProtectedRoute>
              <ShopCreateEventPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-events"
          element={
            <SellerProtectedRoute>
              <ShopAllEventsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-coupouns"
          element={
            <SellerProtectedRoute>
              <ShopAllCoupounsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
