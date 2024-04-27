import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'age'
})
export class agePipe implements PipeTransform{
transform(value: number) {
    console.log(value);
    
}
}