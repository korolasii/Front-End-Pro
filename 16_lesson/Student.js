function Student(firstName, lastName, ageYear, ratings){
    this.firstName = firstName;
    this.lastName = lastName;
    this.ageYear = ageYear;
    this.ratings = ratings;
    this.attendance = new Array(25).fill(null);

    this.getAge = function() {
        let today = new Date();
        return today.getFullYear() - this.ageYear;
    }

    this.present = function(){
        let index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    }

    this.absent = function(){
        let index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    }

    this.getAverageRating = function() {
        let sumRatings = this.ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sumRatings / this.ratings.length;
    }

    this.getAttendanceAverage = function() {
        let attendedClasses = this.attendance.filter(entry => entry === true).length;
        let totalClasses = this.attendance.filter(entry => entry !== null).length;
        return attendedClasses / totalClasses;
    }

    this.summary = function() {
        let averageRating = this.getAverageRating();
        let attendanceAverage = this.getAttendanceAverage();

        if (averageRating > 90 && attendanceAverage > 0.9) {
            return "Молодець!";
        } else if (averageRating > 90 || attendanceAverage > 0.9) {
            return "Добре, але можна краще.";
        } else {
            return "Редиска!";
        }
    }
}

