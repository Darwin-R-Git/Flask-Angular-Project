import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router"
import { RispostaComponent } from "./risposta/risposta.component";

const routes : Routes = [
    {path : 'home' , component : RispostaComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {}