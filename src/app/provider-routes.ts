

export const allRoutes = [
  {
    path: 'get-started',
    loadComponent: () =>
      import(
        '../app/components/home-page/get-started/get-started.component'
      ).then((c) => c.GetStartedComponent),
  },

  {
    path: 'home',
    loadComponent: () =>
      import(
        '../app/components/home-page/home-page/home-page.component'
      ).then((c) => c.HomePageComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import(
        '../app/components/home-page/products-card/products-card.component'
      ).then((c) => c.ProductsCardComponent),
  },

  {
    path: 'product-details/:id',
    loadComponent: () =>
      import(
        '../app/components/cart-details/product-details/product-details.component'
      ).then((c) => c.ProductDetailsComponent),
  },

  {
    path: 'cart',
    loadComponent: () =>
      import(
        './components/cart-details/cart-container/cart-container.component'
      ).then((c) => c.CartContainerComponent),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import(
        '../app/components/home-page/items-section/items-section.component'
      ).then((c) => c.ItemsSectionComponent),
  },
  {
    path: 'order-confirmation',
    loadComponent: () =>
      import(
        './components/cart-details/confirmation-page/confirmation-page.component'
      ).then((c) => c.ConfirmationPageComponent),
  },
  {
    path:'**',
    redirectTo:'home'
  }
  
];
