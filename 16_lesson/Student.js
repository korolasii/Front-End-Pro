function Student(firstName, lastName, ageYear, ratings) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ageYear = ageYear;
    this.ratings = ratings;
    this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function() {
    let today = new Date();
    return today.getFullYear() - this.ageYear;
}

Student.prototype.present = function() {
    let index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = true;
    }
}

Student.prototype.absent = function() {
    let index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = false;
    }
}

Student.prototype.getAverageRating = function() {
    let sumRatings = this.ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumRatings / this.ratings.length;
}

Student.prototype.getAttendanceAverage = function() {
    let attendedClasses = this.attendance.filter(entry => entry === true).length;
    let totalClasses = this.attendance.filter(entry => entry !== null).length;
    return attendedClasses / totalClasses;
}

Student.prototype.summary = function() {
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
