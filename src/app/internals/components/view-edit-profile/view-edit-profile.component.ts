import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/map';


// ---imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap ,Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Faculty } from '../../../data-model/faculty';
import { Student } from '../../../data-model/student';
import { FacultiesService } from '../../../services/faculties.service';
import { EducationLevelService } from '../../../services/educationLevel.service';
import { EducationLevel } from '../../../data-model/educationLevel';
import { SkillsService } from '../../../services/skills.service';
import { Profile } from '../../../services/profile.service';
import { StudentService } from '../../../services/student.service';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import * as edge from "selenium-webdriver/edge";
import { JwtHelper } from 'angular2-jwt';
import { Skill } from '../../../data-model/skill';
import 'rxjs/operator/timestamp';


const URL = 'https://localhost:3000/api/';

@Component({
  selector: 'edit-profile',
  templateUrl: './view-edit-profile.component.html',
  styleUrls: [ './view-edit-profile.component.css' ]
})

export class EditProfileComponent implements OnInit {
  educationLevels: EducationLevel[] = [];
  student: Student;
  faculties: Faculty[] = [];
  selectedFaculty: Faculty = new Faculty();
  photo: string;
  birthday: string;
  degree: EducationLevel = new EducationLevel();
  initSkill: Skill = new Skill();
  skills: Skill[] = [];
  term$ = new Subject<string>();
  selSkills: Skill[] = [];
  major: string;
  minor: string;
  programs: Array<string> = [];
  graduation: string;
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean = false;
  private jwtHelper: JwtHelper = new JwtHelper();
  private user: number;
  reload: boolean;

  constructor(
    // Service init
    private profileService: Profile,
    private studentService: StudentService,
    private facultiesService: FacultiesService,
    private educationLevelService: EducationLevelService,
    private skillsService: SkillsService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // --skills instant search
    this.skillsService.search(this.term$).subscribe(results => this.skills = results);
  }

