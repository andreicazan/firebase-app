import { Component, Input } from "@angular/core";

interface User{
    firstName: string,
    lastname: string
}

@Component({
    selector:'newsletter',
    template: `
    
   
    `
})

export class NewsletterComponent{
    @Input()
    user: User;
    
}

