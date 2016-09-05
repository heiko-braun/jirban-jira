import {provideRouter, RouterConfig} from "@angular/router";
import {BoardsComponent} from "./components/boards/boards";
import {ConfigComponent} from "./components/config/config";
import {DbExplorerComponent} from "./components/dbexplorer/dbexplorer";
import {BoardComponent} from "./components/board/board";
import {AccessLogViewComponent} from "./components/access/accessLogView";

export const JIRBAN_ROUTES: RouterConfig = [
    { path: '', redirectTo: '/boards', pathMatch: 'full'},
    { path: 'boards', component: BoardsComponent },
    { path: 'board', component: BoardComponent },
    { path: 'config', component: ConfigComponent },
    { path: 'access-log', component: AccessLogViewComponent },
    { path: 'dbexplorer', component: DbExplorerComponent }
];

export const APP_ROUTER_PROVIDERS = provideRouter(JIRBAN_ROUTES);