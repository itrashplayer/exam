import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-contact",
  templateUrl: "contact.html",
  styleUrls: ["contact.css"]
})
export class ContactPage {
  Kilograms: number;
  Minutes: number;
  caloriesburned: number;
  weightloss: number;
  Activity: number;
 
  constructor(public navCtrl: NavController) {}

  getAns() {
    if ((this.Activity ==1)) {
      this.caloriesburned = ((1.3 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==2)) {
      this.caloriesburned = ((1.5 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==3)) {
      this.caloriesburned = ((1.8 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==4)) {
      this.caloriesburned = ((2.0 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==5)) {
      this.caloriesburned = ((2.2 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==6)) {
      this.caloriesburned = ((2.5 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==7)) {
      this.caloriesburned = ((2.5 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==8)) {
      this.caloriesburned = ((3.5 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==9)) {
      this.caloriesburned = ((3.5 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==10)) {
      this.caloriesburned = ((4.3 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==11)) {
      this.caloriesburned = ((5 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==12)) {
      this.caloriesburned = ((5 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if ((this.Activity ==13)) {
      this.caloriesburned = ((5 * 3.5 * this.Kilograms * this.Minutes) / 200);
      this.weightloss = this.caloriesburned / 7700;

    } else if (this.Activity==14){
      this.caloriesburned = ((6*3.5*this.Kilograms* this.Minutes) / 200);
      this.weightloss = (this.caloriesburned/7700)

    } else if (this.Activity==15){
      this.caloriesburned = ((6.3*3.5*this.Kilograms* this.Minutes) / 200);
      this.weightloss = (this.caloriesburned/7700);

    } else if (this.Activity==16){
      this.caloriesburned = ((8*3.5*this.Kilograms* this.Minutes) / 200);
      this.weightloss = (this.caloriesburned/7700);

    } else if (this.Activity==17){
      this.caloriesburned = ((8*3.5*this.Kilograms* this.Minutes) / 200);
      this.weightloss = (this.caloriesburned/7700)

    } else if (this.Activity==18){
      this.caloriesburned = ((8*3.5*this.Kilograms* this.Minutes) / 200);
      this.weightloss = (this.caloriesburned/7700)

    } else if (this.Activity==19){
      this.caloriesburned = ((8.5*3.5*this.Kilograms* this.Minutes) / 200);
      this.weightloss = (this.caloriesburned/7700)

    } else if (this.Activity==20){
     this.caloriesburned = ((10*3.5*this.Kilograms* this.Minutes) / 200);
     this.weightloss = (this.caloriesburned/7700);

    } else if (this.Activity==21){
     this.caloriesburned = ((11.5*3.5*this.Kilograms* this.Minutes) / 200);
     this.weightloss = (this.caloriesburned/7700);
    } else {   
    }


  }



 
}
