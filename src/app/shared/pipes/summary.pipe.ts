import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : "summary"
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit: number = 60) {
        console.log(value);
        return value.substring(0 ,limit) + '...'
    }
}