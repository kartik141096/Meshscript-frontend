import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ServicesComponent } from './pages/services/services.component';
import { WebsiteComponent } from './pages/website/website.component';
import { AdvertisingComponent } from './pages/advertising/advertising.component';
import { ApplicationComponent } from './pages/application/application.component';
import { GraphicComponent } from './pages/graphic/graphic.component';
import { SeoComponent } from './pages/seo/seo.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [

    
    {
        path:"",
        component:HomeComponent,
        data:{
            page:'home'
        }
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"projects",
        component:ProjectsComponent
    },
    {
        path:"skills",
        component:SkillsComponent
    },
    // {
    //     path:"services",
    //     component:ServicesComponent
    // },
    {
        path:"website",
        component:WebsiteComponent
    },
    {
        path:"advertising",
        component:AdvertisingComponent
    },
    {
        path:"application",
        component:ApplicationComponent
    },
    {
        path:"graphic",
        component:GraphicComponent
    },
    {
        path:"seo",
        component:SeoComponent
    },
    {
        path:"marketing",
        component:MarketingComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"payment",
        component:PaymentComponent
    },
    {
        path:"blog/:page_id",
        component: BlogComponent
    },
    { 
        path: '**', 
        pathMatch: 'full',  
        component: PageNotFoundComponent 
    },

];
