import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from "@angular/core";

import { UserRepositoryService } from "../services/user-repository.services";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { FilterClassesService } from "./filter-classes.service";

@Component({
  styleUrls: ["catalog.component.css"],
  templateUrl: "catalog.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit, OnChanges {
  classes: any[];
  visibleClasses: any[];
  orderByField: any;

  constructor(
    private userRepository: UserRepositoryService,
    private catalogService: CatalogRepositoryService,
    private filterClassesService: FilterClassesService
  ) {}

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {
    this.catalogService.getCatalog().subscribe(classes => {
      // debugger
      this.classes = classes;
      this.applyFilter("");
    });
  }

  enroll(classToEnroll) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId).subscribe(
      null,
      err => {
        console.error(err);
        classToEnroll.processing = false;
      }, // add a toast message or something
      () => {
        classToEnroll.processing = false;
        classToEnroll.enrolled = true;
      }
    );
  }

  drop(classToDrop) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId).subscribe(
      null,
      err => {
        console.error(err);
        classToDrop.processing = false;
      }, // add a toast message or something
      () => {
        classToDrop.processing = false;
        classToDrop.enrolled = false;
      }
    );
  }

  mutateFirstProfessor() {
    this.visibleClasses[0].professor = "Zebraman";

    this.visibleClasses = [
      Object.assign(this.visibleClasses[0], { professor: "Zebraman" }),
      ...this.visibleClasses.slice(1)
    ];
  }

  applyFilter(filter) {
    this.visibleClasses = this.filterClassesService.filterClasses(
      filter,
      this.classes
    );
  }
}
