

import { Component, OnInit} from '@angular/core';
import { Application } from '../shared/request/application';
import { Copyright } from '../copyright';
import { copyrigthList } from './listOfItems';
import { RegistrationService } from '../service/registration.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  providers: [RegistrationService]
})

export class RegistrationFormComponent implements OnInit {

  application: Application;
  copyrightList: Copyright[];
  serverErrorMessage: string;
  numericNumberReg= '[\+[0-9]{0,11}]+';


  applicationForm = this.fb.group({
    firstName: ['', [
      Validators.required,
      Validators.maxLength(32),
     Validators.pattern('[a-zA-ZĀ-ſ]*')
    ]],
    lastName: ['', [
      Validators.required,
      Validators.maxLength(32),
     Validators.pattern('[a-zA-ZĀ-ſ]*')
    ]],
    email: ['', [
      Validators.required,
      Validators.maxLength(32),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]],
    academyTime: ['', 
    [Validators.required
    ]],

    contractAgreement: ['',
    [Validators.required
    ]],

    contractReason: [" ", [
     Validators.required
    ]],

    likedTechnologies: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(300),
    ]],

    reasonForApplying: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(300),
    ]],

    school: ['',
  ],

    degree: ['',
],

    mobileNumber: ['', [
  //Validators.pattern(this.numericNumberReg),
  //  Validators.pattern('[\+[0-9]{0,11}]+'),
    ]],

    photo: ['', [

    ]  ],

    hobbies: ['', [
    
  ]],
    
    referenceToIt:['', [
     
    ]],

    linkedinUrl:['', [
      Validators.pattern("https?://.+"),
     // this.urlDomainValidator
    ]],
  });

  constructor(private registrationService: RegistrationService, private fb: FormBuilder) { }
 
 
  
    answer=false;
    onchange(args){
      this.answer = true;
        return this.answer;
    }

    onchange1(args){
      this.answer = false;
        return this.answer;
    }

  ngOnInit() {
    this.copyrightList = copyrigthList;
    this.application = new Application('', '', '','', '', '', '', '', '', '', '', '', '', '', '');
  
  }

  
    urlDomainValidator(control: FormControl){
      let url = control.value;
      if (url != -1) {
        let domain = url.slice(0,20);
        if (domain!="linkedin") {
          return {
            urlDomain : {
              parsedDomain :domain
            }
          }
        }
        return null;
      }
    }
    
  onSubmit() {
    this.application = this.applicationForm.value;
    this.registrationService.addRegistration(this.application).subscribe(() => {
      this.application = new Application('', '', '', '', '','','','','','','','','','');
      this.serverErrorMessage = '';
    },
      error => this.serverErrorMessage = error
    );
  }

  get firstName() { return this.applicationForm.get('firstName'); }
  get lastName() { return this.applicationForm.get('lastName');}
  get academyTime() {return this.applicationForm.get('academyTime'); }
  get email() {return this.applicationForm.get('email'); }
  get contractAgreement() {return this.applicationForm.get('contractAgreement'); }
  get contractReason() {return this.applicationForm.get('contractReason'); }
  get likedTechnologies() {return this.applicationForm.get('likedTechnologies'); }
  get reasonForApplying() {return this.applicationForm.get('reasonForApplying'); }
  get school() {return this.applicationForm.get('school'); }
  get degree() {return this.applicationForm.get('degree'); }
  get mobileNumber() {return this.applicationForm.get('mobileNumber'); }
  get hobbies() {return this.applicationForm.get('hobbies'); }
  get referenceToIt() {return this.applicationForm.get('referenceToIt'); }
  get linkedinUrl() {return this.applicationForm.get('linkedinUrl'); }


}
