import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router"
import { AddUserComponent } from "./add-user/add-user.component";
import { RispostaComponent } from "./risposta/risposta.component";

const routes : Routes = [
    {path : 'risposta' , component : RispostaComponent},
    {path : 'add-user' , component : AddUserComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {}