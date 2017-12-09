// const FrontendRoutes: Routes = [
//   <Route>{
//     path: '',
//     component: DashboardComponent,
//     canActivate: [AuthGuardService],
//     data: {
//       routeId: FrontendRouteIds.Dashboard,
//       title: FrontendRouteNames.Dashboard,
//       navigation: 'dashboard'
//     }
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(FrontendRoutes)],
//   exports: [RouterModule],
// })
export class FrontendRoutingModule {

}

//
// export class FrontendRouting {
//   static Dashboard: Route = <Route>{
//     path: 'dashboard',
//     component: DashboardComponent,
//     canActivate: [AuthGuardService],
//     data: {
//       routeId: FrontendRouteIds.Dashboard,
//       title: FrontendRouteNames.Dashboard,
//       navigation: 'dashboard'
//     },
//     // children: [
//     //   {
//     //     path: 'product/select',
//     //     component: ProductCollectionComponent,
//     //     data: {
//     //       routeId: ProductRouteIds.ProductCollection,
//     //       title: ProductRouteNames.ProductCollection,
//     //       navigation: '/product/select'
//     //     },
//     //   }
//     // ]
//   };
//   static Login: Route = <Route>{
//     path: 'login',
//     component: LoginComponent,
//     data: {
//       routeId: FrontendRouteIds.Login,
//       title: FrontendRouteNames.Login,
//       navigation: 'login'
//     }
//   };
//   static Default: Route = <Route>{
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'dashboard',
//     data: {
//       routeId: FrontendRouteIds.Default,
//       navigation: ''
//     }
//   };
//   static PageNotFound: Route = <Route>{
//     path: '**',
//     component: PageNotFoundComponent,
//     data: {
//       routeId: FrontendRouteIds.PageNotFound,
//       title: FrontendRouteNames.PageNotFound,
//       navigation: '**'
//     }
//   };
// }
