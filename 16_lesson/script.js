let student1 = new Student('Vasya', 'Kargan', 2000, [95, 88, 92, 100]);
let student2 = new Student('Elena', 'Glenta', 1998, [85, 75, 90, 80]);

student1.present();
student1.present();
student1.absent();

console.log(student1.getAge());
console.log(student1.summary());


student2.present();
student2.absent();
student2.absent();
console.log(student2.getAge());
console.log(student2.summary());
