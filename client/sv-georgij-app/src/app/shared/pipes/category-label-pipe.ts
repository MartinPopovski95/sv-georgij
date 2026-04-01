import { Pipe, PipeTransform } from '@angular/core';
import { SECTION_META } from '../../features/content/constants/section-meta';

@Pipe({
  name: 'categoryLabel'
})
export class CategoryLabelPipe implements PipeTransform {

  private readonly map = Object.fromEntries(
    Object.values(SECTION_META).map(v => [v.category, v.title])
  );

  transform(cateogryName: string | null | undefined): string {
    return (cateogryName && this.map[cateogryName]) ?? cateogryName ?? "";
  }

}
