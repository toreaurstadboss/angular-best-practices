import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";
import "rxjs/add/observable/empty";

@Injectable()
export class UserRepositoryService {
  currentUser: any;

  constructor() {
    this.currentUser = {
      userId: "e61aebed-dbc5-437a-b514-02b8380d8efc",
      firstName: "Jim",
      lastName: "Cooper",
      email: "me@whitebeards.edu",
      classes: ["24ab7b14-f935-44c1-b91b-8598123ea54a"]
    };
  }

  saveUser(user): Observable<any> {
    user.classes = user.classes || [];
    this.currentUser = Object.assign({}, user, { classes: user.classes || [] });
    return Observable.empty().delay(1000);
  }

  enroll(classId): Observable<any> {
    if (!this.currentUser) {
      return Observable.throw("User not signed in");
    }

    if (this.currentUser.classes.includes[classId]) {
      return Observable.throw("Already enrolled");
    }

    // this.currentUser.classes.push(classId);

    this.currentUser = Object.assign({}, this.currentUser, {
      classes: this.currentUser.classes.concat([classId])
    });

    return Observable.empty().delay(1000);
  }

  drop(classId): Observable<any> {
    if (!this.currentUser) {
      return Observable.throw("User not signed in");
    }

    if (!this.currentUser.classes.includes(classId)) {
      return Observable.throw("Not enrolled");
    }

    this.currentUser = Object.assign({}, this.currentUser, {
      classes: this.currentUser.classes.filter(c => c.classId !== classId)
    });

    return Observable.empty().delay(1000);
  }

  signIn(credentials): Observable<any> {
    // Never, ever check credentials in client-side code.
    // This code is only here to supply a fake endpoint for signing in.
    if (
      credentials.email !== "me@whitebeards.edu" ||
      credentials.password !== "super-secret"
    ) {
      return Observable.throw("Invalid login");
    }

    this.currentUser = {
      userId: "e61aebed-dbc5-437a-b514-02b8380d8efc",
      firstName: "Jim",
      lastName: "Cooper",
      email: "me@whitebeards.edu",
      classes: ["24ab7b14-f935-44c1-b91b-8598123ea54a"]
    };

    return Observable.empty();
  }
}

const COURSES = [
  {
    courseNumber: "PO101",
    courseName: "Intro to Potions",
    creditHours: 3,
    description: "..."
  },
  {
    courseNumber: "HIS105",
    courseName: "Ancient History of Magic",
    creditHours: 4,
    description: "..."
  },
  {
    courseNumber: "CH101",
    courseName: "Intro to Charms",
    creditHours: 4,
    description: "..."
  },
  {
    courseNumber: "CH205",
    courseName: "Creating Advanced Charms",
    creditHours: 4,
    description: "..."
  },
  {
    courseNumber: "SP101",
    courseName: "Intro Spell Casting",
    creditHours: 4,
    description: "..."
  },
  {
    courseNumber: "SP201",
    courseName: "Advanced Spell Casting",
    creditHours: 4,
    description: "..."
  }
];

const COURSE_CATALOG = [
  {
    classId: "24ab7b14-f935-44c1-b91b-8598123ea54a",
    course: COURSES[0],
    professor: "Abramius Darksbayn",
    seatsAvailable: 23,
    days: "MWF",
    time: 11
  },
  {
    classId: "cebbc5ba-f49a-4708-b3dc-51a346b3231e",
    course: COURSES[0],
    professor: "Philosifus Siebrand",
    seatsAvailable: 9,
    days: "MWF",
    time: 12
  },
  {
    classId: "6130cdd4-071a-4559-8072-35f0fbec5516",
    course: COURSES[0],
    professor: "Abramius Darksbayn",
    seatsAvailable: 14,
    days: "THF",
    time: 2
  },
  {
    classId: "dd0343e9-50b2-4f1d-8b87-93c0b34f3d35",
    course: COURSES[1],
    professor: "Antonia Clavell",
    seatsAvailable: 28,
    days: "THF",
    time: 11
  },
  {
    classId: "7277956e-795f-4c0f-9861-cf03635df5ea",
    course: COURSES[2],
    professor: "Meriel Dufaux",
    seatsAvailable: 28,
    days: "THF",
    time: 11
  },
  {
    classId: "7277956e-795f-4c0f-9861-cf03635df5ea",
    course: COURSES[3],
    professor: "Adranus Klaus",
    seatsAvailable: 28,
    days: "THF",
    time: 11
  },
  {
    classId: "7277956e-795f-4c0f-9861-cf03635df5ea",
    course: COURSES[4],
    professor: "Ragnvald Graupnar",
    seatsAvailable: 28,
    days: "THF",
    time: 11
  },
  {
    classId: "7277956e-795f-4c0f-9861-cf03635df5ea",
    course: COURSES[5],
    professor: "Philosifus Siebrand",
    seatsAvailable: 28,
    days: "THF",
    time: 11
  },
  {
    classId: "7277956e-795f-4c0f-9861-cf03635df5ea",
    course: COURSES[2],
    professor: "Phoebe Chabon",
    seatsAvailable: 28,
    days: "THF",
    time: 11
  },
  {
    classId: "7277956e-795f-4c0f-9861-cf03635df5ea",
    course: COURSES[3],
    professor: "Sycily Soule",
    seatsAvailable: 28,
    days: "THF",
    time: 11
  },
  {
    classId: "7277956e-795f-4c0f-9861-cf03635df5ea",
    course: COURSES[4],
    professor: "Heldebald Cincebeaux",
    seatsAvailable: 28,
    days: "THF",
    time: 11
  },
  {
    classId: "7277956e-795f-4c0f-9861-cf03635df5ea",
    course: COURSES[5],
    professor: "Gerlinda Weinschroot",
    seatsAvailable: 28,
    days: "THF",
    time: 11
  }
];

const users = [
  {
    userId: "e61aebed-dbc5-437a-b514-02b8380d8efc",
    firstName: "Jim",
    lastName: "Cooper",
    email: "someones-email@gmail.com",
    password: "supersecret",
    classes: ["24ab7b14-f935-44c1-b91b-8598123ea54a"]
  }
];