  // ---init
  ngOnInit(): void {
    this.student = new Student();
    this.reload = false;
    this.birthday = '';
    this.graduation = '';
    this.selectedFaculty.name = 'Your faculty';
    console.log(this.selectedFaculty);
    this.initSkill.skill = 'Your skills';
    this.selSkills.push(this.initSkill);
    this.major = 'Your major';
    this.minor = 'Your minor';
    this.student.description = 'Please enter any extra skills or useful information';
    this.programs = ['Aerospace Engineering', 'American Studies', 'Ancient and Medieval Studies', 'Anthropology',
      'Applied International Studies', 'Archaeology and Materials', 'Architecture', 'Architecture Studies',
      'Art, Culture and Technology', 'Asian and Asian Diaspora Studies', 'Astronomy', 'Atmospheric Chemistry',
      'Biological Engineering', 'Biology', 'Biomedical Engineering', 'Brain and Cognitive Sciences',
      'Business Analytics', 'Chemical Engineering', 'Chemical-Biological Engineering', 'Chemistry', 'Chinese',
      'Civil and Environmental Engineering', 'Civil and Environmental Systems', 'Civil Engineering',
      'Comparative Media Studies', 'Computer Science', 'Computer Science and Engineering ', 'Design',
      'Earth, Atmospheric and Planetary Sciences', 'Economics', 'Electrical Engineering', 'Electrical Science',
      'Energy Studies', 'Entrepreneurship & Innovation', 'Environmental Engineering Science', 'Finance', 'French',
      'German', 'History', 'History of Architecture and Art', 'Humanities and Engineering', 'Humanities and Science',
      'International Development', 'Japanese', 'Latin American and Latino Studies', 'Linguistics', 'Literature',
      'Management', 'Materials Science and Engineering', 'Mathematical Economics', 'Mathematics',
      'Mathematics with Computer Science', 'Mechanical Engineering', 'Mechanical and Ocean Engineering',
      'Middle Eastern Studies', 'Molecular Biology', 'Music', 'Nuclear Science & Engineering', 'Philosophy', 'Physics',
      'Planning', 'Political Science', 'Public Policy', 'Russian and Eurasian Studies', 'Science, Technology and Society',
      'Spanish', 'Statistics and Data Science', 'Theater Arts', 'Toxicology and Environmental Health', 'Urban Studies and Planning',
      'Women and Gender Studies', 'Writing'];

    // Perform service calls
    this.user = this.jwtHelper.decodeToken(localStorage.getItem('currentUser')).user._id as number;
    this.photo = 'http://localhost:3000/api/uploads/' + this.user.toString();
    this.prepareData();
    this.uploader = new FileUploader({ url: 'http://localhost:3000/api/uploads/' + this.user.toString(),
      allowedMimeType: ['image/png', 'image/jpeg'], queueLimit: 1, itemAlias: 'photo' });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.uploader.clearQueue();
      console.log('ImageUpload:uploaded:', item, status, response);
      this.reload = false;
    };
  }

  uploadPhoto(): void {
    this.reload = true;
    this.uploader.uploadAll();
  }

  prepareData(): void {
    this.getFaculties();
  }

  getFaculties(): void {
    this.facultiesService.getFaculties().then(faculties => {
      this.faculties = faculties;
      this.getDegrees();
    });
  }

  getDegrees(): void {
    this.educationLevelService.getEducationLevels().then(educationLevels => {
      this.educationLevels = educationLevels;
      this.degree = this.educationLevels[0];
      this.getSkills();
    });
  }

  getSkills(): void {
    this.skillsService.getAllSkills().then(skills => {
      this.skills = skills;
      this.getStudent();
    });
  }

  getStudent(): void {
    this.studentService.getById(this.user.toString()).then(response => this.setFields(response));
  }

  setFields(info: any) {
    this.student.id = this.user;

    if (info.firstname) {
      this.student.firstname = info.firstname;
    }
    if (info.lastname) {
      this.student.lastname = info.lastname;
    }
    if (info.email) {
      this.student.email = info.email;
    }
    if (info.birthday) {
      this.birthday = info.birthday;
    }
    if (info.degree) {
      this.degree = this.educationLevels.find(result => result._id === info.degree);
      console.log(this.degree);
    }
    if (info.description) {
      this.student.description = info.description;
    }
    if (info.major) {
      this.major = info.major;
    }
    if (info.minor) {
      this.minor = info.minor;
    }
    if (info.graduation) {
      this.graduation = info.graduation;
    }
    if (info.skills) {
      for (let id of info.skills) {
        console.log(id);
        console.log(this.skills.find(result => result._id === id));
        this.selSkills.push(this.skills.find(result => result._id === id));
      }
      if (this.selSkills.length > 1) {
        let index: number = this.selSkills.indexOf(this.initSkill);
        if (index !== -1) {
          this.selSkills.splice(index, 1);
        }
      }
      this.skills = [];
    }
    if (info.photo) {
      this.photo = 'http://localhost:3000/api/uploads/' + this.user.toString();
      localStorage.setItem('photo', this.photo);
    }
    if (info.faculty) {
      this.selectedFaculty = this.faculties.find(result => result._id === info.faculty);
      console.log(this.selectedFaculty);
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  discardPhoto(): void {
    this.uploader.cancelAll();
    this.uploader.clearQueue();
  }

  cancel(): void {
    this.location.back();
  }

  dropdownselectedDegree(educationLevel: EducationLevel): void {
    this.degree = educationLevel;
  }

  dropdownselectedFaculty(faculty: Faculty): void {
    this.selectedFaculty = faculty;
  }

  dropdownselectedMajor(program: string): void {
    this.major = program;
  }

  dropdownselectedMinor(program: string): void {
    this.minor = program;
  }

  removeSkill(skill: Skill) {
    let index: number = this.selSkills.indexOf(skill);
    if (index !== -1) {
      this.selSkills.splice(index, 1);
    }
    if (this.selSkills.length < 1) {
      this.selSkills.push(this.initSkill);
    }
  }

  // ---submit project
  onSubmit() {
    this.student.birthday = this.birthday;
    this.student.degree = this.degree;
    if (this.selSkills.find(result => result.skill === 'Your skills')) {
      this.student.skills = [];
    } else {
      this.student.skills = this.selSkills;
    }
    if (this.selectedFaculty.name !== 'Your faculty') {
      this.student.faculty = this.selectedFaculty;
    }
    this.student.birthday = this.birthday;
    this.student.major = this.major;
    this.student.minor = this.minor;
    this.student.graduation = this.graduation;
    delete this.student['password'];
    console.log(this.student);
    this.profileService.updateThisUser(this.student);
    this.router.navigate(['/internals/updatesuccess']);
  }

  // --save selected skills
  selectedSkills(item: Skill) {
    console.log(item + ' was selected as skill.');
    if (!this.selSkills.find(result => result._id === item._id)) {
      this.selSkills.push(item);
    }
    if (this.selSkills.length > 1) {
      let index: number = this.selSkills.indexOf(this.initSkill);
      if (index !== -1) {
        this.selSkills.splice(index, 1);
      }
    }
  }
}
